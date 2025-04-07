import React, { useEffect, useState } from "react";
interface prop {
  Index: number;
  clName?: string;
  clip?: string;
  text: string;
  btnNum: number;
  setBtnNum: (num: number) => number;
}

const TabButtons = ({ Index, clName, clip, text, btnNum, setBtnNum }: prop) => {
  const [bgcolor, setBgcolor] = useState("white");
  const newBGcolor = "bg-gradient-to-r from-[#573efa] to-[#B832E9]";
  const [active, setActive] = useState(0);
  const bgChange = () => {
    active === Index ? setBgcolor(newBGcolor) : <></>;
  };
  return (
    <div
      onClick={() => {
        setActive(Index);
        bgChange();
        setBtnNum(Index);
      }}
      className={`h-full  ${bgcolor} border-[1px] border-neutral-300 ${Index} ${clName} flex items-center justify-center `}
      style={{
        clipPath: `${clip}`,
      }}
    >
      <p className="flex items-center justify-center text-sm leading-[-2%]">
        {text}
      </p>
    </div>
  );
};

export default TabButtons;
