import { DAYS } from "./constants/date";
import type { RoomDataItem } from "./types";

interface CompareOpenTimeOptions {
  first: RoomDataItem;
  second: RoomDataItem;
}

export function compareOpenTime({ first, second }: CompareOpenTimeOptions) {
  const temp =
    DAYS.indexOf(first.open_time[0]) - DAYS.indexOf(second.open_time[0]);
  if (temp === 0) {
    return first.open_time[1].localeCompare(second.open_time[1]);
  }
  return temp;
}
