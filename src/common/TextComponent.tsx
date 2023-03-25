import React from "react";

interface Props {
  image?: any;
  text?: string;
  textStyles?: string;
  imageStyles?: string;
  wrapperStyles?: string;
}
const TextComponent: React.FC<Props> = ({
  image,
  text,
  textStyles,
  imageStyles,
  wrapperStyles,
}) => {
  return (
    <div className={`flex flex-row ${wrapperStyles}`}>
      {image && (
        <img src={image} alt="Example image" className={`${imageStyles}`} />
      )}
      {text && <p className={`text-red-300 ${textStyles}`}>{text}</p>}
    </div>
  );
};

export default TextComponent;
