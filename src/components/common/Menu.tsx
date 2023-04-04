interface Props {
  items: { label: string; id: string }[];
  wrapperStyles?: string;
}
const Menu: React.FC<Props> = ({ items, wrapperStyles = "" }) => {
  return (
    <div className="wrapperStyles">
      <nav
        className="mx-auto flex max-w-7xl items-center lg:p-6 lg:px-8 lg:justify-center md:justify-start md:p-4"
        aria-label="Global"
      >
        <div className="hidden lg:flex lg:gap-x-12 md:flex md:gap-x-10 mt-7 md:mt-2">
          {items.map((item) => (
            <button
              type="button"
              className="-m-2.5 h-10 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              key={item.id}
            >
              <span className="">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Menu;
