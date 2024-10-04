import React, { FC, useEffect, useState } from "react";
import { useBlocker } from "react-router";
import type { BlockerFunction } from "react-router-dom";
import { MainModal } from "components/MainModal";
import { ILeaveBlockModalProps, defaultProps } from "./constants";

export const LeaveBlockModal: FC<ILeaveBlockModalProps> = ({
  isBlocked = defaultProps.isBlocked,
  content = defaultProps.content,
  title = defaultProps.title,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shouldBlock = React.useCallback<BlockerFunction>(
    ({ currentLocation, nextLocation }) =>
      isBlocked && currentLocation.pathname !== nextLocation.pathname,
    [isBlocked],
  );

  const blocker = useBlocker(shouldBlock);

  const handleStayOnPage = () => {
    blocker.reset?.();
    setIsModalOpen(false);
  };

  const handleLeavePage = () => {
    blocker.proceed?.();
  };

  useEffect(() => {
    blocker.state === "blocked" && setIsModalOpen(true);
  }, [blocker.state]);

  return (
    <MainModal
      isBlockModal
      openModal={isModalOpen}
      titleMessage={title}
      bodyMessage={content}
      modalClose={handleStayOnPage}
      handleAction={handleLeavePage}
      buttonMessage="Stay on Page"
      secondBtnMessage="Leave Page"
    />
  );
};
