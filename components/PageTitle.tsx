type PageTitleProps = {
  title: string;
  className?: string;
};

const PageTitle = ({ title, className = "" }: PageTitleProps) => (
  <h1
    className={`text-2xl md:text-3xl font-bold mb-8 text-orange-700 drop-shadow text-center ${className}`}
  >
    {title}
  </h1>
);

export default PageTitle;
