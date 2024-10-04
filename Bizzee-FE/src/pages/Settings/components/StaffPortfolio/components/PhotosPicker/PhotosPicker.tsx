import React, { FC, memo, useEffect, useId, useState } from "react";
import { Box } from "@mui/material";
import { styles } from "./PhotosPicker.styled";
import { ImgPickerCard } from "../CreatePortfolio/ImgPickerCard";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import {
  IPhotosPickerProps,
  InitialStates,
  SetStateFunc,
  imgFilesType,
  imgUrlsType,
  savedLinksType,
} from "./types";
import { MainModal } from "components/MainModal";

export const PhotosPicker: FC<IPhotosPickerProps> = memo(
  ({ formik, initialLinks }) => {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [imageToDelete, setImageToDelete] = useState<number | null>(null);
    const initialFixedArray = () => Array.from({ length: 5 }, () => null);
    const [imgFiles, setImgFiles] = useState<imgFilesType>(initialFixedArray);
    const [imgUrls, setImgUrls] = useState<imgUrlsType>(initialFixedArray);
    const [savedLinks, setSavedLinks] =
      useState<savedLinksType>(initialFixedArray);

    useEffect(() => {
      if (initialLinks) {
        const sortedInitialLinks = initialLinks.sort((a, b) => {
          if (!a.imageLink && !!b.imageLink) {
            return 1;
          } else if (!!a.imageLink && !b.imageLink) {
            return -1;
          } else {
            return 0;
          }
        });

        setSavedLinks(sortedInitialLinks);
      }
    }, [initialLinks]);

    useEffect(() => {
      formik.setFieldValue("files", imgFiles);
      formik.setFieldValue("images", savedLinks);
    }, [imgFiles, savedLinks]);

    const moveItem = <T,>(prevValue: T[], index: number, newOrder: number) => {
      const updatedItem = [...prevValue];
      const movedItem = updatedItem[index];
      updatedItem.splice(index, 1);
      updatedItem.splice(newOrder - 1, 0, movedItem);
      return updatedItem;
    };

    const handleOrderChange = (index: number, newOrder: number) => {
      setImgFiles((prevValue) => moveItem(prevValue, index, newOrder));
      setImgUrls((prevValue) => moveItem(prevValue, index, newOrder));
      setSavedLinks((prevValue) => moveItem(prevValue, index, newOrder));
    };

    const handleDragEnd = (result: DropResult) => {
      const { source, destination } = result;
      const noChanges =
        !destination ||
        (destination.droppableId === source.droppableId &&
          source.index === destination.index);

      if (noChanges) {
        return;
      }

      handleOrderChange(source.index, destination.index + 1);
    };

    const onDeleteImg = (index: number) => {
      setIsDeleteModalOpen(true);
      setImageToDelete(index);
    };

    const handleDelete = () => {
      if (imageToDelete === null) {
        return;
      }

      imgUrls[imageToDelete] &&
        URL.revokeObjectURL(imgUrls[imageToDelete] as string);

      const initialStates: InitialStates = {
        savedLinks: [savedLinks, setSavedLinks],
        imgFiles: [imgFiles, setImgFiles],
        imgUrls: [imgUrls, setImgUrls],
      };

      Object.keys(initialStates).forEach((key) => {
        const [state, setState] = initialStates[key as keyof InitialStates];

        if (state[imageToDelete]) {
          const setStateTyped = setState as SetStateFunc<typeof state>;
          const newState = [...state] as typeof state;
          newState[imageToDelete] = null;
          setStateTyped(newState);
        }
      });

      setImageToDelete(null);
      setIsDeleteModalOpen(false);
    };

    return (
      <>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="ROOT" direction="horizontal">
            {(provided) => (
              <Box
                {...provided.droppableProps}
                ref={provided.innerRef}
                sx={styles.cardsContainer}
              >
                {imgFiles.map((file, index) => {
                  const id = useId();
                  return (
                    <Draggable key={id} draggableId={String(id)} index={index}>
                      {(provided) => (
                        <Box
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          sx={styles.cardDndWrapper}
                        >
                          <ImgPickerCard
                            maxImages={5}
                            initialOrder={index + 1}
                            onOrderChange={(newOrder) =>
                              handleOrderChange(index, newOrder)
                            }
                            file={file}
                            setImgFiles={setImgFiles}
                            setImgUrls={setImgUrls}
                            imgUrl={imgUrls[index]}
                            onDeleteImg={onDeleteImg}
                            savedLink={savedLinks[index]}
                            setSavedLinks={setSavedLinks}
                          />
                        </Box>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
        <MainModal
          openModal={isDeleteModalOpen}
          modalClose={() => {
            setImageToDelete(null);
            setIsDeleteModalOpen(false);
          }}
          handleAction={handleDelete}
          titleMessage="Are you sure?"
          bodyMessage="Do you really want to delete this image?"
          buttonMessage="Delete"
          secondBtnMessage="Cancel"
          zIndex={1700}
        />
      </>
    );
  },
);
