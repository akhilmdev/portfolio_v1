interface Props {
  tools: string[];
  isEven: boolean;
  wrapperStyles?: string;
}

const Tools: React.FC<Props> = ({ tools, isEven, wrapperStyles = "" }) => {
  return (
    <div
      className={`${
        isEven ? "flex md:justify-end sm:justify-start" : "flex justify-start"
      } gap-3 text-xs uppercase ${wrapperStyles}`}
    >
      {tools.map((tool) => {
        return <p>{tool}</p>;
      })}
    </div>
  );
};

export default Tools;
