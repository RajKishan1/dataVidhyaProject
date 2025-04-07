import React from "react";
import TabButtons from "../TabButtons";
interface prop {
  btnNum: number;
  setBtnNum: (num: number) => any;
}
const BtnBar = ({ btnNum, setBtnNum }: prop) => {
  return (
    <div className="w-4/5 h-12 flex border-[1px] border-neutral-300 rounded-2xl mb-[85px] overflow-hidden">
      <TabButtons
        btnNum={btnNum}
        setBtnNum={setBtnNum}
        text={"Choose Your Path"}
        Index={1}
        clName="w-[25%]"
        clip={"polygon(90% 0, 100% 50%, 90% 100%, 0 100%, 0 0)"}
      />
      <TabButtons
        text={"Solve Questions"}
        Index={2}
        btnNum={btnNum}
        setBtnNum={setBtnNum}
        clName="-ml-[4%] w-[30%]"
        clip={"polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 8% 50%)"}
      />
      <TabButtons
        btnNum={btnNum}
        setBtnNum={setBtnNum}
        text={"AI Review ✨"}
        Index={3}
        clName="-ml-[4%] w-[30%]"
        clip={"polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 8% 50%)"}
      />
      <TabButtons
        btnNum={btnNum}
        setBtnNum={setBtnNum}
        text={"Gamified Learning"}
        Index={4}
        clName="-ml-[4%] w-[28%]"
        clip={"polygon(0 0, 100% 0, 100% 100%, 0 100%, 10% 50%)"}
      />
    </div>
  );
};

export default BtnBar;
