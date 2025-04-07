// "use client";
// import React, { useState } from "react";
// interface prop {
//   text: string;
//   btnNum: number;
//   setBtnNum: (input: number) => void;
//   index: number;
// }
// const Tab_buttons = ({ text, btnNum, setBtnNum }: prop) => {
//   const newBGcol = " bg-gradient-to-r from-[#4956f5] to-[#cc52fa]";

//   const [bgcol, setBgcol] = useState("white");
//   const [bgtext, setBgtext] = useState("#9ca3af");
//   const [index, setIndex] = useState<number>(0);
//   return (
//     <button
//       className={`w-1/4 h-full bg-${bgcol} `}
//       //   style={{
//       //     clipPath: "polygon(0 0, 75% 0%, 90% 50%, 75% 100%, 0 100%, 15% 50%);",
//       //   }}
//       onClick={() => {
//         setBgcol(newBGcol),
//           setBgtext("white"),
//           setBtnNum(index),
//           console.log(btnNum);
//       }}
//     >
//       <p className={`text-${bgtext}`}> {text}</p>
//     </button>
//   );
// };

// export default Tab_buttons;
// // bg-gradient-to-r from-[#2D3BF2] to-[#B832E9]

import React, { useEffect, useState } from "react";
interface prop {
  Index: number;
  clName?: string;
  clip?: string;
  text: string;
  btnNum: number;
  setBtnNum: (num: number) => number;
  // bgcol: string;
}

const TabButtons = ({ Index, clName, clip, text, btnNum, setBtnNum }: prop) => {
  const [bgcolor, setBgcolor] = useState("white");
  const newBGcolor = "bg-gradient-to-r from-[#573efa] to-[#B832E9]";
  const [activeIndex, setActiveIndex] = useState(0);
  const [active, setActive] = useState(0);
  const bgChange = () => {
    // setActiveIndex(Index);
    active === Index ? setBgcolor(newBGcolor) : setBgcolor(bgcolor);
  };
  // useEffect(()=>{bgChange()},[active])
  return (
    <div
      onClick={() => {
        bgChange();
        setActive(Index);
        setBtnNum(Index);
      }}
      className={`h-full  ${bgcolor} border-[1px] border-neutral-300 ${Index} ${clName} flex items-center justify-center `}
      style={{
        clipPath: `${clip}`,
      }}
    >
      <p className="flex items-center justify-center text-sm leading-[-2%]">
        {" "}
        {text}
      </p>
    </div>
  );
};

export default TabButtons;
