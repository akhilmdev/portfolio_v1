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
    <div className={`flex-col my-auto w-1/3 ${wrapperStyles}`}>
      <div className="text-6xl uppercase text-left mb-12">{title}</div>
      <div className="flex gap-x-3.5">
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
              <NumberWithLabel number={number} label={label} {...styles} />
            );
          }
        )}
      </div>
    </div>
  );
};

export default HomeLeft;
