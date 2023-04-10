import { useEffect, useState } from "react";
import { COLOR } from "../../config/colors";
import { data } from "../../config/dataSet";

interface Props {
  height: number;
}

const SocialMedias: React.FC<Props> = ({ height }) => {
  const { socialMedias } = data;

  return (
    <div
      className={`gap-x-5 flex justify-center gap-2 flex-row md:fixed md:flex-col sm:bottom-0 lg:-ml-20 md:-ml-16 transition-all ease-in	duration-500 ${
        height > 250 ? "opacity-1" : "opacity-0"
      }`}
    >
      {socialMedias?.map(({ icon, link, ...styles }) => {
        return (
          <div
            key={icon}
            className={`w-8 h-8 rounded-full grayscale hover:grayscale-0 duration-250 ease-linear ${COLOR.background200}`}
          >
            <a href={link} target="_blank">
              <img
                src={icon}
                alt="label"
                className={`w-3 h-3 m-auto mt-2.5 ${
                  link.includes("github") ? "invert-35 hover:invert-0" : ""
                }`}
              />
            </a>
          </div>
        );
      })}
      <div className="h-0 md:h-20 w-px bg-zinc-900 ml-3.5"></div>
    </div>
  );
};

export default SocialMedias;
