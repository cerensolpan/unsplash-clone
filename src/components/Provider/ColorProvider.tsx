import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type Color = string | null;

type ColorContextType = {
  selectedColor: Color;
};

type ColorDispatchContextType = Dispatch<SetStateAction<Color | null>>;

export const ColorContext = createContext<ColorContextType>({
  selectedColor: null,
});

export const ColorDispatchContext = createContext<ColorDispatchContextType>(() => {});

type ColorProviderProps = {
  children: ReactNode;
};

export function ColorProvider({ children }: ColorProviderProps): JSX.Element {
  const [selectedColor, setSelectedColor] = useState<Color>(null);
  return (
    <ColorContext.Provider value={{ selectedColor }}>
      <ColorDispatchContext.Provider value={setSelectedColor}>
        {children}
      </ColorDispatchContext.Provider>
    </ColorContext.Provider>
  );
}
