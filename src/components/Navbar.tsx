import { useContext } from "react";
import { ColorDispatchContext } from "./Provider/ColorProvider";
import { useNavigate } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Button from "./UI/Button";
import Search from "./UI/Search";

export default function NavbarComponent() {
  const navigateTo = useNavigate();

  const setSelectedColor = useContext(ColorDispatchContext);

  const goHomePage = () => {
    navigateTo("/");
    setSelectedColor(null);
  };

  return (
    <nav className="flex items-center gap-2 py-2 px-3">
      <div>
        <img
          className="cursor-pointer"
          src="/unsplash-logo.svg"
          alt="unsplash-logo"
          width={45}
          height={45}
          onClick={goHomePage}
        />
      </div>
      <Search />
      <div className="hidden md:flex gap-4 items-center mr-4">
        <div className="flex items-center gap-6 ml-6 mr-4">
          <span className="baseText">Explore</span>
          <span className="baseText">Advertise</span>
          <span className="text-transparent cursor-pointer text-base font-medium bg-clip-text bg-gradient-to-r to-cyan-600 from-purple-500">
            Unsplash+
          </span>
        </div>
        <div className="flex items-center">
          <div className="w-[1px] h-8 bg-gray-300"></div>
          <span className="baseText ml-6">Log in</span>
        </div>
        <Button backgroundColor="white">Submit a photo</Button>
      </div>
      <Bars3Icon className="h-8 w-8 baseText" />
    </nav>
  );
}
