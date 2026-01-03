import { DAYS } from "./constants/date";

interface Input {
  subject: string;
  room: string;
  season: string;
  open_time: string;
}

export function compareOpenTime(a: Input, b: Input) {
  const temp = DAYS.indexOf(a.open_time[0]) - DAYS.indexOf(b.open_time[0]);
  if (temp === 0) {
    return a.open_time[1].localeCompare(b.open_time[1]);
  } else {
    return temp;
  }
}
