import { Inter } from "next/font/google";
import React, { useState } from "react";
import ProjectCard from "../shared/projectCards";
import ProjectFeedbackCard from "./projectFeedbackCard";
import { projectCards, projectFeedbackCards } from "@/context/projectData";

const inter = Inter({ subsets: ["latin"] });

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="w-full bg-[#FFFFFF]">
      <p
        className={`text-center ${inter.className} mt-4 md:mt-28 font-bold text-[#8B90A1]`}
      >
        PROJECTS
      </p>
      <div className="flex justify-center">
        <h2
          className={`mt-5 w-full max-w-xs text-center text-3xl font-bold leading-[120%] text-[#000000] sm:max-w-md md:max-w-lg md:text-5xl lg:max-w-xl lg:text-[48px] xl:max-w-2xl ${inter.className}`}
        >
          Work on Real Time{" "}
          <span className="relative inline-block">
            Projects
            <svg
              className="absolute -bottom-5 left-1/2 w-full max-w-[120px] -translate-x-1/2 sm:-bottom-6 md:-bottom-3 sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]"
              height="35"
              viewBox="0 0 200 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M10,25 Q100,10 190,25"
                stroke="#a855f7"
                strokeWidth="3"
                fill="transparent"
              />
              <path
                d="M10,30 Q100,15 190,30"
                stroke="#a855f7"
                strokeWidth="3"
                fill="transparent"
              />
            </svg>
          </span>
        </h2>
      </div>
      <div className="mx-auto mt-[30px] flex w-full justify-center">
        <p
          className={`text-center text-[18px] text-[#000000] ${inter.className}`}
        >
          Gain proficiency with 14+ extensive projects designed to provide
          practical, real-world data engineering experience
        </p>
      </div>

      <div className="mt-5 flex justify-center">
        <div className="inline-flex overflow-hidden">
          <button
            className={`rounded-l-2xl px-6 py-2.5 text-sm font-medium transition-colors focus:outline-none sm:text-base ${
              activeTab === "projects"
                ? "bg-gradient-to-r from-[#4044ED] to-[#B832E9] text-white"
                : "border border-gray-200 bg-white text-[#33333366] hover:bg-gray-100"
            } ${inter.className}`}
            onClick={() => setActiveTab("projects")}
          >
            Data Vidhya Projects
          </button>
          <button
            className={`rounded-r-2xl px-6 py-2.5 text-sm font-medium transition-colors focus:outline-none sm:text-base ${
              activeTab === "reviews"
                ? "bg-gradient-to-r from-[#4044ED] to-[#B832E9] text-white"
                : "border border-gray-200 bg-white text-[#33333366] hover:bg-gray-100"
            } ${inter.className}`}
            onClick={() => setActiveTab("reviews")}
          >
            Student Reviews
          </button>
        </div>
      </div>

      <div className="mx-auto my-10 max-w-7xl px-4">
        {activeTab === "projects" ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {projectCards.map((project, index) => (
              <div
                key={project.id}
                className={index >= 3 ? "hidden md:flex" : ""}
              >
                <ProjectCard {...project} />{" "}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {projectFeedbackCards.map((review, index) => (
              <div
                key={review.id}
                className={index >= 3 ? "hidden md:flex" : ""}
              >
                <ProjectFeedbackCard {...review} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
