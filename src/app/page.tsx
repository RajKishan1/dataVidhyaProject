// import React from "react";

// import Testimony from "@/components/landingPage/Testimonial/Testimony";
// import LeetcodeProblem from "@/components/LeetcodeProblems/LeetcodeProblem";

// const page = () => {
//   return (
//     <div className="w-full bg-[#f7f7fb] text-center">

//       <LeetcodeProblem />
//       <Testimony />
//     </div>
//   );
// };

// export default page;

"use client";
import Footer from "@/components/landingPage/Footer";
import Testimony from "@/components/landingPage/Testimonial/Testimony";
import LeetcodeProblem from "@/components/LeetcodeProblems/LeetcodeProblem";
import CoursesSection from "@/components/revamp-ui/CoursesSection";
// import ComboPackSection from "@/components/revamp-ui/comboPack";
// import CoursesSection from "@/components/revamp-ui/CoursesSection";
import HeroSection from "@/components/revamp-ui/heroSection";
import ProjectSection from "@/components/revamp-ui/projectSection";
import FAQsSection from "@/components/shared components/home page components/Faqs/FaqsSection";
// import FAQsSection from "@/components/shared components/home page components/Faqs/faqs";
// import ViewCounter from "@/components/shared components/home page components/socialMediaCounter/ViewCounter";
// import TopicCovered from "@/components/shared components/home page components/topicCoveredInCourse/TopicCovered";
import React from "react";

const Revampe = () => {
  return (
    <div className="w-full bg-white text-center">
      <HeroSection />
      <CoursesSection />
      {/* <ComboPackSection /> */}
      <ProjectSection />
      {/* <TopicCovered /> */}
      {/* <ViewCounter /> */}
      <LeetcodeProblem />
         <Testimony />
      <FAQsSection />
      <Footer />
    </div>
  );
};

export default Revampe;
