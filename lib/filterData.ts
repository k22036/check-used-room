import { RoomData } from "./types";

export function filterData(data: RoomData, room: string, season: string) {
  return data[room]
    .filter((data) => data.season === season)
    // .filter((data) => data.open_time[0] === day)
    // .sort((a,b) => days.indexOf(a.open_time[0]) - days.indexOf(b.open_time[0]))
}