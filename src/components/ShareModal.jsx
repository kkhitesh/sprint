import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import badge from "../assets/badge.png";
// eslint-disable-next-line react/prop-types
export const ShareModal = ({ showShareModal, setShowShareModal }) => {
  return (
    <>
      {showShareModal ? (
        <>
          <div className="backdrop-blur-md justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[30%] my-6 mx-auto max-w-5xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  {/* <h3 className="text-2xl font-semibold">
                    Your Stream is Complete
                  </h3> */}
                  <button
                    className="py-1 px-3 ml-auto bg-amber-100 rounded-full text-balck float-right text-xl font-semibold outline-none focus:outline-none"
                    onClick={() => setShowShareModal(false)}
                  >
                    x
                  </button>
                </div>
                {/*body*/}
                <div className="p-5 flex items-center justify-center flex-col">
                  <h1 className="font-semibold text-2xl">
                    Share Your Breakthrough!
                  </h1>
                  <img src={badge} alt="Badge" className="h-56 w-72 p-3" />
                  <h2 className="font-semibold text-lg ml-10">
                    A word a day keeps the writer&apos;s block away.
                  </h2>
                  <p className="text-md mt-5">
                    Thanks for writing with Stream
                    <br />
                    Share your badge with friends.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center gap-10 pb-6 rounded-b">
                  <TwitterShareButton
                    url="https://sprint-nu.vercel.app"
                    title={"I just wrote 500 words with Stream!"}
                    hashtags={["Stream"]}
                  >
                    <TwitterIcon size={48} round />
                  </TwitterShareButton>

                  <FacebookShareButton
                    url="https://sprint-nu.vercel.app"
                    title="I just wrote 500 words with Stream!"
                    hashtag="#Stream"
                  >
                    <FacebookIcon size={48} round />
                  </FacebookShareButton>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
