"use client";

import { useState } from "react";
import RoomList from "@/components/home/RoomList";
import PageTitle from "@/components/PageTitle";
import RoomNotFound from "@/components/room/RoomNotFound";
import SearchBar from "@/components/SearchBar";
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
            <RoomNotFound />
          ) : (
            <RoomList rooms={filteredRooms} />
          )}
        </ul>
      </div>
    </main>
  );
}
