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
    expect(compareOpenTime({ first: a, second: b })).toBeLessThan(0);
    expect(compareOpenTime({ first: b, second: a })).toBeGreaterThan(0);
  });

  it("compares by period when days are the same", () => {
    const a = { ...base, open_time: "月Ⅰ" };
    const b = { ...base, open_time: "月Ⅱ" };
    expect(compareOpenTime({ first: a, second: b })).toBeLessThan(0);
    expect(compareOpenTime({ first: b, second: a })).toBeGreaterThan(0);
  });

  it("returns 0 for identical open_time", () => {
    const a = { ...base, open_time: "水Ⅲ" };
    const b = { ...base, open_time: "水Ⅲ" };
    expect(compareOpenTime({ first: a, second: b })).toBe(0);
  });
});
