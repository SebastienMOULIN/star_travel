import React from "react";
import Image from "../images/Jedi Obscure.jpg";
import Gif from "../images/gif-espace.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Obscure() {
  const showToastMessage = () => {
    toast.success(
      <div>
        <img src={Gif} alt="gif" />
        BON VOYAGE!
      </div>,
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
  };

  return (
    <div className="w-full bg-obscure bg-cover relative h-screen">
      <div className="flex justify-center place-items-center p-9 pt-32">
        <img className="rounded-2xl" src={Image} alt="Jedi" />
      </div>
      <div>
        <h1 className="text-gray-50 flex justify-center font-bold text-5xl">
          C'est Parti !
        </h1>
      </div>
      <div className="flex justify-center p-10">
        <button
          className=" text-black bg-white rounded-lg  text-3xl"
          type="submit"
          onClick={showToastMessage}
        >
          <ToastContainer />
          GO !!!
        </button>
      </div>
    </div>
  );
}

export default Obscure;
