import * as z from "zod";
import { DAYS } from "@/lib/constants/date";

// 各教室の配列要素のスキーマ
export const DataEntrySchema = z.object({
  subject: z.string().min(1),
  room: z.string().min(1),
  season: z.enum(["前期", "後期", "通年"], {
    error: (issue) =>
      `season must be '前期' or '後期', received '${issue.input}'`,
  }),
  open_time: z.union([
    z.string().regex(new RegExp(`^[${DAYS.join("")}].+$`), {
      error: (issue) =>
        `open_time must start with one of [${DAYS.join(", ")}], received '${issue.input}'`,
    }),
    z.literal("集中"),
  ]),
});

export const CompleteDataSchema = z.record(
  z.string(),
  z.array(DataEntrySchema),
);
