import React from "react";
import TestimonyCard from "./TestimonyCard";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const Testimony = () => {
  return (
    <div
      className={`${roboto.variable} w-full flex flex-col items-center justify-center `}
    >
      <h1 className="text-3xl md:text-5xl text-black text-center  font-bold leading-[120%] mt-28">
        Customer Testimonials
      </h1>
      <p className="text-lg font-normal leading-[150%] text-center text-black mt-6 mb-6 md:mb-20">
        This platform transformed my data engineering skills!
      </p>
      <div className="w-[85%] flex flex-col md:flex-row  justify-center gap-0 md:gap-5 mb-6 md:mb-28">
        <span className="gap-5">
          <TestimonyCard
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
          mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
          perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
          incidunt cum."
            Name="Name SurName"
            position="AI Engineer"
            companyName="Google"
            pfp="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          <TestimonyCard
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
          mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
          perspiciatis "
            Name="Name Surname"
            position="Data Engineer"
            companyName=""
            pfp="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          />
        </span>
        <span >
          <TestimonyCard
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
          mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
          perspiciatis  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
          perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
          incidunt cum."
            Name="Name SurName"
            position="AI Engineer"
            companyName="Google"
            pfp="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          <TestimonyCard
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
          mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
          perspiciatis "
            Name="Name Surname"
            position="Data Engineer"
            companyName=""
            pfp="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          />
        </span>
        <span className=" hidden md:flex flex-col">
          <TestimonyCard
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
          mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed
          perspiciatis placeat cupiditate ipsum praesentium odit! Inventore
          incidunt cum."
            Name="Name SurName"
            position="AI Engineer"
            companyName="Google"
            pfp="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          />
          <TestimonyCard
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ut
          mollitia voluptate,  mollitia voluptate, nesciunt, modi laudantium voluptas fuga sed perspiciatis nesciunt, modi laudantium voluptas fuga sed
          perspiciatis "
            Name="Name Surname"
            position="Data Engineer"
            companyName=""
            pfp="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          />
        </span>
      </div>
    </div>
  );
};

export default Testimony;
