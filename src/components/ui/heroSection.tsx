"use client";

import { FaCheckCircle } from "react-icons/fa";
import { Inter } from "next/font/google";
// import { courseCovered } from "@/context/GlobalData";
import { useEffect, useState } from "react";
import Navbar from "../shared components/home page components/Navbar/NavigationBar";
import { courseCovered } from "@/context/faqData";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };



  return (
<main className="relative min-h-screen w-full overflow-x-hidden">
      <div className="absolute left-0 top-0 flex h-full w-screen max-w-none overflow-hidden bg-white">
        <img
          src="/grid.png"
          className="absolute bottom-0 h-[40%] w-full min-w-full object-cover"
          alt="Grid background"
        />
      </div>

      <div className="absolute left-0 top-0 hidden h-full w-screen max-w-none items-end justify-between overflow-hidden md:flex">
        <div className="relative flex h-full w-1/2 overflow-hidden">
          <img
            src="/realBg1.svg"
            className="absolute -bottom-[35%] -left-1/4 h-[740px] w-full -rotate-12"
            alt="Background decoration 1"
          />
        </div>
        <div className="relative h-full w-1/2 overflow-hidden">
          <img
            src="/realBg2.svg"
            className="absolute -bottom-[30%] -right-1/4 h-[900px] w-full -rotate-12 max-2xl:-bottom-[35%] max-2xl:w-[800px]"
            alt="Background decoration 2"
          />
        </div>
      </div>

      <div className="relative w-full">
        <Navbar />

        {isMounted && (
          <div className="mx-auto  max-w-full px-4 py-6 sm:px-6 md:px-8 lg:w-[80rem] lg:px-5">
            <h1 className="max-w-full text-3xl font-bold leading-[1.2] text-[#333333] sm:text-4xl md:text-5xl md:leading-[100%] lg:text-[61px] my-0  md:my-6">
              Unlock your{" "}<br className="block md:hidden"/>
              <span className="bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] bg-clip-text text-transparent">
                Data Engineering{" "}
              </span>
              potential today
            </h1>

            <div className="my-4 flex flex-col flex-wrap gap-3 sm:flex-row md:my-6 md:gap-8">
              <p
                className={`flex items-center gap-1.5 text-sm font-light text-[#3D3D3D] md:text-base ${inter.className}`}
              >
                <FaCheckCircle className="size-4 text-[#1DBA0C] md:size-5" />
                Engage In Real-time Projects
              </p>
              <p
                className={`flex items-center gap-1.5 text-sm font-light text-[#3D3D3D] md:text-base ${inter.className}`}
              >
                <FaCheckCircle className="size-4 text-[#1DBA0C] md:size-5" />
                Solve leet-code like problems
              </p>
              <p
                className={`flex items-center gap-1.5 text-sm font-light text-[#3D3D3D] md:text-base ${inter.className}`}
              >
                <FaCheckCircle className="size-4 text-[#1DBA0C] md:size-5" />
                Learn latest trends from our courses
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                className={`rounded-[12px] bg-gradient-to-r from-[#4044ED] to-[#B832E9] px-6 py-2.5 font-semibold text-white transition-transform hover:scale-105 sm:px-8 sm:py-3 ${inter.className}`}
              >
                Explore Courses
              </button>
              <button
                className={`rounded-[12px] bg-[#2E2E2E] px-6 py-2.5 font-semibold text-white transition-transform hover:scale-105 sm:px-8 sm:py-3 ${inter.className}`}
              >
                Solve Questions
              </button>
            </div>

            <div className="mt-6 flex w-full flex-col gap-6 md:mt-10 md:flex-row md:gap-8 lg:gap-16">
              <div className="w-full rounded-[20px] border border-[#D7D7D7] bg-[#FAFAFA] p-4 sm:p-6 md:w-1/2 md:rounded-[28px] md:p-8">
                <div className="w-full mb-4">
                  <div className="grid grid-cols-3 gap-2">
                    <img
                      src="/drshil.png"
                      alt="Course instructor"
                      className="h-auto w-full  "
                    />
                    <img
                      src="/drshil.png"
                      alt="Course instructor"
                      className="h-auto w-full  object-cover"
                    />
                    <img
                      src="/drshil.png"
                      alt="Course instructor"
                      className="h-auto w-full  object-cover"
                    />
                    <img
                      src="/drshil.png"
                      alt="Course instructor"
                      className="h-auto w-full  object-cover"
                    />
                    <img
                      src="/drshil.png"
                      alt="Course instructor"
                      className="h-auto w-full  object-cover"
                    />
                    <img
                      src="/drshil.png"
                      alt="Course instructor"
                      className="h-auto w-full  object-cover"
                    />
                  </div>
                </div>
                <div className="mt-auto">
                  <h3
                    className={`${inter.className} text-lg font-semibold text-[#333333] md:text-xl`}
                  >
                    Data Vidhya{" "}
                    <span className="font-bold text-[#1455BE]">Courses</span>
                  </h3>
                  <p
                    className={`mt-1 font-medium text-[#333333B2]/70 md:text-base ${inter.className}`}
                  >
                    Our extensive course catalogue keeps you in trend with data
                    Engineering
                  </p>
                </div>
              </div>

              <div className="w-full rounded-[20px] border border-[#D7D7D7] bg-[#FAFAFA] p-4 sm:p-6 md:w-1/2 md:rounded-[28px] md:p-8">
                <div className="flex w-full justify-center mb-4">
                  <div className="w-full max-w-[470px] overflow-hidden rounded-lg shadow-lg">
                    <img src="/screenshot.png" alt="Platform screenshot" className="w-full h-auto" />
                  </div>
                </div>
                <div className="mt-auto">
                  <h3
                    className={`${inter.className} text-lg font-semibold text-[#333333] md:text-xl`}
                  >
                    Data Vidhya{" "}
                    <span className="font-bold text-[#1455BE]">Platform</span>
                  </h3>
                  <p
                    className={`mt-1 font-medium text-[#333333B2]/70 md:text-base ${inter.className}`}
                  >
                    Our extensive course catalogue keeps you in trend with data
                    Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
