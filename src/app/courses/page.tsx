import Navbar from "@/components/shared components/home page components/Navbar/navbar";
import CoursesSection from "@/components/ui/CoursesSection";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-full bg-blue-50">
      <Navbar />
      <div className="h-full w-full">
        <CoursesSection />
      </div>
    </div>
  );
};

export default Page;
