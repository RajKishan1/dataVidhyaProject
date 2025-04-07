import React from "react";
import Header from "../components/Header";
import Display from "@/components/Display";

const page = () => {
  return (
    <div className="w-full bg-[#f7f7fb] text-center">
      <Header />
      <Display
        // index={0}
        heading="Choose your path"
        text="Choose your path and have a personalized roadmap . We offer :

Pyspark 
Scala 
DBT 
Post gre SQL
Python"
      />
      <button className="rounded-xl bg-gradient-to-r from-[#573efa] to-[#B832E9] text-[16px] leading-[20px] py-[14px] px-[26px] text-white my-28">
        Try Platform
      </button>
    </div>
  );
};

export default page;
