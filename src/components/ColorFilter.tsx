import { useState } from "react";
import { useContext } from "react";
import { ColorDispatchContext } from "./Provider/ColorProvider";
import Button from "./UI/Button";
import { colors } from "../constants/colorData";

export default function ColorFilter() {

  const setSelectedColor = useContext(ColorDispatchContext);

  const changeColor = (code: string) =>{
    setSelectedColor(code)
  }

  return (
    <div className="flex items-center gap-2 py-2 overflow-auto">
      {colors.map((color, idx) => (
        <Button
          key={`colorbtn-${idx}`}
          size="large"
          textColor={color.textColor}
          backgroundColor="white"
          onClick={()=>{changeColor(color.code)}}
        >
         {color.name}
        </Button>
      ))}
    </div>
  );
}

