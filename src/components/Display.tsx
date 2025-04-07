"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BtnBar from "./landingPage/BtnBar";
import HeadingText from "./HeadingText";
interface prop {
  text: string;
  heading: string;
}
function Display({}: prop) {
  const [btnNum, setBtnNum] = useState<number>(1);
  const [imgPath, setImgPath] = useState("/images/first.png");

  useEffect(() => {
    btnNum === 1
      ? setImgPath("/images/first.png")
      : btnNum === 2
      ? setImgPath("/images/second.png")
      : btnNum === 3
      ? setImgPath("/images/third.png")
      : setImgPath("/images/fourth.png");
  }, [btnNum]);

  return (
    <div className="flex flex-col items-center mt-[60px]">
      <BtnBar btnNum={btnNum} setBtnNum={setBtnNum} />
      <div className="w-4/5 flex justify-between text-black">
        <div className="w-[30%] flex flex-col justify-center items-start">
          <HeadingText btnNum={btnNum} setBtnNum={setBtnNum} />
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
