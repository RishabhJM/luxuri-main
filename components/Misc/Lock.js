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
    } else if(!check) {
      alert("To proceed further, agree to the terms.");
    } else if(password!=="johny"){
      alert("Incorrect password entered.");
    }
  };

  return (
    <div className="h-auto w-fit sm:w-screen flex flex-col items-center justify-center ">
      <div>
        <Image
          src="/luxuri-logo.svg"
          width={250}
          height={250}
          className="opacity-50 relative top-32 -z-10"
        ></Image>
      </div>
      <div>
        <Image
          src="/lock.svg"
          width={400}
          height={400}
          className="opacity-25 relative left-6 -z-10"
          alt=""
        ></Image>
      </div>

      <div className="py-10">
        <h2 class="bottom-2 mt-[-260px] leading-normal relative text-center text-2xl md:text-6xl">
          Please enter password <br /> to view <span className="leading-normal text-[#898989]"> the website</span>
        </h2>
        <form class="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
          <div className="my-4 flex relative left-6">
            <input
              type="password"
              name="password"
              placeholder="Enter Password..."
              className="bg-[#2A2A33] rounded-full w-[300px] p-4 outline-none "
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
      {modalOpen && <Modal setOpenModal={setModalOpen} setCheck={setCheck}></Modal>}
    </div>
  );
};

export default Lock;
