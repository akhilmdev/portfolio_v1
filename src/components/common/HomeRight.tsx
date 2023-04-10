import React from "react";
import { COLOR } from "../../config/colors";

interface Props {
  wrapperStyles?: string;
  homeRight: {
    description: string;
    hireMe: { location: string; email: string; phone: string };
  };
}
const HomeRight: React.FC<Props> = ({
  wrapperStyles = "",
  homeRight: { description, hireMe },
}) => {
  return (
    <div
      className={`flex-col mb-40 mt-0 md:my-auto w-full px-16 md:px-4 md:w-1/3 ${wrapperStyles}`}
    >
      <div className="lg:text-2xl md:text-lg uppercase mb-6 leading-8 font-alkatra text-center">
        {description}
      </div>

      <div className="flex flex-col gap-2 lg:mt-56 md:mt-44 justify-center">
        <p className="text-xs">*Hire me!</p>
        <p className="text-xl font-semibold">{hireMe.location}</p>
        <p className="text-xl font-semibold">{hireMe.email}</p>
        <p className="text-xl font-semibold">{hireMe.phone}</p>
      </div>
    </div>
  );
};

export default HomeRight;
