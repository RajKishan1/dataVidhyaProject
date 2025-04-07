import { ProjectCardProps, ProjectFeedbackCardProps } from "@/types";

export const projectFeedbackCards: ProjectFeedbackCardProps[] = [
  {
    id: "1",
    name: "Aarav Sharma",
    profileImg: "https://randomuser.me/api/portraits/men/11.jpg",
    projectImgUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
    userReview: "This project helped me apply what I learned in a real-world scenario! I was able to combine theory with practical implementation, which really improved my understanding. The feedback I received from mentors and peers further shaped my thinking and helped me polish the final product. It was a milestone moment in my journey as a developer.",
    userProjectUrl: "https://github.com/aarav/project-one",
    position: "Frontend Developer",
    companyName: "ZetaTech"
  },
  {
    id: "2",
    name: "Diya Verma",
    profileImg: "https://randomuser.me/api/portraits/women/21.jpg",
    projectImgUrl: "https://media.istockphoto.com/id/2168318938/photo/advanced-digital-traffic-analysis-business-professional-utilizing-cutting-edge-technology-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=zhX1AUV8rJ66baLLM3qXgdC7dI17gt6CIuMTvp7Hw4A=",
    userReview: "Ipsum is simply dummy text of the printing and typesetting industry. Working on this project gave me valuable insights into UI/UX principles and how user behavior affects interface design. It was challenging but extremely rewarding. I learned the importance of prototyping, testing, and iterating — and how small design choices can have a big impact.",
    userProjectUrl: "https://diya.vercel.app",
    position: "UI/UX Designer",
    companyName: "Designly"
  },
  {
    id: "3",
    name: "Ishaan Mehta",
    profileImg: "https://randomuser.me/api/portraits/men/31.jpg",
    projectImgUrl: "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D",
    userReview: "The course was fantastic and gave me the confidence to build this. I used several new technologies I hadn’t worked with before. Debugging and problem-solving became a daily habit and actually turned into something I started to enjoy. This project was the perfect playground to experiment and grow as a full stack developer.",
    userProjectUrl: "https://ishaan.dev",
    position: "Full Stack Developer",
    companyName: "StackCraft"
  },
  {
    id: "4",
    name: "Kavya Rao",
    profileImg: "https://randomuser.me/api/portraits/women/41.jpg",
    projectImgUrl: "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvZnR3YXJlfGVufDB8fDB8fHww",
    userReview: "I improved so much in just a few weeks! Ipsum is simply dummy text of the printing and typesetting industry. From designing the wireframes to deploying the final version, every step taught me something new. This experience also helped me build a solid understanding of accessibility and performance optimization in web apps.",
    userProjectUrl: "https://github.com/kavya/portfolio",
    position: "Software Engineer",
    companyName: "InnovateX"
  },
  {
    id: "5",
    name: "Rohan Das",
    profileImg: "https://randomuser.me/api/portraits/men/51.jpg",
    projectImgUrl: "https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
    userReview: "Really boosted my confidence in backend development. I handled authentication, database structure, API design and much more. This project gave me a real sense of what it’s like to work on production-level backend systems and how to make things scalable and secure. It was a real eye-opener!",
    userProjectUrl: "https://rohan.io/projects",
    position: "Backend Developer",
    companyName: "CodeCore"
  }
];

export const projectCards: ProjectCardProps[] = [
  {
    id: "101",
    name: "Smart Expense Tracker",
    description: "A mobile app to track daily expenses with category-wise breakdown. It allows users to add income and expenses, set monthly budgets, and visualize their spending habits using intuitive charts. The app also supports export to CSV, dark mode, and personalized notifications. Built using React Native and Firebase, it demonstrates clean architecture and modular code practices.",
    projectImgUrl: "/newDesign.svg",
    topic: "Finance",
    courseName: "React Native Bootcamp"
  },
  {
    id: "102",
    name: "AI Study Buddy",
    description: "A chatbot that helps students understand tough concepts using AI. It includes support for math, science, and programming-related questions, providing detailed step-by-step solutions. The bot also recommends videos, articles, and exercises for deeper understanding. Built using GPT API, it’s integrated with a friendly UI that mimics real-time chat.",
    projectImgUrl: "/newDesign.svg",
    topic: "Artificial Intelligence",
    courseName: "AI for Beginners"
  },
  {
    id: "103",
    name: "Portfolio Website",
    description: "A personal portfolio built with animations and dark mode support. It features sections for projects, blogs, skills, contact forms, and a resume download option. The site is fully responsive, optimized for SEO, and includes subtle transitions using Framer Motion. It's deployed using Vercel and connected to a CMS for blog content.",
    projectImgUrl: "/newDesign.svg",
    topic: "Web Development",
    courseName: "Frontend Masters"
  },
  {
    id: "104",
    name: "Weather App",
    description: "Get live weather updates and weekly forecasts based on location. Uses OpenWeatherMap API for fetching real-time data. The app supports multiple themes, location search, and geolocation-based suggestions. Designed with performance and minimalism in mind, it works well across mobile and desktop devices. Also includes animated icons for weather states.",
    projectImgUrl: "/newDesign.svg",
    topic: "API Integration",
    courseName: "JavaScript Projects"
  },
  {
    id: "105",
    name: "E-commerce Dashboard",
    description: "An admin dashboard for managing products, orders, and revenue. Includes authentication, dynamic charts, inventory management, and sales reports. Admins can update products, analyze sales trends, and monitor user activity in real-time. Built with React, Chart.js, and Tailwind CSS, it connects to a secure backend and integrates Stripe for transactions.",
    projectImgUrl: "/newDesign.svg",
    topic: "Data Visualization",
    courseName: "Full Stack Development"
  }
];
