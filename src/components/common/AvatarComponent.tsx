import React from "react";

interface Props {
  imageURL: string;
  imageStyles?: string;
  wrapperStyles?: string;
}
const AvatarComponent: React.FC<Props> = ({
  imageURL,
  imageStyles = "",
  wrapperStyles = "",
}) => {
  return (
    <div className={`${wrapperStyles}`}>
      <img src={imageURL} alt="profile image" className={`${imageStyles}`} />
    </div>
  );
};

export default AvatarComponent;
