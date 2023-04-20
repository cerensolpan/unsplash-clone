import Search from "./UI/Search";

export default function Home() {
  return (
    <div className="relative">
      <img
        className="w-full lg:max-h-[85.5vh] h-screen max-h-screen object-cover"
        src="/unsplash-photo.jpg"
        alt="unsplash-photo"
      />
      <div className="flex flex-col absolute w-full px-6 md:p-0 md:w-1/4 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/4 space-y-4">
        <h1 className="text-white text-4xl lg:text-6xl font-bold mt-10">
          Unsplash
        </h1>
        <div className="flex flex-col text-white text-md lg:text-2xl">
          <span>The internet’s source for visuals.</span>
          <span>Powered by creators everywhere.</span>
        </div>
        <Search />
      </div>
    </div>
  );
}
