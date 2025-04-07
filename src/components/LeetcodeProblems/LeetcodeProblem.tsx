import React from "react";
import Header from "@/components/Header";
import Display from "@/components/Display";

const LeetcodeProblem = () => {
  return (
    <>
      <Header />
      <Display heading="Choose your path" text="" />
      <button className="rounded-xl bg-gradient-to-r from-[#573efa] to-[#B832E9] text-[16px] leading-[20px] py-[14px] px-[26px] text-white my-28 ">
        Try Platform
      </button>
    </>
  );
};

export default LeetcodeProblem;
