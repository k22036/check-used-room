import { filterData } from "@/lib/filterData";
import type { RoomData } from "@/lib/types";

const mockData: RoomData = {
  A101: [
    { subject: "数学", room: "A101", season: "前期", open_time: "月Ⅰ" },
    { subject: "物理", room: "A101", season: "後期", open_time: "火Ⅱ" },
  ],
  B202: [{ subject: "化学", room: "B202", season: "前期", open_time: "水Ⅲ" }],
};

describe("filterData", () => {
  it("filters data by room and season", () => {
    const result = filterData({ data: mockData, room: "A101", season: "前期" });
    expect(result).toEqual([
      { subject: "数学", room: "A101", season: "前期", open_time: "月Ⅰ" },
    ]);
  });

  it("returns an empty array when no entries match", () => {
    const result = filterData({ data: mockData, room: "A101", season: "通年" });
    expect(result).toEqual([]);
  });

  it("throws an error when room doesn't exist", () => {
    // 存在しないroomの場合はundefined.filterでエラーになるため、例外をテスト
    expect(() =>
      filterData({ data: mockData, room: "C303", season: "前期" }),
    ).toThrow();
  });
});
