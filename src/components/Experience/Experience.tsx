import React from "react";
import TextComponent from "../common/TextComponent";
import { data } from "../../config/dataSet";
import { useFindClass } from "../../hooks/useFindClass";

const Experience = ({cols}: any) => {
  const { experiencePage } = data;
  const length = experiencePage.experience.length;
  const findClass = useFindClass(length,cols);
  return (
    <div className=" flex flex-col pt-28">
      <div className="mb-12">
        <p className="text-xl mb-8">What I do?</p>
        <TextComponent
          text={experiencePage.skillsDescription}
          textStyles={"text-xs"}
          wrapperStyles={" justify-center pb-16 pt-0"}
        />
      </div>

      <div className={`grid grid-cols-${cols} mx-20 mb-28`}>
        {experiencePage.experience.map((_item, _index) => (
          <div key={_item.description} className={findClass(_index)}>
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
