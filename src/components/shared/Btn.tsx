import Link from "next/link";
import React from "react";
interface prop {
  link: string;
}
const Btn = ({ link }: prop) => {
  return (
    <div className="w-full flex justify-center my-5">
      {" "}
      <Link href={link}>
        <button className=" md:hidden px-6 py-3 bg-gradient-to-r from-[#573efa] to-[#B832E9] text-white rounded-md font-bold transition-all hover:bg-violet-700 ">
          View All
        </button>
      </Link>
    </div>
  );
};

export default Btn;
