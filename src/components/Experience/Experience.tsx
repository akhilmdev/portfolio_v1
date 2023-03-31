import React from "react";
import TextComponent from "../common/TextComponent";

const Experience = () => {
  return (
    <div className="h-screen w-screen	snap-start">
      <p>Experience section</p>
      <TextComponent
        text={"i am a prop text"}
        textStyles="flex flex-row text-red-900"
        wrapperStyles="flex flex-row"
      />
    </div>
  );
};

export default Experience;
