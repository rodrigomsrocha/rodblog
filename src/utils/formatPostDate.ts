import dayjs from "dayjs";

export function formartPostDate(date: string) {
  const formattedDate = dayjs(date).format("DD MMM YYYY");
  return formattedDate;
}
