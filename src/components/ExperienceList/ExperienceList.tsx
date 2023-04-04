import React from 'react'
import { data } from '../../config/dataSet';
const ExperienceList = () => {
    const { experienceList } = data;
    const experience = experienceList.list
    console.log("experience", experience);
  return (
    <div className="w-full h-full">
      <p className="text-3xl pt-6 pb-16 text-black">EXPERIENCE</p>
      <div className="timeline">
        {experience.map((item: any, index) =>
          (index + 1) % 2 === 0 ? (
            <>
              <div className="timeline__component">
                <div className={"timeline__date timeline__date--right italic"}>
                  {item.year}
                </div>
              </div>
              <div className="timeline__middle h-auto">
                <div className="timeline__point"></div>
              </div>
              <div className="timeline__component timeline__component--bg h-fit">
                <div className="flex">
                  <h2 className="timeline__title text-base">{item.role}</h2>
                  <p className="timeline__para pl-2 italic text-lg">
                    {"- "}
                    {item.company}
                  </p>
                </div>

                <p className="timeline__paragraph text-left text-sm">
                  {item.jobDescription}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="timeline__component timeline__component--bg h-fit">
                <div className="flex">
                  <h2 className="timeline__title text-base">{item.role}</h2>
                  <p className="timeline__para pl-2 italic">
                    {"- "}
                    {item.company}
                  </p>
                </div>
                <p className="timeline__paragraph text-left text-sm">
                  {item.jobDescription}
                </p>
              </div>
              <div className="timeline__middle">
                <div className="timeline__point"></div>
              </div>
              <div className="timeline__component timeline__date--left">
                <div className="timeline__date italic">
                  {item.year}
                </div>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default ExperienceList
