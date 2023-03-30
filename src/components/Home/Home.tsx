import AvatarComponent from "../common/AvatarComponent";
import { data } from "../../config/dataSet";
import NumberWithLabel from "../common/NumberWithLabel";

interface Props {}

const Home: React.FC<Props> = () => {
  const {
    home: { attributes, avatar, imageURL, title },
  } = data;
  return (
    <div className="h-screen w-full	flex m-4">
      <div className="flex-col my-auto w-1/3">
        <div className="text-6xl uppercase text-left mb-12">{title}</div>
        <div className="flex gap-x-3.5">
          {attributes.map(
            ({
              number,
              label,
              ...styles
            }: {
              number: string | number;
              label: string;
            }) => {
              return (
                <NumberWithLabel number={number} label={label} {...styles} />
              );
            }
          )}
        </div>
      </div>
      <AvatarComponent
        imageURL={imageURL}
        wrapperStyles={avatar.wrapperStyles}
        imageStyles={avatar.imageStyles}
      />
      <div className="w-1/3"></div>
    </div>
  );
};

export default Home;
