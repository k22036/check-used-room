"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import BackToHome from "@/components/BackToHome";
import DaySelector from "@/components/room/DaySelector";
import RoomDetailList from "@/components/room/RoomDetailList";
import RoomNotFound from "@/components/room/RoomNotFound";
import SeasonSelector from "@/components/room/SeasonSelector";
import { compareOpenTime } from "@/lib/compareOpenTime";
import { DAYS } from "@/lib/constants/date";
import completeData from "@/lib/data/complete_data.json";
import { filterData } from "@/lib/filterData";
import type { RoomData } from "@/lib/types";

type Params = {
  room: string;
};

const Page = () => {
  const params = useParams<Params>();
  const room = decodeURIComponent(params.room);

  const [season, setSeason] = useState("前期");
  const changeSeasonValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSeason(event.target.value);

  const [day, setDay] = useState(DAYS[0]);
  const changeDayValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDay(event.target.value);

  const roomData: RoomData = completeData;
  const filteredData = roomData[room]
    ? filterData(roomData, room, season)
        .filter((data) => data.open_time[0] === day)
        .sort((a, b) => compareOpenTime(a, b))
    : [];

  const pageTitle = `${room} の詳細`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-orange-200 flex flex-col items-center py-10">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow p-8">
        <BackToHome />
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-orange-700 drop-shadow text-center">
          {pageTitle}
        </h1>
        <SeasonSelector season={season} onChange={changeSeasonValue} />
        <DaySelector day={day} onChange={changeDayValue} />
        {roomData[room] ? (
          <RoomDetailList data={filteredData} />
        ) : (
          <RoomNotFound />
        )}
      </div>
    </main>
  );
};

export default Page;
