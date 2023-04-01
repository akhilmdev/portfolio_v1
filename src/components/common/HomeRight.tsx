import React from "react";
import { COLOR } from "../../config/colors";

interface Props {
  wrapperStyles?: string;
  homeRight: {
    description: string;
    socialMedias?: { icon: string; label?: string; link: string }[];
  };
}
const HomeRight: React.FC<Props> = ({
  wrapperStyles = "",
  homeRight: { description, socialMedias },
}) => {
  return (
    <div className={`flex-col my-auto w-1/3 ${wrapperStyles}`}>
      <div className="text-3xl uppercase text-left mb-12">{description}</div>
      <div className="flex gap-x-5 w-full justify-center">
        {socialMedias?.map(({ icon, link, ...styles }) => {
          return (
            <div
              key={icon}
              className={`w-12 h-12 rounded-full grayscale hover:grayscale-0 duration-250 ease-linear ${COLOR.background200}`}
            >
              <a href={link} target="_blank">
                <img
                  src={icon}
                  alt="label"
                  className={`w-6 h-6 m-auto mt-3 ${
                    link.includes("github") ? "invert-35 hover:invert-0" : ""
                  }`}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeRight;
