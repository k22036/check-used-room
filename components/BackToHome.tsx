import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Link from "next/link";

const homePath = "/";

const BackToHome: React.FC = () => (
  <div className="mb-6">
    <Link
      href={homePath}
      className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-700 font-semibold transition"
    >
      <ArrowBackIosNewIcon fontSize="small" />
      ホームに戻る
    </Link>
  </div>
);

export default BackToHome;
