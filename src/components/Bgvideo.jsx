import React from "react";
import ButtonF from "./ButtonF";
import ButtonO from "./ButtonO";

export default function Bgvideo() {
  return (
    <div className="w-screen bg-black relative flex flex-col justify-center z-10 h-screen">
      <h1
        className="text-white
         z-10 text-center font-Starwars text-5xl
"
      >
        {" "}
        UN VOYAGE OBSCUR OU LIGHT ?{" "}
      </h1>
      <video
        style={{ zIndex: 0, position: "absolute", height: "100vh" }}
        loop
        autoPlay
        muted
      >
        <source src={require("../assets/bg1.mp4")} type="video/mp4" />
      </video>

      <div className="z-20  w-full flex justify-between p-10  ">
        <ButtonO />
        <ButtonF />
      </div>
    </div>
  );
}
