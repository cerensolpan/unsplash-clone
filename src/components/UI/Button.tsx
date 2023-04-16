import { useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
  backgroundColor: string;
  size?: "small" | "medium" | "large";
}

const Button = ({ children, backgroundColor, size = "medium" }: IProps) => {
    const [sizeValue, setSizeValue] = useState<string>('')
    useEffect(() => {
        size==='small' ? setSizeValue('px-1 py-1') :size==='medium' ? setSizeValue('px-2.5 py-1') : setSizeValue('px-3 py-3')
    }, [])
    
   
  return (
    <button
      className={[
        `bg-${backgroundColor}`,
        size,
        "border border-neutral-300 rounded hover:border-neutral-800 text-base text-gray hover:text-black",
        `${sizeValue}`
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
