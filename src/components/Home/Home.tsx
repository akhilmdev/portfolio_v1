import AvatarComponent from "../common/AvatarComponent";
import { data } from "../../config/dataSet";

interface Props {}

const Home: React.FC<Props> = () => {
  const { home: homeData } = data;
  return (
    <div>
      <AvatarComponent imageURL={homeData.imageURL} />
    </div>
  );
};

export default Home;
