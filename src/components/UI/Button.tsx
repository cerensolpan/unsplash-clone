import React, { useEffect, useState } from "react";
import { ColorContext } from "../Provider/ColorProvider";
import { ButtonProps } from "../../types";
import { colors } from "../../constants/colorData";

const Button = ({
  children,
  backgroundColor,
  textColor,
  size = "medium",
  onClick,
}: ButtonProps) => {
  const [sizeValue, setSizeValue] = useState<string>("");
  const color = React.useContext(ColorContext);

  const selectedBorder = colors.find(
    (item) => item.code === color.selectedColor
  );
  useEffect(() => {
    size === "small"
      ? setSizeValue("px-1 py-1")
      : size === "medium"
      ? setSizeValue("px-2.5 py-1")
      : setSizeValue("px-8 py-3 shadow-lg");
  }, []);

  return (
    <button
      className={[
        `${backgroundColor}`,
        `${textColor}`,
        size,
        "border rounded text-base whitespace-nowrap",
        `${sizeValue}`,
        `${textColor ? `${textColor}` : "text-gray hover:text-black"}`,
        `${
          selectedBorder?.textColor === textColor
            ? "border-gray"
            : "border-neutral-300 hover:border-neutral-400"
        }`,
        `customClass`,
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
