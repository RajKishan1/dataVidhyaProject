import React from "react";

const Header = () => {
  return (
    <div className="bg-[f7f7fb] flex flex-col items-center">
      <p className="text-[16px] text-[#8B90A1] font-bold my-6 mt-20">PLATFORM</p>
      <h1 className="text-3xl md:text-5xl text-black text-center font-bold">Solve Leet Code like </h1>
      <h1 className="text-3xl md:text-5xl text-black font-bold mb-[30px]">problems</h1>
      <h6 className="text-lg text-black font-normal leading-[150%] w-[90%] md:w-[55%] text-center">
        Our platform empowers you to advance your career with practical skills
        and real-world applications. Join a vibrant community that supports your
        learning journey.
      </h6>
    </div>
  );
};

export default Header;
