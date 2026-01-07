import * as z from "zod";
import data from "@/lib/data/complete_data.json";
import { CompleteDataSchema } from "@/tests/test_helper/zod_zchema";

describe("complete_data.json schema", () => {
  it("should match the expected schema", () => {
    const result = CompleteDataSchema.safeParse(data, { reportInput: true });

    if (!result.success) {
      const pretty = z.prettifyError(result.error);
      throw new Error(
        `complete_data.json does not match the schema:\n${pretty}`,
      );
    }
  });
});
