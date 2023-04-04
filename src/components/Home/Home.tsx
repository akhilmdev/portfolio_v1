import AvatarComponent from "../common/AvatarComponent";
import HomeLeft from "../common/HomeLeft";
import { data } from "../../config/dataSet";
import HomeRight from "../common/HomeRight";
import Header from "../common/Header";
import ScrollMouse from "../common/scrollMouse";

interface Props {}

const Home: React.FC<Props> = () => {
  const {
    home: { homeLeft, avatar, imageURL, homeRight, header },
  } = data;
  return (
    <div className="">
      <Header {...header} />
      <div className="h-screen w-full	flex">
        <HomeLeft homeLeft={homeLeft} />
        <AvatarComponent
          imageURL={imageURL}
          wrapperStyles={avatar.wrapperStyles}
          imageStyles={avatar.imageStyles}
        />
        <HomeRight homeRight={homeRight} />
      </div>
      <ScrollMouse />
    </div>
  );
};

export default Home;
