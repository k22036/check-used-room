import * as z from "zod";
import data from "@/lib/data/complete_data.json";
import { rooms } from "@/lib/get_rooms";

const RoomsSchema = z.array(z.string());

describe("rooms", () => {
  it("should match the keys of complete_data.json", () => {
    expect(rooms).toEqual(Object.keys(data));
  });

  it("should be an array of strings", () => {
    expect(() => RoomsSchema.parse(rooms)).not.toThrow();
  });
});
