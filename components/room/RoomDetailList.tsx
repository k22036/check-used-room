import type { RoomData } from "@/lib/types";
import SubjectContent from "./detail/SubjectContent";
import SubjectNotFound from "./detail/SubjectNotFound";
import SubjectTitle from "./detail/SubjectTitle";

interface Props {
  data: RoomData[string][number][];
}

const RoomDetailList = ({ data }: Props) => {
  const subjectKey = (data: RoomData[string][number]): string => {
    return `${data.subject}-${data.room}-${data.season}-${data.open_time}`;
  };

  return (
    <>
      {data.map((item) => (
        <div
          key={subjectKey(item)}
          className="mb-6 p-5 rounded-lg border border-orange-200 bg-orange-50/60 shadow-sm"
        >
          <SubjectTitle subject={item.subject} />
          <SubjectContent data={item} />
        </div>
      ))}
      {data.length === 0 && <SubjectNotFound />}
    </>
  );
};

export default RoomDetailList;
