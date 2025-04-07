import React, { useState } from "react";
interface prop {
  radioNum: number;
  setRadioNum: (num: number) => void;
  indexNum: number;
}
const RadioBtn = ({ setRadioNum, radioNum, indexNum }: prop) => {
  const [radioBG, setRadioBG] = useState("transparent");
  return (
    <div
      className="h-6 w-6  rounded-full bg-neutral-300 flex items-center justify-center peer-checked:border-4 peer-checked:border-black transition-all"
      // onClick={() => {
      //   setRadioBG("black"), setRadioNum(indexNum), console.log(radioNum);
      // }}
    >
      <div className={`w-3.5 h-3.5 rounded-full bg-${radioBG}`}></div>
    </div>
  );
};

export default RadioBtn;
// ${selected === option.id ? "bg-black" : "bg-transparent"}
