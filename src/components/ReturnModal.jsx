import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ReturnModal = ({ showModal, setShowModal }) => {
  const nav = useNavigate();
  return (
    <>
      {showModal ? (
        <>
          <div className="backdrop-blur-md justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ease-in">
            <div className="relative w-[30%] my-6 mx-auto max-w-5xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {/* <div className="flex items-start justify-between p-5 rounded-t">
                  {/* <h3 className="text-2xl font-semibold">
                    Your Stream is Complete
                  </h3> *
                  <button
                    className="py-1 px-3 ml-auto bg-amber-100 rounded-full text-balck float-right text-xl font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div> */}
                {/*body*/}
                <div className="p-5 flex  justify-center flex-col">
                  <h1 className="font-semibold text-2xl mb-5">
                    Are you absolutely sure?
                  </h1>
                  <p className="text-md text-gray-500">
                    This action cannot be undone. All your unsaved progress will
                    be lost, and you will be redirected to the Homepage.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end px-6 pb-6 rounded-b">
                  <button
                    className="px-5 py-2 border border-gray-300 rounded-md"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-5 py-2 bg-red-500 text-white rounded-md ml-3"
                    onClick={() => nav("/")}
                  >
                    Continue
                  </button>
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
