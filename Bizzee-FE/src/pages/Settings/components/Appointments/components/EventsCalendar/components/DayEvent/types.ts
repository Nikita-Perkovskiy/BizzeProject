import { EventProps } from "react-big-calendar";
import { ICustomEvent } from "../../types";

export interface ICustomEventProps extends Omit<EventProps, "event"> {
  event: ICustomEvent;
}
