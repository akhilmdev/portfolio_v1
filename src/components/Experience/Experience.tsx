import React from "react";
import TextComponent from "../common/TextComponent";
import { data } from "../../config/dataSet";
import { useFindClass } from "../../hooks/useFindClass";

const Experience = ({cols, style}:any) => {
  const { experiencePage } = data;
  const length = experiencePage.experience.length;
  const findClass = useFindClass(length,cols);
  return (
    <div className=" h-screen w-full flex flex-col pt-20">
      <div className="mb-12">
        <p className="text-4xl mb-8">What I do?</p>
        <TextComponent
          text={experiencePage.skillsDescription}
          textStyles={"text-3xs"}
          wrapperStyles={" justify-center pb-12 pt-0"}
        />
      </div>

      <div className={`grid ${style} mx-20 mb-28 pt-2`}>
        {experiencePage.experience.map((_item, _index) => (
          <div key={_item.description} className={findClass(_index)}>
            <TextComponent
              image={_item.image}
              text={_item.description}
              imageStyles={"w-16 h-16"}
              textStyles={
                "leading-none font-serif text-xs text-zinc-600 border-2 border-white pt-2 text-left"
              }
              wrapperStyles="h-32 p-4 flex flex-col justify-start items-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
