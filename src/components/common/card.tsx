import ReactHtmlParser from "react-html-parser";

interface Props {
  text: string;
  isEven: boolean;
  wrapperStyles?: string;
}

const Card: React.FC<Props> = ({ text, isEven, wrapperStyles = "" }) => {
  return (
    <div
      className={`bg-white flex w-full z-10 text-black p-4 rounded-md drop-shadow-2xl bg-opacity-80 md:bg-opacity-95 text-sm italic ${wrapperStyles}`}
    >
      <p>{ReactHtmlParser(text)}</p>
    </div>
  );
};

export default Card;
