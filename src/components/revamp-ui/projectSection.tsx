import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
// import ProjectFeedbackCard from "./shared/projectFeedbackCards";
// import ProjectCard from "./shared/projectCards";
// import { ProjectCardProps, ProjectFeedbackCardProps } from "@/types";

const inter = Inter({ subsets: ["latin"] });

const ProjectSection = () => {
  const [activeTab, setActiveTab] = useState("projects");
//   const [projectReviews, setProjectReviews] = useState<
//     ProjectFeedbackCardProps[]
//   >([]);
//   const [projects, setProjects] = useState<ProjectCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjectFeedback = async () => {
      if (activeTab === "reviews") {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch("/api/v1/user/project-feedback");
          if (!response.ok) {
            throw new Error("Failed to fetch reviews");
          }
          const data = await response.json();
        //   setProjectReviews(data.data);
        } catch (err) {
          setError(err instanceof Error ? err.message : "An error occurred");
        //   setProjectReviews([]);
        } finally {
          setIsLoading(false);
        }
      }

      if (activeTab === "projects") {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch("/api/v1/user/projects");
          if (!response.ok) {
            throw new Error("Failed to fetch projects");
          }
          const data = await response.json();
        //   setProjects(data.data);
        } catch (err) {
          setError(err instanceof Error ? err.message : "An error occurred");
        //   setProjects([]);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchProjectFeedback();
  }, [activeTab]);

  return (
    <div className="w-full bg-[#FFFFFF]">
      <p
        className={`text-center ${inter.className} mt-[112px] font-bold text-[#8B90A1]`}
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
              className="absolute -bottom-1 left-1/2 w-full max-w-[120px] -translate-x-1/2 sm:-bottom-3 sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px]"
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
      <div className="mx-auto mt-[30px] flex w-[592px] justify-center">
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
        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="size-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : activeTab === "projects" ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* {projects.map((project) => ( */}
              {/* <ProjectCard key={project.id} {...project} /> */}
            {/* ))} */}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* {projectReviews.map((review) => (
              <ProjectFeedbackCard key={review.id} {...review} />
            ))} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;