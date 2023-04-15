import React from "react";

interface Props {}
const ScrollMouse: React.FC<Props> = () => {
  return (
    <div className="absolute bottom-4 md:bottom-8 w-full">
      <div className="mouse mx-auto"></div>
    </div>
  );
};

export default ScrollMouse;
