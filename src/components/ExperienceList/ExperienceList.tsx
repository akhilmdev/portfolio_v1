import React from 'react'
const ExperienceList = () => {
  return (
    <div className="w-full h-full">
      <p className="text-3xl pt-6 pb-16 text-black">EXPERIENCE</p>
      <div className="timeline h-4/5">
        <div className="timeline__component">
          <div className="timeline__date timeline__date--right">
            2017 May - 2018 June
          </div>
        </div>
        <div className="timeline__middle h-auto">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component timeline__component--bg h-fit">
          <div className="flex">
            <h2 className="timeline__title">TCS </h2>
            <p className="timeline__paragraph pl-2"> (Full Stack Developer)</p>
          </div>

          <p className="timeline__paragraph text-left text-sm">
            dkfsdfsdkfjasdfkjsaodifhasdkfnas;kdhfaisdhfsakdnf;asdhfaisodhfsamdfk;ashdf;aosdh
          </p>
        </div>
        <div className="timeline__component timeline__component--bg h-fit">
          <div className="flex">
            <h2 className="timeline__title">Amazon</h2>
            <p className="timeline__paragraph pl-2"> (Full Stack Developer)</p>
          </div>
          <p className="timeline__paragraph text-left">
            ReactDevelopers dfhs djkfhsa
            kdjfhadjshflkjsadhflskjdhflsajhdfljsdahflsdajhfldsahjfls
          </p>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component timeline__date--left">
          <div className="timeline__date">2018 July - 2020 March</div>
        </div>
        <div className="timeline__component">
          <div className="timeline__date timeline__date--right">
            2020 July - 2022 March
          </div>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component timeline__component--bg h-fit">
          <div className="flex">
            <h2 className="timeline__title">Qburst</h2>
            <p className="timeline__paragraph pl-2"> (Full Stack Developer)</p>
          </div>
          <p className="timeline__paragraph text-left">
            ReactDevelopers dfhs djkfhsa
            kdjfhadjshflkjsadhflskjdhflsajhdfljsdahflsdajhfldsahjfls
          </p>
        </div>
        {/* <div className="timeline__component timeline__component--bg h-fit">
          <h2 className="timeline__title">Qburst</h2>
          <p className="timeline__paragraph">React Developer</p>
        </div>
        <div className="timeline__middle">
          <div className="timeline__point"></div>
        </div>
        <div className="timeline__component ">
          <div className="timeline__date timeline__date--left">
            2018 July - 2020 March
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default ExperienceList
