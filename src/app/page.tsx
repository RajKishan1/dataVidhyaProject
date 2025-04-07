"use client";
import Footer from "@/components/landingPage/Footer";
import Testimony from "@/components/landingPage/Testimonial/Testimony";
import LeetcodeProblem from "@/components/LeetcodeProblems/LeetcodeProblem";
import CoursesSection from "@/components/ui/CoursesSection";
import HeroSection from "@/components/ui/heroSection";
import ProjectSection from "@/components/ui/projectSection";
import FAQsSection from "@/components/shared components/home page components/Faqs/FaqsSection";

import React from "react";

const Revampe = () => {
  return (
    <div className="w-full bg-white ">
      <HeroSection />
      <CoursesSection />
      <ProjectSection />
      <LeetcodeProblem />
      <Testimony />
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default Revampe;
