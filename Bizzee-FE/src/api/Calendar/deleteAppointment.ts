import { apiClient } from "lib/apiClient";
import { APPOINTMENT_ROUTE } from "../constants";
import { IDeleteRequest } from "pages/Settings/components/Appointments/components/CalendarMenuDetails/types";

export const deleteAppointment = async (data: IDeleteRequest) => {
  try {
    const res = await apiClient.delete(`${APPOINTMENT_ROUTE}/delete`, {
      data: data,
    });

    return res.data;
  } catch (error) {
    throw new Error(`Failed to delete appointment: ${error.message}`);
  }
};
