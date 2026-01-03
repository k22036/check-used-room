"use client";

import Link from "next/link";
import { useState } from "react";
import { rooms } from "@/lib/get_rooms";

export default function Home() {
  const [param, setParam] = useState("");
  const filteredRooms = rooms.filter((room) => room.includes(param));

  return (
    <div>
      <div className="flex py-2">
        <input
          type="text"
          className="mx-5 my-2 border-solid border-black border-2"
          onChange={(e) => {
            setParam(e.target.value);
          }}
        />
        <button className="border-solid border-black border-2">Search</button>
      </div>
      {filteredRooms.sort().map((room) => (
        <div key={room}>
          <Link href={`/pages/room/${room}`}>
            <div>{room}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
