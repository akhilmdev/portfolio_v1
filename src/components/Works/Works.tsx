import { COLOR } from "../../config/colors";
import { data } from "../../config/dataSet";
import { isEven } from "../../services/util";
import Card from "../common/card";
import OpenLinks from "../common/openLinks";
import Tools from "../common/tools";

interface Props {}

const Works: React.FC<Props> = () => {
  const { works } = data;

  return (
    <div className="w-10/12 m-auto min-h-screen pt-24">
      <p className="text-4xl mb-8">
        What I had <b>done</b>?
      </p>
      {works.map((work, index) => {
        return (
          <div key={work.name} className="w-full relative">
            <div
              className={`flex mt-24 ${
                isEven(index) ? "" : "flex-row-reverse"
              }`}
            >
              <img
                src={work.imageURL}
                alt="project screen short"
                className={`md:w-3/5 hover:invert-[.1] invert-0 rounded-lg w-full drop-shadow-2xl`}
              />
              <div
                className={`w-full md:w-3/5 my-auto flex flex-col gap-4 z-10 absolute md:relative sm:p-6 p-3 ${
                  isEven(index)
                    ? "text-start md:text-end md:-ml-24 xl:pr-36 lg:pr-20"
                    : "text-start md:-mr-24 md:pl-8"
                }`}
              >
                <p
                  className={`text-xl font-bold capitalize sx:${COLOR.text950}	`}
                >
                  {work.title}
                </p>
                <p className={"text-sm font-medium uppercase"}>{work.name}</p>
                <Card text={work.description} isEven={isEven(index)} />
                <Tools tools={work.tools} isEven={isEven(index)} />
                <OpenLinks links={work.links} isEven={isEven(index)} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Works;
