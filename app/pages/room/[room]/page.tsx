import type { Metadata } from "next";
import RoomClient from "@/components/room/RoomClient";

type Props = {
  params: Promise<{ room: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { room } = await params;
  const decodedRoom = decodeURIComponent(room);
  return {
    title: `${decodedRoom} の詳細 | Check Used Room`,
    description: `${decodedRoom} の授業使用状況を確認できます。学期や曜日で絞り込んで空き時間を調べましょう。`,
  };
}

export default function Page() {
  return <RoomClient />;
}
