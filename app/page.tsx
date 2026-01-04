"use client";

import Link from "next/link";
import { useState } from "react";
import SearchBar from "@/app/components/SearchBar";
import PageTitle from "@/components/PageTitle";
import { rooms } from "@/lib/get_rooms";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const filteredRooms = rooms.filter((room) => room.includes(searchText));

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-orange-200 flex flex-col items-center py-10">
      <PageTitle title="教室一覧" />
      <SearchBar
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="教室名で検索..."
        className="mb-8"
      />
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
