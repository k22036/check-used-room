"use client"

import React from 'react'
import completeData from '@/lib/data/complete_data.json'
import { RoomData } from '@/lib/types'
import { filterData } from '@/lib/filterData'
import { compareOpenTime } from '@/lib/compareOpenTime'

export const Page = ({ params }: { params: { room: string } }) => {

  const room = decodeURIComponent(params.room)
  const roomData: RoomData = JSON.parse(JSON.stringify(completeData))

  const [season, setSeason] = React.useState("前期")
  const changeSeasonValue = (event: React.ChangeEvent<HTMLInputElement>) => setSeason(event.target.value);

  const days = ['月', '火', '水', '木', '金', '土', '日']

  const [day, setDay] = React.useState("月")
  const changeDayValue = (event: React.ChangeEvent<HTMLInputElement>) => setDay(event.target.value);
  
  return (
    <div>
      <h1>{room}</h1>
      <div className='flex'>
        <div className='mx-5'>
          <input id='early' type="radio" value="前期" checked={season === "前期"} onChange={changeSeasonValue}/>
          <label htmlFor='early'>前期</label>
        </div>
        <div>
          <input id='final' type="radio" value="後期" checked={season === "後期"} onChange={changeSeasonValue}/>
          <label htmlFor='final'>後期</label>
        </div>
      </div>

      <div className='flex'>
        {days.map((d, index) => (
          <div key={d} className='mx-5'>
            <input id={String(index)} type="radio" value={d} checked={d === day} onChange={changeDayValue}/>
            <label htmlFor={String(index)}>{d}</label>
          </div>
        ))}
      </div>

      {roomData[room] ? (
        <div>
          {filterData(roomData, room, season)
          .filter((data) => data.open_time[0] === day)
          .sort((a,b) => compareOpenTime(a,b))
          .map((data, i) => (
            <div key={i}>
              <div>{data.subject}</div>
              <div>{data.room}</div>
              <div>{data.season}</div>
              <div>{data.open_time}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>Room not found</div>
      )}
    </div>
  )
}
export default Page