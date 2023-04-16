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
    <div className="h-screen relative">
      <Header {...header} />
      <div className="min-h-screen lg:w-11/12 xl:w-full	flex flex-col	md:flex-row inherit">
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
