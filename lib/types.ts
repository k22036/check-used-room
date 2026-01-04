export interface RoomData {
  [key: string]: {
    subject: string;
    room: string;
    season: string;
    open_time: string;
  }[];
}

export type RoomDataItem = RoomData[string][number];
