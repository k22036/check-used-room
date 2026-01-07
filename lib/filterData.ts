import type { RoomData } from "./types";

export function filterData(data: RoomData, room: string, season: string) {
  return data[room].filter((data) => data.season === season);
}
