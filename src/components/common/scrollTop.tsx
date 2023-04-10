import React from "react";

interface Props {
  height: number;
}
const ScrollTop: React.FC<Props> = ({ height }) => {
  return (
    <div
      className={"fixed bottom-4 right-4 cursor-pointer hidden md:inline"}
      style={height > 800 ? { display: "block" } : { display: "none" }}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <img src="../assets/scroll-up.png" alt="scroll to top" />
    </div>
  );
};

export default ScrollTop;
