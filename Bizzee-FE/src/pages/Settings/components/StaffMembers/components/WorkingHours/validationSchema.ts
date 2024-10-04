import * as yup from "yup";

export const validationSchema = yup.object({
  businessUnit: yup.string().required("Please select a Business Unit"),
  fromTime: yup
    .string()
    .required("Enter the time")
    .max(5, "")
    .test("is-not-00:00", "Enter the time", (value) => value !== "00:00"),
  toTime: yup
    .string()
    .required("Enter the time")
    .max(5, "")
    .test("is-not-00:00", "Enter the time", (value) => value !== "00:00"),
  customDatesDTO: yup.object({
    customTimeFrom: yup.string().max(5, "Enter the time"),
    customTimeTo: yup.string().max(5, "Enter the time"),
  }),
});
