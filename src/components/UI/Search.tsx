import { useEffect, useState } from "react";

const Search = () => {
  const [style, setStyle] = useState<string>(
    "rounded-full py-2 bg-neutral-100"
  );
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    focused
      ? setStyle((value) => `${value} bg-white ring-1 ring-gray-200`)
      : setStyle("rounded-full py-2 bg-neutral-100");
  }, [focused]);

  return (
    <div
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={`flex flex-1 items-center gap-2 px-4 ${style}`}
    >
      <img
        src="/search-icon.svg"
        alt="search-icon"
        width={45}
        height={45}
        className="w-4 h-4 text-neutral-600 hover:text-neutral-800 cursor-pointer"
      />
      <input
        type="text"
        placeholder="Search free high-resolution images"
        className="w-full text-base bg-transparent focus:outline-none"
      />
      <div className="w-[1px] h-5 bg-neutral-400"></div>
      <VisualIcon />
    </div>
  );
};

export default Search;

const VisualIcon = () => {
  return (
    <svg
      className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer"
      viewBox="0 0 32 32"
      version="1.1"
      aria-hidden="false"
    >
      <path d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path>
    </svg>
  );
};
