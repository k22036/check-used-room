import * as z from "zod";
import { DAYS, SEASONS } from "@/lib/constants/date";

const SeasonSchema = z.object({
  value: z.enum(["前期", "後期"]),
  label: z.enum(["前期", "後期"]),
  id: z.enum(["early", "final"]),
});

const SeasonsSchema = z.array(SeasonSchema);

const DaysSchema = z.tuple([
  z.literal("月"),
  z.literal("火"),
  z.literal("水"),
  z.literal("木"),
  z.literal("金"),
  z.literal("土"),
  z.literal("日"),
]);

describe("SEASONS schema", () => {
  it("should match the SeasonSchema for all items", () => {
    expect(() => SeasonsSchema.parse(SEASONS)).not.toThrow();
  });
});

describe("DAYS schema", () => {
  it("should be exactly the expected days array", () => {
    expect(() => DaysSchema.parse(DAYS)).not.toThrow();
  });
});
