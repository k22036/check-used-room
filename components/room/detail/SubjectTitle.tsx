type Props = {
  subject: string;
};

const SubjectTitle = ({ subject }: Props) => (
  <div className="text-lg font-semibold text-orange-700 mb-1">{subject}</div>
);

export default SubjectTitle;
