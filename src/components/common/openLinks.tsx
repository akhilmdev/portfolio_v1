interface Props {
  links: { icon: string; link: string }[];
  isEven: boolean;
  wrapperStyles?: string;
}

const OpenLinks: React.FC<Props> = ({ links, isEven, wrapperStyles = "" }) => {
  return (
    <div
      className={`${
        isEven ? "flex md:justify-end sm:justify-start" : "flex justify-start"
      } gap-2 -my-2 ${wrapperStyles}`}
    >
      {links.map(({ icon, link }) => {
        return (
          <a href={link} key={link}>
            <img src={icon} alt="icon for link" className="h-4" />
          </a>
        );
      })}
    </div>
  );
};

export default OpenLinks;
