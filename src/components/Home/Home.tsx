import AvatarComponent from "../common/AvatarComponent";
import { data } from "../../config/dataSet";

interface Props {}

const Home: React.FC<Props> = () => {
  const { home: homeData } = data;
  return (
    <div className="h-screen w-full	">
      <AvatarComponent
        imageURL={homeData.imageURL}
        wrapperStyles={homeData.avatar.wrapperStyles}
        imageStyles={homeData.avatar.imageStyles}
      />
    </div>
  );
};

export default Home;
