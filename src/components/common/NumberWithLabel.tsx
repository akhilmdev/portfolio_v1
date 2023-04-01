import React from "react";

interface Props {
  number: string | number;
  label: string;
  wrapperStyles?: string;
  numberStyles?: string;
  labelStyles?: string;
}
const NumberWithLabel: React.FC<Props> = ({
  number,
  label,
  wrapperStyles = "",
  numberStyles = "",
  labelStyles = "",
}) => {
  return (
    <div className={`w-28 text-left ${wrapperStyles}`}>
      <div className={`text-4xl font-semibold text-zinc-950 ${numberStyles}`}>
        {number}
      </div>
      <p
        className={`uppercase text-sm font-normal leading-4 mt-3 text-zinc-600 ${labelStyles}`}
      >
        {label}
      </p>
    </div>
  );
};

export default NumberWithLabel;
