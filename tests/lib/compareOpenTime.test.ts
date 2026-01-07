import { compareOpenTime } from "@/lib/compareOpenTime";

const base = {
  subject: "科目",
  room: "教室",
  season: "前期",
};

describe("compareOpenTime", () => {
  it("correctly compares by day of the week", () => {
    const a = { ...base, open_time: "月Ⅰ" };
    const b = { ...base, open_time: "火Ⅰ" };
    expect(compareOpenTime(a, b)).toBeLessThan(0);
    expect(compareOpenTime(b, a)).toBeGreaterThan(0);
  });

  it("compares by period when days are the same", () => {
    const a = { ...base, open_time: "月Ⅰ" };
    const b = { ...base, open_time: "月Ⅱ" };
    expect(compareOpenTime(a, b)).toBeLessThan(0);
    expect(compareOpenTime(b, a)).toBeGreaterThan(0);
  });

  it("returns 0 for identical open_time", () => {
    const a = { ...base, open_time: "水Ⅲ" };
    const b = { ...base, open_time: "水Ⅲ" };
    expect(compareOpenTime(a, b)).toBe(0);
  });
});
