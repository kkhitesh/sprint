// eslint-disable-next-line react/prop-types
export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
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
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>
                {/*body*/}
                <div className="p-5 flex items-center justify-center flex-col">
                  <h1 className="font-semibold text-2xl mb-5 ">
                    Your Stream is Complete!
                  </h1>
                  <h2 className="font-semibold text-lg ml-10 ">
                    Be sure to copy and paste your work before leaving the
                    streamzone.{" "}
                  </h2>
                  <h3 className="text-lg mt-5">
                    And, Share your Badge with Friends.
                  </h3>
                  <p className="text-md mt-5 text-gray-600">
                    Word count stops counting after the timer ends.
                    <br /> Return to the homepage to start another sprint
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b"></div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
