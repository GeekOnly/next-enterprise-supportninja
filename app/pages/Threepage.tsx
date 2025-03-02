"use client";

import Image from "next/image";
import { useState } from "react";

const options = {
  "Management-as-a-Service": [
    "Deep dive with us into your goals and hiring needs.",
    "We'll work with you to design a customized solution for your business.",
    "Once you're on board, we'll source the best talent for you.",
    "We'll create a customized training program that aligns with your goals.",
    "Sit back and enjoy the efficiencies ahead - it's grow time.",
  ],
  "Talent-as-a-Service": [
    "Deep dive with us into your goals and hiring needs.",
    "Access a private portal with hand-picked talent to browse and shortlist candidates.",
    "Start interviewing.",
    "Refine your list until you have the right team.",
    "With us beside you, welcome your new team aboard and prepare for scale!",
  ],
};

const ThridPage = () => {
  const [selectedService, setSelectedService] = useState<keyof typeof options>(
    "Management-as-a-Service"
  );
  return(
    <>
    <div className="flex bg-primary-custom-Gray h-screen w-full">
    {/* Section Left (30%) */}
    <div className="relative w-3/10 flex items-center justify-center">
      <Image
        src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cafddce47aa_Avatar%20Circle__08.svg" // เปลี่ยนเป็น URL หรือ path ของภาพ
        alt="Example Image"
        width={50} // Specify the width
        height={50} // Specify the height
        objectFit="cover"
        className="relative top-0 left-0"
      />
      <Image
        src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cafddce47aa_Avatar%20Circle__08.svg" // เปลี่ยนเป็น URL หรือ path ของภาพ
        alt="Example Image"
        width={50} // Specify the width
        height={50} // Specify the height
        objectFit="cover"
        className="relative top-0 left-0"
      />
    </div>

    {/* Section Center (40%) */}
    <div className="w-4/10 flex flex-col justify-center items-center p-8">
      <h1 className="text-6xl font-light mb-4">Spanning a wider
      world of talent</h1>
      <p className="mb-4">
      What are the odds that the most qualified people in the world live in your zip code? We’ll help you see further.
      </p>
      <p className="mb-4">
      A global team extends your presence across time zones and languages—which means longer reach, constant uptime, and happier customers.
      </p>
      <p className="mb-4 font-bold">
      It’s time to go international. No passport required.</p>

      <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Get Started</button>

    </div>

    

    {/* Section Right (30%) */}
    <div className=" relative w-3/10 flex items-center justify-center">
    <Image
        src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cafddce47aa_Avatar%20Circle__08.svg" // เปลี่ยนเป็น URL หรือ path ของภาพ
        alt="Example Image"
        width={50} // Specify the width
        height={50} // Specify the height
        objectFit="cover"
        className="relative top-0 left-0"
      />
       <Image
        src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cafddce47aa_Avatar%20Circle__08.svg" // เปลี่ยนเป็น URL หรือ path ของภาพ
        alt="Example Image"
        width={50} // Specify the width
        height={50} // Specify the height
        objectFit="cover"
        className="relative top-0 left-0"
      />
    </div>
  </div>
  // end

  <div className="w-full h-screen">
  <div className="flex bg-gradient-to-r from-gray-100 to-gray-200 font-sans">
  {/* ส่วนซ้าย */}
  <div className="relative w-1/2 flex flex-col items-center justify-center p-10">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-relaxed text-gray-900 tracking-tight">
      Our Customized <br /> Approach
    </h1>
    <p className="mt-4 text-lg leading-relaxed text-gray-600 max-w-md text-start">
      We tailor our strategies and services based on your roadblocks and needs, delivering a strategic outsourcing playbook — inclusive of technology, talent, and timing — that drives your business forward.
    </p>
  </div>

      {/* ส่วนขวา */}
        <div className="w-full flex flex-col justify-center items-center p-10 max-w-screen-lg">        
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Get Set Up in 5 Easy Steps
        </h1>
    
        {/* ปุ่ม */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(options).map((service) => (
            <button
              key={service}
              onClick={() => setSelectedService(service as keyof typeof options)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md ${
                selectedService === service
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-white text-gray-700 hover:bg-blue-100 hover:shadow-lg"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
    
        {/* รายการขั้นตอน */}
        <div className="w-full max-w-md p-6">
          <ul className="list-decimal list-inside text-lg space-y-3 text-gray-700">
            {options[selectedService].map((text, index) => (
              <li key={index} className="leading-relaxed">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default ThridPage;