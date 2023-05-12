import { Header } from "../components/Header";
import { MdContentCopy, MdShare } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Modal } from "../components/Modal";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { ShareModal } from "../components/ShareModal";
import { ReturnModal } from "../components/ReturnModal";
import { getRandomPrompt } from "../utils/Prompts";

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
  const location = useLocation();
  const streamTime = location.state?.streamTime || 2;
  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [prompt, setPrompt] = useState(getRandomPrompt());

  console.log(prompt);

  const changePrompt = () => {
    setPrompt(getRandomPrompt());
  };

  const time = streamTime * 60;

  const setWordsCount = () => {
    if (text.trim() === "") {
      setCount(0);
    } else {
      const cleanedText = text.replace(/(<([^>]+)>)/gi, "");
      const words = cleanedText.trim().split(/\s+/);
      setCount(words.length);
    }
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ShareModal
        showShareModal={showShareModal}
        setShowShareModal={setShowShareModal}
      />
      <ReturnModal
        showModal={showReturnModal}
        setShowModal={setShowReturnModal}
      />
      <Header />
      <div className="h-full flex">
        <div className="w-1/4 bg-rect h-full bg-cover">
          {/*timer*/}
          <div className="flex justify-center mt-10">
            <CountdownCircleTimer
              isPlaying
              duration={time}
              size={180}
              colors="#0D21A1"
              trailColor="#00E6E5"
              onComplete={() => setShowModal(true)}
              onUpdate={setWordsCount}
              strokeWidth={32}
              strokeLinecap="butt"
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
          <div className="text-white flex flex-col items-center m-10 ">
            <h3 className="text-md font-semibold">
              Be sure to copy and paste <br />
              your work.
            </h3>
            <h2 className="font-bold font-kalam text-2xl mt-10">
              Word Count: <br /> <span className="ml-12">{count}</span>
            </h2>
          </div>
        </div>
        <div className="flex bg-amber-50 w-full mt-1">
          <div className="w-full flex flex-col items-center gap-5 mt-10">
            <input
              type="text"
              className="p-3 w-[85%] rounded-xl border-2 border-gray-300 shadow-md outline-none pl-6"
              placeholder="Title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="h-[75%] w-[85%] resize-none rounded-xl border-2 border-gray-300 bg-white shadow-lg">
              <textarea
                className="resize-none w-[95%] mx-[2.5%] h-[82%] mt-5  outline-none overflow-auto"
                placeholder={`Let your imagination run wild and write a thrilling story. Need inspiration? How about a \n\n${prompt} \n\nOr come up with something entirely on your own. Either way, let your creativity flow and see where it takes you!`}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <div className="flex mx-[2.5%] mt-3 text-2xl w-full gap-5">
                <span
                  className="bg-orange-400/80 p-2 rounded-full hover:bg-orange-400/60"
                  onClick={() => {
                    navigator.clipboard.writeText(text);
                    toast.success("Copied to clipboard!");
                  }}
                >
                  <MdContentCopy />
                </span>
                <span
                  className="bg-orange-400/80 p-2 rounded-full hover:bg-orange-400/60"
                  onClick={() => setShowShareModal(true)}
                >
                  <MdShare />
                </span>
                {count < 1 && (
                  <span
                    className="bg-orange-400/80 p-2 rounded-full hover:bg-orange-400/60"
                    onClick={changePrompt}
                  >
                    <BiRefresh />
                  </span>
                )}
                <button
                  className="bg-orange-400/80 py-2 px-5 rounded-full ml-auto mr-14 text-sm text-gray-700 font-semibold font-kalam hover:bg-orange-400/60"
                  onClick={() => setShowReturnModal(true)}
                >
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
