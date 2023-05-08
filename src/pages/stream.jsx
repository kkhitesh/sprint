import { Header } from "../components/Header";
import { MdContentCopy, MdShare } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Modal } from "../components/Modal";
import { useState } from "react";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return (
      <div className="font-semibold text-white text-3xl font-kalam">
        Well <br />
        Done!
      </div>
    );
  }

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="font-semibold text-white text-3xl">{`${minutes} : ${seconds}`}</div>
  );
};

export const Stream = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Header />
      <div className="h-full flex">
        <div className="w-1/4 bg-rect h-full bg-cover">
          {/*timer*/}
          <div className="flex justify-center mt-10">
            <CountdownCircleTimer
              isPlaying
              duration={12}
              size={180}
              colors="#0D21A1"
              trailColor="#00E6E5"
              colorsTime={[10, 6, 3, 0]}
              onComplete={() => setShowModal(true)}
              strokeWidth={32}
              strokeLinecap="butt"
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
          <div className="text-white flex flex-col items-center m-10 ">
            <h3 className="text-lg font-semibold">
              Be sure to Copy & Paste <br />
              your Work
            </h3>
            <h2 className="font-bold font-kalam text-2xl mt-10">Word Count:</h2>
          </div>
        </div>
        <div className="flex bg-amber-50 w-full mt-1">
          <div className="w-full flex flex-col items-center gap-5 mt-10">
            <input
              type="text"
              className="p-3 w-[85%] rounded-xl border-2 border-gray-300 shadow-md"
              placeholder="   Title..."
            />
            <div className="h-[75%] w-[85%] resize-none rounded-xl border-2 border-gray-300 bg-white shadow-lg">
              <textarea
                className="resize-none w-[95%] mx-[2.5%] h-[82%] mt-5  outline-none overflow-auto"
                placeholder="Start writing..."
              />
              <div className="flex mx-[2.5%] mt-3 text-2xl w-full gap-5">
                <span className="bg-orange-400/80 p-2 rounded-full">
                  <MdContentCopy />
                </span>
                <span className="bg-orange-400/80 p-2 rounded-full">
                  <MdShare />
                </span>
                <span className="bg-orange-400/80 p-2 rounded-full ">
                  <BiRefresh />
                </span>
                <button className="bg-orange-400/80 py-2 px-5 rounded-full ml-auto mr-14 text-sm text-gray-700 font-semibold font-kalam">
                  Start New Stream
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
