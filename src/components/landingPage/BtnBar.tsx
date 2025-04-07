import React from "react";
import TabButtons from "../TabButtons";

const BtnBar = () => {
  return (
    <div className="w-4/5 h-12 flex border-[1px] border-neutral-300 rounded-2xl mb-[85px] overflow-hidden">
      <TabButtons zIndex={40} clip={"92%"} />
      <TabButtons zIndex={30} clName="-ml-[5%] w-[30%]" clip={"92%"} />
      <TabButtons zIndex={20} clName="-ml-[5%] w-[30%]" clip={"92%"} />
      <TabButtons zIndex={10} clName="-ml-[5%] w-[30%]" />
    </div>
  );
};

export default BtnBar;
