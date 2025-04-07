"use client";

import { FaCheckCircle } from "react-icons/fa";
import { Inter } from "next/font/google";
// import { courseCovered } from "@/context/GlobalData";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../shared components/home page components/Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants
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

  const cardContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const cardItem = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="relative min-h-[110vh] w-full overflow-hidden">
      <div className="absolute left-0 top-0 flex h-full w-screen max-w-none overflow-hidden bg-white">
        <img
          src="/gridBg.svg"
          className="absolute bottom-0 h-[50%] w-screen min-w-full object-cover"
          alt="Grid background"
        />
      </div>

      <div className="absolute left-0 top-0 hidden h-full w-screen max-w-none items-end justify-between overflow-hidden md:flex">
        <div className="relative flex h-full w-[50%] overflow-hidden">
          <img
            src="/realBg1.svg"
            className="absolute -bottom-[35%] -left-1/4 h-[740px] w-full -rotate-12"
            alt="Background decoration 1"
          />
        </div>
        <div className="relative h-full w-[50%] overflow-hidden">
          <img
            src="/realBg2.svg"
            className="absolute -bottom-[30%] -right-1/4 h-[900px] w-full -rotate-12 max-2xl:-bottom-[35%] max-2xl:w-[800px]"
            alt="Background decoration 2"
          />
        </div>
      </div>

      <div className="absolute left-0 top-0 size-full">
        <Navbar />

        {isMounted && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="mx-auto mt-4 max-w-full px-4 sm:mt-6 sm:px-6 md:mt-8 md:px-8 lg:w-[80rem] lg:px-5"
          >
            <motion.h1
              variants={item}
              className="max-w-full text-3xl font-bold leading-[1.2] text-[#333333] sm:text-4xl md:text-5xl md:leading-[100%] lg:text-[61px]"
            >
              Unlock your{" "}
              <span className="bg-gradient-to-r from-[#2D3BF2] to-[#B832E9] bg-clip-text text-transparent">
                Data Engineering{" "}
              </span>
              potential today
            </motion.h1>

            <motion.div
              variants={item}
              className="my-4 flex flex-col flex-wrap gap-3 sm:flex-row md:my-8 md:gap-8"
            >
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
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <button
                className={`rounded-[12px] bg-gradient-to-r from-[#4044ED] to-[#B832E9] px-6 py-2.5 font-semibold text-white transition-transform hover:scale-105 sm:px-8 sm:py-3 ${inter.className}`}
              >
                Explore Courses
              </button>
              <button
                className={`rounded-[12px] bg-[#E4E6EB] px-6 py-2.5 font-semibold text-[#333333] transition-transform hover:scale-105 sm:px-8 sm:py-3 ${inter.className}`}
              >
                Solve Questions
              </button>
            </motion.div>

            <motion.div
              variants={cardContainer}
              initial="hidden"
              animate="show"
              className="mt-6 flex w-full flex-col gap-6 md:mt-10 md:flex-row md:gap-8 lg:gap-16"
            >
              <motion.div
                variants={cardItem}
                className="h-auto w-full rounded-[20px] border border-[#D7D7D7] bg-[#FAFAFA] p-4 sm:h-[275px] sm:p-6 md:w-1/2 md:rounded-[28px] md:p-8 lg:h-[320px] lg:w-[528px]"
              >
                <div className="h-auto w-full md:h-[70%]">
                  {/* <div className="grid grid-cols-3 gap-2 md:gap-4">
                    {courseCovered.map((item:number, index:number) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex flex-col items-center justify-center p-2"
                      ></motion.div>
                    ))}
                  </div> */}
                </div>
                <div className="mt-4 flex h-[30%] w-full flex-col justify-end">
                  <h3
                    className={`${inter.className}text-lg font-semibold text-[#333333] md:text-xl`}
                  >
                    Data Vidhya{" "}
                    <span className="font-bold text-[#1455BE]">Courses</span>
                  </h3>
                  <p
                    className={`mt-1 font-medium text-[#333333B2]/70 md:text-base ${inter.className} `}
                  >
                    Our extensive course catalogue keeps you in trend with data
                    Engineering
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={cardItem}
                className="h-auto w-full rounded-[20px] border border-[#D7D7D7] bg-[#FAFAFA] p-4 sm:h-[275px] sm:p-6 md:w-1/2 md:rounded-[28px] md:p-8 lg:h-[320px] lg:w-[528px]"
              >
                <div className="flex h-[70%] w-full items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="w-full max-w-[320px] overflow-hidden rounded-lg shadow-lg"
                  ></motion.div>
                </div>
                <div className="mt-4 flex h-[30%] w-full flex-col justify-end">
                  <h3
                    className={`${inter.className}text-lg font-semibold text-[#333333] md:text-xl`}
                  >
                    Data Vidhya{" "}
                    <span className="font-bold text-[#1455BE]">Platform</span>
                  </h3>
                  <p
                    className={`mt-1 font-medium text-[#333333B2]/70 md:text-base ${inter.className} `}
                  >
                    Our extensive course catalogue keeps you in trend with data
                    Engineering
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </main>
  );
}