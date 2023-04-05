import { useState, useEffect } from "react";

type FindClassFunction = (index: number) => string;

export const useFindClass: (
  length: number,
  cols: number
) => FindClassFunction = (length, cols) => {
  const [findClass, setFindClass] = useState<FindClassFunction>(() => () => "");

  useEffect(() => {
    setFindClass(() => (index: number) => {
      return index + 1 >= (Math.ceil(length / cols) - 1) * cols + 1 &&
        index + 1 !== Math.ceil(length / cols) * cols
        ? "border-r border_line"
        : (index + 1) % cols === 0 && index + 1 !== length
        ? "border-b border_line"
        : (index + 1) % cols !== 0 && index + 1 !== length
        ? "border-b border-r border_line"
        : "";
    });
  }, [length, cols]);

  return findClass;
};
