import Link from "next/link";

interface Props {
  rooms: string[];
}

const RoomList = ({ rooms }: Props) => (
  <ul className="space-y-3">
    {rooms.map((room) => (
      <li key={room}>
        <Link
          className="block px-4 py-3 rounded-md hover:bg-orange-50 border border-orange-200 transition text-orange-700 font-medium shadow-sm"
          href={`/pages/room/${room}`}
        >
          {room}
        </Link>
      </li>
    ))}
  </ul>
);

export default RoomList;
