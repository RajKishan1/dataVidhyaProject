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

import React from "react";
interface prop {
  zIndex: number;
  clName?: string;
  clip?: string;
}
const TabButtons = ({ zIndex, clName, clip }: prop) => {
  return (
    <div
      className={`h-full w-[25%] bg-gradient-to-r from-[#573efa] to-[#B832E9] z-${zIndex} ${clName}`}
      style={{
        clipPath: `polygon(${clip} 0, 100% 50%, ${clip} 100%, 0 100%, 0 0)`,
      }}
      onClick={() => {}}
    ></div>
  );
};

export default TabButtons;
