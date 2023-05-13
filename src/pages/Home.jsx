import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useState } from "react";

export const Home = () => {
  const [streamTime, setStreamTime] = useState(25);
  const nav = useNavigate();

  return (
    <>
      <div className="h-full ">
        <Header />
        <div className="h-2/3 flex bg-hero bg-cover flex-col items-center justify-center text-white gap-3">
          <h1 className="font-bold text-5xl  font-inter leading-tight">
            Flow through writer&apos;s block
          </h1>
          <p className="font-inter font-semibold text-2xl">
            Select your session and start writing
          </p>
          <div className="flex gap-5 mt-5 text-black font-semibold font-sans">
            <button
              className={`px-8 py-2  hover:bg-orange-400 rounded-full shadow-sm shadow-white ${
                streamTime === 15 ? "bg-orange-400" : "bg-amber-100"
              }`}
              value={15}
              onClick={() => setStreamTime(15)}
            >
              15 mins
            </button>
            <span>
              <button
                className={`px-8 py-2  hover:bg-orange-400 rounded-full shadow-sm shadow-white ${
                  streamTime === 25 ? "bg-orange-400" : "bg-amber-100"
                }`}
                value={25}
                onClick={() => setStreamTime(25)}
              >
                25 mins
              </button>
            </span>
            <button
              className={`px-8 py-2  hover:bg-orange-400 rounded-full shadow-sm shadow-white ${
                streamTime === 30 ? "bg-orange-400" : "bg-amber-100"
              }`}
              value={30}
              onClick={() => setStreamTime(30)}
            >
              30 mins
            </button>
            <button
              className={`px-8 py-2  hover:bg-orange-400 rounded-full shadow-sm shadow-white ${
                streamTime === 45 ? "bg-orange-400" : "bg-amber-100"
              }`}
              value={45}
              onClick={() => setStreamTime(45)}
            >
              45 mins
            </button>
          </div>
          <button
            className="px-8 py-2 bg-green-600 mt-10 -mb-16 rounded-full font-semibold shadow-md"
            onClick={() => nav("/new", { state: { streamTime } })}
          >
            START
          </button>
        </div>
        <div className="flex mt-10 flex-col items-center justify-center">
          <p>
            Content written using Stream will not be saved on Stream servers.
          </p>
          <p>
            After completing a session, be sure to
            <span className="font-bold"> copy and paste your content</span>, if
            you want to keep it.
          </p>
        </div>
      </div>
    </>
  );
};
