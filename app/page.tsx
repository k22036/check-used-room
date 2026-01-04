"use client";

import Link from "next/link";
import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import { rooms } from "@/lib/get_rooms";

export default function Home() {
  const [param, setParam] = useState("");
  const filteredRooms = rooms.filter((room) => room.includes(param));

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-orange-200 flex flex-col items-center py-10">
      <PageTitle title="教室一覧" />
      <div className="flex items-center justify-center mb-8 w-full">
        <div className="relative w-full max-w-lg">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-orange-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <title>検索アイコン</title>
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="教室名で検索..."
            className="block w-full pl-10 pr-4 py-3 border-2 border-orange-200 rounded-xl bg-orange-50/70 text-lg focus:outline-none focus:ring-2 focus:ring-orange-300 shadow transition placeholder-orange-300"
            value={param}
            onChange={(e) => setParam(e.target.value)}
            style={{ boxShadow: "0 2px 8px 0 rgba(255, 183, 77, 0.10)" }}
          />
        </div>
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
