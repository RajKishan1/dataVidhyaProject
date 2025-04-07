"use client";
import Image from "next/image";
import React, { useState } from "react";
import BtnBar from "./landingPage/BtnBar";
interface prop {
  text: string;
  heading: string;
}
function Display({ text, heading }: prop) {
  const [btnNum, setBtnNum] = useState<number>(0);
  return (
    <div className="flex flex-col items-center mt-[60px]">
      <BtnBar />
      <div className="w-4/5 flex justify-between text-black">
        <div className="w-[30%] flex flex-col justify-center">
          <p className="text-xl leading-6 font-semibold">{heading}</p>
          <p>{text}</p>
        </div>
        <div className="w-[60%] h-full bg-white rounded-xl flex flex-col shadow-xl overflow-hidden border-[1px] border-neutral-300">
          <Image
            alt="image"
            src="/images/first.png"
            height={900}
            width={780}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Display;
