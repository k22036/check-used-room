import type { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "教室一覧 | Check Used Room",
  description:
    "大学の教室使用状況を確認できるサービスです。教室名で検索して空き状況を調べましょう。",
};

export default function Home() {
  return <HomeClient />;
}
