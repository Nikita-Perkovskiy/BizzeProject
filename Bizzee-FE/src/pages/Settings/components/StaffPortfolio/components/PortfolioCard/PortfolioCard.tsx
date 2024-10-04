import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  ListItemIcon,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";
import { ReactComponent as DotsIcon } from "assets/svg/icon_more-vertical.svg";
import { ReactComponent as ArrowIcon } from "assets/svg/icon_chevron.svg";
import { Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { styles } from "./PortfolioCard.styled";
import { IPortfolioCardProps, buttonTypes, menuItems } from "./constants";
import { CardMenu } from "components/CardMenu";
import { deleteMasterPortfolioItem } from "api/MasterPortfolio/deleteMasterPortfolioItem";
import { getMasterPortfolioList } from "api/MasterPortfolio/getMasterPortfolioList";
import { useParams } from "react-router-dom";
import { useNotificationToast } from "hooks/useNotificationToast";

export const PortfolioCard: FC<IPortfolioCardProps> = ({
  cardInfo,
  handleOpenEdit,
  setCurrentPortfolioId,
  setPortfolios,
}) => {
  const { id, description, category, tags, images } = cardInfo;
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { masterId } = useParams();

  const handleMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const toggleDescription = () => {
    setIsDescriptionShown((isShown) => !isShown);
  };

  return (
    <Card sx={styles.cardWrapper}>
      <Box sx={styles.contentContainer}>
        <CardHeader
          action={
            <IconButton
              aria-label="settings"
              onClick={handleMenuToggle}
              sx={styles.menuBtn}
            >
              <DotsIcon />
            </IconButton>
          }
          title={
            <Chip
              label={category.title.toUpperCase()}
              sx={styles.categoryTag}
            />
          }
          sx={styles.cardHeader}
        />
        <Swiper
          className={`portfolioSlider-${id}`}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
        >
          {images.map((photo) => {
            if (!photo.imageLink) {
              return;
            }

            return (
              <SwiperSlide key={photo.id}>
                <CardMedia
                  component="img"
                  image={photo.imageLink}
                  alt={category.title}
                  height="100%"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <CardContent
          sx={[
            styles.descriptionContainer,
            isDescriptionShown
              ? styles.descriptionShown
              : styles.descriptionHidden,
          ]}
        >
          <Typography paragraph sx={styles.descriptionText}>
            {description}
          </Typography>
          <Box sx={styles.tagsContainer}>
            {tags.map((tag) => (
              <Typography key={tag.id} sx={styles.tagText}>
                {tag.tag}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </Box>
      <CardActions disableSpacing sx={styles.actions}>
        <IconButton
          onClick={toggleDescription}
          sx={[
            styles.iconBtn,
            isDescriptionShown ? styles.iconBtnClosed : styles.iconBtnOpen,
          ]}
        >
          <ArrowIcon />
        </IconButton>
      </CardActions>
      <CardMenu
        open={open}
        anchorEl={anchorEl}
        onClick={() => setAnchorEl(null)}
        sx={styles.cardMenu}
        className="portfolioCard"
      >
        {menuItems.map((item, index) => {
          const isDelete = item.type === buttonTypes.DELETE;
          const isEdit = item.type === buttonTypes.EDIT;

          return (
            <Box key={item.id}>
              <MenuItem
                onClick={async () => {
                  if (isDelete) {
                    try {
                      await deleteMasterPortfolioItem(id);
                      const portfolios = await getMasterPortfolioList(
                        Number(masterId),
                      );
                      setPortfolios && setPortfolios(portfolios);
                    } catch (error) {
                      useNotificationToast({ type: "error" });
                    }
                  }
                  if (isEdit) {
                    handleOpenEdit(true);
                    setCurrentPortfolioId(id);
                  }
                }}
                sx={[styles.menuItem, isDelete ? { color: "error.main" } : {}]}
              >
                <ListItemIcon
                  sx={[
                    styles.menuItemIcon,
                    isDelete ? { color: "error.main" } : {},
                  ]}
                  className="menuIcon"
                >
                  {item.icon}
                </ListItemIcon>
                <Typography>{item.title}</Typography>
              </MenuItem>
              {index < menuItems.length - 1 && <Divider />}
            </Box>
          );
        })}
      </CardMenu>
    </Card>
  );
};
