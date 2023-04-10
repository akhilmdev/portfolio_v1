import ReactHtmlParser from "react-html-parser";
import { COLOR } from "../../config/colors";
import { data } from "../../config/dataSet";
import SocialMedias from "../common/SocialMedias";

interface Props {
  height: number;
}

const ContactMe: React.FC<Props> = ({ height }) => {
  const {
    contactMe: { title, description, buttonText, footerMessage },
  } = data;
  return (
    <div className="w-10/12 m-auto min-h-fit pt-24 flex flex-col gap-6 justify-center pb-16">
      <h2 className="text-4xl">{ReactHtmlParser(title)}</h2>
      <p className="mx-8 sx:mx-28 md:mx-44 lg:mx-66 xl:mx-72">{description}</p>
      <div className="w-full pb-48">
        <button
          className={`w-32 hover:border-black ${COLOR.background900} ${COLOR.text100}`}
        >
          <a
            href="mailto:akhilm640@gmail.com"
            target={"_blank"}
            className="no-underline	text-zinc-100 hover:text-zinc-100"
          >
            <p>{buttonText}</p>
          </a>
        </button>
      </div>

      <SocialMedias height={height} />
      <p className="-mb-12 text-bold text-xs italic">
        {ReactHtmlParser(footerMessage)}
      </p>
    </div>
  );
};

export default ContactMe;
