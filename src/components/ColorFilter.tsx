import { useState } from "react";
import Button from "./UI/Button";
import Search from "./UI/Search";
import { colors } from "./colorData";
import { FilterProps } from "../types";

export default function ColorFilter({
  selectedColor,
  setSelectedColor,
}: FilterProps) {

  const [selectedBorder, setSelectedBorder] = useState<String>('')

  const changeColor = (code: String) =>{
    setSelectedColor(code)
  }
  const changeSelectedBorder = (color:String) => {
    setSelectedBorder(color)
  }
  return (
    <div className="flex items-center gap-2 py-2 overflow-auto">
      {colors.map((color, idx) => (
        <Button
          size="large"
          textColor={color.textColor}
          onClick={()=>{changeColor(color.code); changeSelectedBorder(color.textColor)}}
          selectedBorder={selectedBorder}
        >
         {color.name}
        </Button>
      ))}
    </div>
  );
}

