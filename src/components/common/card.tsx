interface Props {
  text: string;
  isEven: boolean;
  wrapperStyles?: string;
}

const Card: React.FC<Props> = ({ text, isEven, wrapperStyles = "" }) => {
  return (
    <div
      className={`bg-white flex w-full z-10 text-black p-4 rounded-md shadow-lg shadow-[#cdbfbf] sm:bg-opacity-80 md:bg-opacity-95 ${wrapperStyles}`}
    >
      <p>{text}</p>
    </div>
  );
};

export default Card;
