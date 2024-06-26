// components/LockScreen.js
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

const Lock = ({ onUnlock }) => {
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [check, setCheck] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "johny" && check) {
      onUnlock();
    } else if (!check) {
      alert("To proceed further, agree to the terms.");
    } else if (password !== "johny") {
      alert("Incorrect password entered.");
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="mt-10">
        <Image
          src="/luxuri-logo.svg"
          width={250}
          height={250}
          className="opacity-50 -z-10"
        ></Image>
      </div>
      <div className="relative w-[90vw] h-[70vh] se:w-[600px] se:h-[600px] left-6">
        <Image
          src="/lock.svg"
          fill
          className="opacity-25 relative -z-10"
          alt=""
        ></Image>
      </div>

      <div className="py-10 z-10 absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1">
        <h2 class="leading-normal relative text-center text-2xl md:text-6xl">
          Please enter password <br /> to view{" "}
          <span className="leading-normal text-[#898989]"> the website</span>
        </h2>
        <form
          class="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <div className="my-4 flex relative left-6">
            <input
              type="password"
              name="password"
              placeholder="Enter Password..."
              className="bg-[#2A2A33] rounded-full w-[200px] se:w-[300px] p-4 outline-none "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              class="hover:bg-[#ddd] bg-white text-black rounded-full p-4 font-medium text-lg border-2 border-black leading-normal relative right-12 text-center w-[120px]"
              type="submit"
            >
              Let&apos;s go
            </button>
          </div>

          <div class="flex text-center px-10">
            <input
              type="checkbox"
              id="my-checkbox"
              checked={check}
              onClick={() => {
                setCheck(!check);
              }}
            />
            <p onClick={() => setModalOpen(true)} className="px-2 text-center">
              I agree to the{" "}
              <span
                class="underline cursor-pointer"
                onClick={() => setModalOpen(true)}
              >
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span
                class="underline cursor-pointer"
                onClick={() => setModalOpen(true)}
              >
                Privacy Policies
              </span>
            </p>
          </div>
        </form>
        <div class="forgot-row text-center flex py-4">
          <div class="forgot-row1">You want password?</div>
          <div class="forgot-row2">Request Password</div>
        </div>
      </div>
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} setCheck={setCheck}></Modal>
      )}
    </div>
  );
};
{
  /* <div className="h-screen w-screen flex flex-col items-center justify-center relative left-12">



</div> */
}
export default Lock;
