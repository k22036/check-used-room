"use client";

import Link from "next/link";
import { useState } from "react";
import { rooms } from "@/lib/get_rooms";

export default function Home() {
  const [param, setParam] = useState("");
  const filteredRooms = rooms.filter((room) => room.includes(param));

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-orange-200 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8 text-orange-700 drop-shadow">
        教室検索
      </h1>
      <div className="flex items-center gap-3 mb-8 bg-white rounded-lg shadow px-6 py-4">
        <input
          type="text"
          placeholder="教室名で検索..."
          className="px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 transition w-64 text-lg bg-orange-50/50"
          value={param}
          onChange={(e) => setParam(e.target.value)}
        />
        <button
          type="button"
          className="px-5 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold rounded-md shadow hover:from-orange-500 hover:to-yellow-500 transition border border-orange-400"
          onClick={() => {}}
        >
          検索
        </button>
      </div>
      <div className="w-full max-w-xl bg-white rounded-lg shadow p-6">
        <ul className="space-y-3">
          {filteredRooms.length === 0 ? (
            <li className="text-orange-300 text-center py-8">
              該当する部屋がありません
            </li>
          ) : (
            filteredRooms.sort().map((room) => (
              <li key={room}>
                <Link
                  href={`/pages/room/${room}`}
                  className="block px-4 py-3 rounded-md hover:bg-orange-50 border border-orange-200 transition text-orange-700 font-medium shadow-sm"
                >
                  {room}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
}
