import AvatarComponent from "../common/AvatarComponent";
import HomeLeft from "../common/HomeLeft";
import { data } from "../../config/dataSet";
import HomeRight from "../common/HomeRight";
import { COLOR } from "../../config/colors";

interface Props {}

const Home: React.FC<Props> = () => {
  const {
    home: { homeLeft, avatar, imageURL, homeRight },
  } = data;
  return (
    <div className="relative">
      <button
        className={`absolute top-10 right-10 hover:border-black ${COLOR.background900} ${COLOR.text100}`}
      >
        Hire Me!
      </button>
      <div className="h-screen w-full	flex m-4">
        <HomeLeft homeLeft={homeLeft} />
        <AvatarComponent
          imageURL={imageURL}
          wrapperStyles={avatar.wrapperStyles}
          imageStyles={avatar.imageStyles}
        />
        <HomeRight homeRight={homeRight} />
      </div>
    </div>
  );
};

export default Home;
