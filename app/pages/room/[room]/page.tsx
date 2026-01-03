"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { compareOpenTime } from "@/lib/compareOpenTime";
import completeData from "@/lib/data/complete_data.json";
import { filterData } from "@/lib/filterData";
import type { RoomData } from "@/lib/types";

type Params = {
  room: string;
};

const Page = () => {
  const params = useParams<Params>();
  const room = decodeURIComponent(params.room);

  let roomData: RoomData = {};
  if (room in completeData) {
    roomData = completeData;
  }

  const [season, setSeason] = useState("前期");
  const changeSeasonValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSeason(event.target.value);

  const days = ["月", "火", "水", "木", "金", "土", "日"];

  const [day, setDay] = useState("月");
  const changeDayValue = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDay(event.target.value);

  const subject_key = (data: RoomData[string][number]): string => {
    return `${data.subject}-${data.room}-${data.season}-${data.open_time}`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-orange-200 flex flex-col items-center py-10">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-orange-700 drop-shadow text-center">
          {room} の詳細
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <input
              id="early"
              type="radio"
              value="前期"
              checked={season === "前期"}
              onChange={changeSeasonValue}
              className="accent-orange-400 w-5 h-5"
            />
            <label htmlFor="early" className="text-orange-700 font-medium">
              前期
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="final"
              type="radio"
              value="後期"
              checked={season === "後期"}
              onChange={changeSeasonValue}
              className="accent-orange-400 w-5 h-5"
            />
            <label htmlFor="final" className="text-orange-700 font-medium">
              後期
            </label>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {days.map((d, index) => (
            <div key={d} className="flex items-center gap-1">
              <input
                id={String(index)}
                type="radio"
                value={d}
                checked={d === day}
                onChange={changeDayValue}
                className="accent-orange-400 w-5 h-5"
              />
              <label
                htmlFor={String(index)}
                className="text-orange-600 font-medium"
              >
                {d}
              </label>
            </div>
          ))}
        </div>
        {roomData[room] ? (
          <div>
            {filterData(roomData, room, season)
              .filter((data) => data.open_time[0] === day)
              .sort((a, b) => compareOpenTime(a, b))
              .map((data) => (
                <div
                  key={subject_key(data)}
                  className="mb-6 p-5 rounded-lg border border-orange-200 bg-orange-50/60 shadow-sm"
                >
                  <div className="text-lg font-semibold text-orange-700 mb-1">
                    {data.subject}
                  </div>
                  <div className="text-sm text-orange-500">
                    教室: {data.room} / {data.season} / {data.open_time}
                  </div>
                </div>
              ))}
            {filterData(roomData, room, season).filter(
              (data) => data.open_time[0] === day,
            ).length === 0 && (
              <div className="text-orange-300 text-center py-8">
                該当する授業はありません
              </div>
            )}
          </div>
        ) : (
          <div className="text-orange-300 text-center py-8">Room not found</div>
        )}
      </div>
    </main>
  );
};

export default Page;
