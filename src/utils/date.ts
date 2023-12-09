import dayjs from "dayjs";

export function timestampToDay(time: number): string {
  return dayjs(time * 1000).format("ddd");
}
