import * as yup from "yup";

export const initialCreateValues = {
  files: [],
  category: "",
  tags: [],
  description: "",
};

export const initialEditValues = {
  files: [],
  images: [],
  category: "",
  tags: [],
  description: "",
};

export const DESCRIPTION_REGEX = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9 -]+$/;

export const validationSchema = yup.object({
  category: yup.string().required("Please select the Category"),
});
