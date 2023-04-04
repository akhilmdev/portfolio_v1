import React from "react";
import { COLOR } from "../../config/colors";

interface Props {
  wrapperStyles?: string;
  homeRight: {
    description: string;
    socialMedias?: { icon: string; label?: string; link: string }[];
    hireMe: { location: string; email: string; phone: string };
  };
}
const HomeRight: React.FC<Props> = ({
  wrapperStyles = "",
  homeRight: { description, socialMedias, hireMe },
}) => {
  return (
    <div className={`flex-col my-auto w-1/3 ${wrapperStyles}`}>
      <div className="lg:text-2xl md:text-lg uppercase mb-6 leading-8 font-alkatra text-center">
        {description}
      </div>
      <div className="flex gap-x-5 w-full justify-center">
        {socialMedias?.map(({ icon, link, ...styles }) => {
          return (
            <div
              key={icon}
              className={`w-10 h-10 rounded-full grayscale hover:grayscale-0 duration-250 ease-linear ${COLOR.background200}`}
            >
              <a href={link} target="_blank">
                <img
                  src={icon}
                  alt="label"
                  className={`w-4 h-4 m-auto mt-3 ${
                    link.includes("github") ? "invert-35 hover:invert-0" : ""
                  }`}
                />
              </a>
            </div>
          );
        })}
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
