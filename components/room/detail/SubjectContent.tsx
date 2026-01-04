import type { RoomData } from "@/lib/types";

interface Props {
  data: RoomData[string][number];
}

const SubjectContent = ({ data }: Props) => {
  return (
    <div className="text-sm text-orange-500">
      教室: {data.room} / {data.season} / {data.open_time}
    </div>
  );
};

export default SubjectContent;
