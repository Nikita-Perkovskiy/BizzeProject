import {
  PHONE_CLEAR_NUMBER_REGEX,
  PHONE_FORMAT_REGEX,
  PHONE_GROUP_NUMBER_REGEX,
  FORMATTED_PHONE_REGEXP,
} from "./regex";

export const formatPhoneNumber = (countryCode: string, phoneNumber: string) => {
  const cleaned = ("" + phoneNumber).replace(PHONE_CLEAR_NUMBER_REGEX, "");
  const match = cleaned.match(PHONE_FORMAT_REGEX);

  if (match) {
    return `+${countryCode} (${match[3]}) ${match[2]} ${match[4]}`;
  }

  const groupedNumbers = phoneNumber.match(PHONE_GROUP_NUMBER_REGEX);

  if (groupedNumbers) {
    return `${countryCode} (${groupedNumbers[1]}) ${groupedNumbers[2]} ${groupedNumbers[3]}`;
  }

  return `${countryCode} (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6,
  )} ${phoneNumber.slice(6, 9)}`;
};

export const formatAppointmentPhone = (phoneNumber: string) => {
  const formatted = phoneNumber.replace(FORMATTED_PHONE_REGEXP, "$1 $2 $3 $4");

  return formatted;
};
