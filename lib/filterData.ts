import type { RoomData } from "./types";

type FilterDataOptions = {
  data: RoomData;
  room: string;
  season: string;
};

export function filterData({ data, room, season }: FilterDataOptions) {
  return data[room].filter((data) => data.season === season);
}
