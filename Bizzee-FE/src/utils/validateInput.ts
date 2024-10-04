export const validateInput = (
  value: string,
  emptyInputMessage: string,
  invalidInputMessage: string,
): { isValid: boolean; errorText: string } => {
  if (!value.trim().length) {
    return {
      isValid: false,
      errorText: emptyInputMessage,
    };
  }

  const regex = /^[a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s.'/-]+$/;
  if (!regex.test(value)) {
    return {
      isValid: false,
      errorText: invalidInputMessage,
    };
  }

  return { isValid: true, errorText: "" };
};
