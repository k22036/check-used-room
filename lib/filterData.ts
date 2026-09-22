import type { RoomData } from "./types";

interface FilterDataOptions {
  data: RoomData;
  room: string;
  season: string;
}

export function filterData({ data, room, season }: FilterDataOptions) {
  return data[room].filter((roomData) => roomData.season === season);
}
