import Link from "next/link";

const BackToHome: React.FC = () => (
  <div className="mb-6">
    <Link
      href="/"
      className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-700 font-semibold transition"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <title>戻るアイコン</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      ホームに戻る
    </Link>
  </div>
);

export default BackToHome;
