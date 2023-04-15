import React from "react";
import NumberWithLabel from "./NumberWithLabel";

interface Props {
  wrapperStyles?: string;
  homeLeft: {
    title: string;
    attributes: { number: string | number; label: string }[];
  };
}
const HomeLeft: React.FC<Props> = ({
  wrapperStyles = "",
  homeLeft: { title, attributes },
}) => {
  return (
    <div
      className={`flex-col mt-10 mb-0 md:mt-auto md:mb-auto w-full md:w-1/3 md:ml-3 flex gap-10 px-16 md:px-4 ${wrapperStyles}`}
    >
      <div className="lg:text-5xl md:text-4xl text-2xl font-bold  m-auto uppercase md:text-left md:mb-32 flex justify-center md:block">
        {title}
      </div>
      <div className="flex gap-x-3.5 m-auto md:m-0">
        {attributes.map(
          ({
            number,
            label,
            ...styles
          }: {
            number: string | number;
            label: string;
          }) => {
            return (
              <NumberWithLabel
                number={number}
                label={label}
                {...styles}
                key={label}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default HomeLeft;
