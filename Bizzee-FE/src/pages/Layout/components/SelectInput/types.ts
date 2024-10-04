import { FormikProps } from "formik";
import {
  IAddServicesFormValues,
  IAdditionalServiceDto,
} from "pages/Settings/components/Services/components/AddServices/interface";
import {
  InitialValue,
  initialData,
} from "pages/Settings/components/StaffMembers/components/MasterForm/interface";
import { IFormValues } from "pages/Settings/components/Appointments/components/ScheduleAppointment/ScheduleAppointmentTypes";

export interface SelectInputProps {
  formik:
    | FormikProps<InitialValue>
    | FormikProps<IAddServicesFormValues>
    | FormikProps<IAdditionalServiceDto>
    | FormikProps<IFormValues>;
  disabled?: boolean;
  name: string;
  id?: string;
  label?: string;
  selectValues?: initialData[];
  placeholder?: string;
}
