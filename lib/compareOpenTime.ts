import { DAYS } from "./constants/date";
import type { RoomDataItem } from "./types";

export function compareOpenTime(a: RoomDataItem, b: RoomDataItem) {
  const temp = DAYS.indexOf(a.open_time[0]) - DAYS.indexOf(b.open_time[0]);
  if (temp === 0) {
    return a.open_time[1].localeCompare(b.open_time[1]);
  } else {
    return temp;
  }
}
