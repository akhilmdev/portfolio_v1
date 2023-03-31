import React from "react";
import TextComponent from "../common/TextComponent";
import { data } from "../../config/dataSet";

const Experience = () => {
    const { experiencePage } = data;
    const indexesRight = [0,1];
    const indexesBottomTop = [3,4,6,7,9,10];
    const indexBorderTop=[5,8,11,14]
  return (
    <div
      className=" flex flex-col
     h-screen w-screen	snap-start justify-around items-stretch pt-12"
    >
      <p className="text-xl">What I do?</p>
      <TextComponent
        text={experiencePage.skillsDescription}
        textStyles={"text-xs"}
        wrapperStyles={" justify-center pb-12 pt-2"}
      />
      <div className="grid grid-cols-3 mx-20 mb-20">
        {experiencePage.experience.map((_item, _index) => (
          <div
            key={_item.description}
            className={
              indexesRight.includes(_index)
                ? "border-r-2 border-gray-300 bg-white "
                : indexesBottomTop.includes(_index)
                ? "border-r-2 border-t-2 border-gray-300"
                : indexBorderTop.includes(_index)
                ? "border-t-2 border-gray-300"
                : ""
            }
          >
            <TextComponent
              image={_item.image}
              text={_item.description}
              imageStyles={"w-16 h-16"}
              textStyles={
                "leading-normal font-serif text-xs text-slate-500 border-2 border-white contents"
              }
              wrapperStyles="leading-normal h-32 p-4 flex flex-col justify-start items-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
