import Button from "./UI/Button";
import Search from "./UI/Search";

export default function NavbarComponent() {
  return (
    <nav className="flex items-center gap-2 py-2 px-3">
      <div>
        <img
          src="/unsplash-logo.svg"
          alt="unsplash-logo"
          width={45}
          height={45}
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
      <MenuIcon />
    </nav>
  );
}

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-8 h-8 baseText"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
