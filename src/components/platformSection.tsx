"use client";

import React, { useState } from "react";
import Image from "next/image";

const platformCards = [
  {
    title: "Choose Your Path",
    description: [
      "Choose your path and have a personalized roadmap. We offer:",
      "Pyspark",
      "Scala",
      "DBT",
      "Postgre SQL ",
      "Python",
    ],
    imgSrc: "/images/first.png",
  },
  {
    title: "Solve Questions",
    description:
      "Engage in real-world coding challenges and get instant feedback to enhance your skills.",
    imgSrc: "/images/second.png",
  },
  {
    title: "AI Review✨",
    description:
      "Engage in real-world coding challenges and get instant feedback to enhance your skills.",
    imgSrc: "/images/third.png",
  },
  {
    title: "Gamified Learning",
    description:
      "Level up skills through challenges, rewards and competition making learning addictive & effective",
    imgSrc: ["/img2.png", "/image.png"],
  },
];

const PlatformSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleArrowClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <section
      id="platform"
      className="mt-16 px-4 max-w-7xl mx-auto text-center "
    >
      <div className="flex  justify-center overflow-x-auto px-4 overflow-hidden">
        {platformCards.map((card, index) => {
          const isFirst = index === 0;
          const isLast = index === platformCards.length - 1;

          const clipPath = isFirst
            ? " polygon(90% 0, 100% 50%, 90% 100%, 0 100%, 0 0) "
            : isLast
            ? "polygon(0 0, 100% 0, 100% 10px, 100% 90%, 100% 100%, 0 100%, 0 50%)"
            : "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)";

          return (
            <button
              key={index}
              onClick={() => handleArrowClick(index)}
              className={`relative w-[30%] md:w-1/4 h-20 md:h-14 px-12 text-xs md:text-lg text-center flex items-center justify-center font-thin md:font-semibold transition-all duration-300 ${
                activeIndex === index
                  ? "bg-gradient-to-r from-[#573efa] to-[#B832E9] text-white"
                  : "bg-white text-gray-800"
              }`}
              style={{
                clipPath,
                marginLeft: index !== 0 ? "-30px" : "0",
                zIndex: platformCards.length - index,
                border: "1px solid #ccc ",
                boxShadow:
                  activeIndex === index
                    ? "0 0 10px rgba(0,0,0,0.5)"
                    : "0 0 5px rgba(0,0,0,0.1)",
              }}
            >
              <span className="font-normal">{card.title}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 md:mt-20 flex flex-wrap md:flex-nowrap gap-8 justify-between items-center">
        <div className="w-full md:w-[45%] text-left ml-6 p-6">
          <h3 className="text-2xl font-bold mb-4 text-black ">
            {activeIndex === 2 ? (
              <>
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text">
                  1/4{" "}
                </span>
                AI Review✨
              </>
            ) : (
              platformCards[activeIndex].title
            )}
          </h3>

          {Array.isArray(platformCards[activeIndex].description) ? (
            <div className="text-gray-600 text-lg leading-relaxed">
              <p className="mb-3">
                {platformCards[activeIndex].description[0]}
              </p>
              <ol className="list-decimal ml-6">
                {platformCards[activeIndex].description
                  .slice(1)
                  .map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
              </ol>
            </div>
          ) : (
            <p className="text-gray-600 text-lg leading-relaxed">
              {platformCards[activeIndex].description}
            </p>
          )}
        </div>

        <div className="w-full md:w-[90%] p-4 flex justify-center items-center gap-6 flex-wrap border-[1px] shadow-lg border-neutral-300 rounded-lg">
          {Array.isArray(platformCards[activeIndex].imgSrc) ? (
            platformCards[activeIndex].imgSrc.map((src, i) => (
              <Image
                key={i}
                src={`${src}`}
                alt={`Platform Feature ${i + 1}`}
                width={500}
                height={300}
                className="w-full sm:w-[45%] h-auto max-w-md rounded-md shadow-lg object-cover"
              />
            ))
          ) : (
            <Image
              src={`${platformCards[activeIndex].imgSrc}`}
              alt="Platform Feature"
              width={600}
              height={400}
              className="w-full h-auto max-w-5xl rounded-md object-cover"
            />
          )}
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <button className="px-6 py-3 bg-gradient-to-r from-[#573efa] to-[#B832E9] text-white rounded-md font-bold transition-all hover:bg-violet-700">
          Try Platform
        </button>
      </div>
    </section>
  );
};

export default PlatformSection;
