export type MessageType = "success" | "error" | "delete";

export interface Message {
  message: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | null;
}

export interface IUseNotificationToast {
  type: MessageType;
  message?: string;
}
