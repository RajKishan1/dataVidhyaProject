"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BtnBar from "./landingPage/BtnBar";
interface prop {
  text: string;
  heading: string;
}
function Display({ text, heading }: prop) {
  const [btnNum, setBtnNum] = useState<number>(0);
  const [imgPath, setImgPath] = useState("/images/first.png");
  // console.log(btnNum);
  useEffect(() => {
    btnNum === 3
      ? setImgPath("/images/second.png")
      : btnNum === 2
      ? setImgPath("/images/third.png")
      : btnNum === 1
      ? setImgPath("/images/fourth.png")
      : setImgPath("/images/first.png");
  }, [btnNum]);

  return (
    <div className="flex flex-col items-center mt-[60px]">
      <BtnBar btnNum={btnNum} setBtnNum={setBtnNum} />
      <div className="w-4/5 flex justify-between text-black">
        <div className="w-[30%] flex flex-col justify-center">
          <p className="text-xl leading-6 font-semibold">{heading}</p>
          <p>{text}</p>
        </div>
        <div className="w-[60%] h-full bg-white rounded-xl flex flex-col shadow-xl overflow-hidden border-[1px] border-neutral-300">
          <Image
            alt="image"
            src={imgPath}
            height={900}
            width={780}
            className="h-auto w-auto"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Display;
