"use client";

import Image from "next/image";

const ThridPage = () => {

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

  <div className="flex h-screen w-full">
      <div className="relative w-5/10 bg-white flex flex-col justify-center items-start p-8">
      <h1 className="text-6xl font-bold mb-4">Our customized <br/> approach</h1>
        <p className="mb-4">
        We tailor our strategies and services based on your <br/> roadblocks and needs,
         delivering a strategic outsourcing <br/> playbook — inclusive of technology, talent,
         and timing — <br/> that drives your business forward.</p>
      </div>

      {/* Section Center (40%) */}
      <div className="w-5/10 bg-white flex flex-col justify-center items-center p-8">
        <h1 className="text-2xl font-bold mb-4">Get set up in 5 easy steps</h1>
        <p className="mb-4">
          Deep dive with us into your goals and hiring needs.
        </p>
        <p className="mb-4">
          We’ll work with you to design a customized solution for your business.
        </p>
        <p className="mb-4">
          Once you're on board, we’ll source the best talent for you.
        </p>
        <p className="mb-4">
          We’ll create a customized training program that aligns with your goals.
        </p>
        <p className="mb-4">
          Sit back and enjoy the efficiencies ahead — it's grow time.
        </p>
        <div className="flex justify-center">
               <button type="button" className="flex justify-centertext-white w-30 bg-red-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</button>
            </div>
      </div>
    </div>
  </>
  )
}

export default ThridPage;