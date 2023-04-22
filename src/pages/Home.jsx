import { Header } from "../components/Header";

export const Home = () => {
  return (
    <>
      <div className="h-full ">
        <Header />
        <div className="h-3/4 flex bg-hero bg-cover flex-col items-center justify-center text-white gap-3">
          <h1 className="font-bold text-5xl  font-kalam">
            Flow through writer&apos;s block
          </h1>
          <p className="font-kalam font-semibold text-2xl">
            Select your Session and start Writing
          </p>
          <div className="flex gap-5 mt-5 text-black font-semibold font-sans">
            <button className="px-8 py-2 bg-orange-400 rounded-full shadow-sm shadow-white">
              15 mins
            </button>
            <span>
              <button className="px-8 py-2 bg-orange-400 rounded-full shadow-sm shadow-white">
                25 mins
              </button>
            </span>
            <button className="px-8 py-2 bg-orange-400 rounded-full shadow-sm shadow-white">
              30 mins
            </button>
            <button className="px-8 py-2 bg-orange-400 rounded-full shadow-sm shadow-white">
              45 mins
            </button>
          </div>
          <button className="px-8 py-2 bg-green-600 mt-10 -mb-16 rounded-full font-semibold shadow-md">
            START
          </button>
        </div>
        <p className="flex mt-10 items-center justify-center">
          We don&apos;t save anything, be sure to copy and paste
        </p>
      </div>
    </>
  );
};
