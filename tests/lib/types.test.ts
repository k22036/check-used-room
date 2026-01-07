import type { RoomData, RoomDataItem } from "@/lib/types";
import { CompleteDataSchema, DataEntrySchema } from "../test_helper/zod_zchema";

// テスト用データ
const validItem: RoomDataItem = {
  subject: "数学",
  room: "A101",
  season: "前期",
  open_time: "月Ⅰ",
};

const validData: RoomData = {
  A101: [validItem],
  B202: [
    {
      subject: "物理",
      room: "B202",
      season: "後期",
      open_time: "火Ⅱ",
    },
  ],
};

describe("RoomData Zod schema", () => {
  it("should validate a single data entry", () => {
    expect(() => DataEntrySchema.parse(validItem)).not.toThrow();
  });

  it("should validate the complete data structure", () => {
    expect(() => CompleteDataSchema.parse(validData)).not.toThrow();
  });
});
