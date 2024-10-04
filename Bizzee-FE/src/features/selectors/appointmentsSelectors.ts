import { RootState } from "store/rootReducer";

export const selectEvents = (state: RootState) => state.appointments.events;
export const selectPopupPosition = (state: RootState) =>
  state.appointments.popupPosition;
export const selectIsPopupOpen = (state: RootState) =>
  state.appointments.isPopupOpen;
export const selectSelectedEvents = (state: RootState) =>
  state.appointments.selectedEvents;
export const selectIsCreateWindowOpen = (state: RootState) =>
  state.appointments.isCreateWindowOpen;
export const selectIsEditWindowOpen = (state: RootState) =>
  state.appointments.isEditWindowOpen;
export const selectCreateTime = (state: RootState) =>
  state.appointments.createTime;
export const selectResources = (state: RootState) =>
  state.appointments.resources;
export const selectMaster = (state: RootState) =>
  state.appointments.selectedMaster;
export const selectCurrentEventDetails = (state: RootState) =>
  state.appointments.currentDetails;
export const selectIsDayView = (state: RootState) =>
  state.appointments.isDayView;
