import type { RoomDataItem } from "@/lib/types";

interface Props {
  data: RoomDataItem;
}

const SubjectContent = ({ data }: Props) => {
  return (
    <div className="text-sm text-orange-500">
      教室: {data.room} / {data.season} / {data.open_time}
    </div>
  );
};

export default SubjectContent;
