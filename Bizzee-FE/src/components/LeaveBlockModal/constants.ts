export interface ILeaveBlockModalProps {
  isBlocked?: boolean;
  content?: string;
  title?: string;
}

export const defaultProps = {
  content: "Do you really want to leave this page?",
  title: "Are you sure?",
  isBlocked: false,
};
