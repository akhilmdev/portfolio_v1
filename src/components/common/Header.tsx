import { COLOR } from "../../config/colors";
import Menu from "./Menu";

interface Props {
  resumeURL: string;
  items: { label: string; id: string }[];
  wrapperStyles?: string;
}
const Header: React.FC<Props> = ({ resumeURL, items, wrapperStyles = "" }) => {
  return (
    <div
      className={`border-solid border-b p-4 ${COLOR.boaderColor} ${wrapperStyles}`}
    >
      <Menu items={items} />
      <a href={resumeURL} download="resume" className="hidden md:inline">
        <button
          className={`absolute lg:top-8 md:top-6 right-10 hover:border-black flex gap-4 rounded-full ${COLOR.background900} ${COLOR.text100}`}
        >
          <p>Resume</p>
          <img src="./assets/direct-download.png" className="w-5 h-5 mt-1" />
        </button>
      </a>
    </div>
  );
};

export default Header;
