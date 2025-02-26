"use client";
import Image from 'next/image';
const FourPage = () => {
  return(
  <>
    <div className="flex w-full h-screen">
    <div className="relative w-5/10 bg-white flex flex-col items-start p-8">
       <h1 className="text-7xl font-bold mb-2">Grow your career and unleash your potential.</h1>
         <p className="mb-4 items-left">
         Ready to expand your horizons at a truly global company?
         </p>
         <p className="mb-4">
         At SupportNinja, we prioritize your progress, celebrate your wins, and provide a supportive environment where you can thrive. Check out our openings today.
         </p>
         <div className="justify-center">
                  <button type="button" className="flex justify-centertext-white w-60 h-20 bg-red-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-4xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</button>
         </div>
       </div>

    {/* Section Center  */}
    <div className="w-5/10 bg-white flex flex-col justify-center items-center p-8">
         <div className="flex">
                       <Image
                         src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c1677ce47c0_Tile__Man-p-500.png"
                         alt="Description of image"
                         width={250} // Set your desired width
                         height={250} // Set your desired height
                         className="rounded-lg" // Add any additional styles if needed
                       />
                       <Image
                         src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c32c6ce47ba_Tile%20Illustrations__Pie%20Chart.webp"
                         alt="Description of image"
                         width={250} // Set your desired width
                         height={250} // Set your desired height
                         className="rounded-lg" // Add any additional styles if needed
                       />
                       <Image
                         src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cf161ce47c1_Tile__Woman-p-500.png"
                         alt="Description of image"
                         width={250} // Set your desired width
                         height={250} // Set your desired height
                         className="rounded-lg" // Add any additional styles if needed
                       />
        </div>
        <div className="flex">
                       <Image
                         src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cbdf4ce47b9_Tile%2520Illustrations__Laptop-p-500.png"
                         alt="Description of image"
                         width={250} // Set your desired width
                         height={250} // Set your desired height
                         className="rounded-lg" // Add any additional styles if needed
                       />
                       <Image
                         src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c141ace47c2_Tile__Man%25202-p-500.png"
                         alt="Description of image"
                         width={250} // Set your desired width
                         height={250} // Set your desired height
                         className="rounded-lg" // Add any additional styles if needed
                       />
                       <Image
                         src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cb7f6ce47b8_Tile%20Illustrations__Bar%20Chart.webp"
                         alt="Description of image"
                         width={250} // Set your desired width
                         height={250} // Set your desired height
                         className="rounded-lg" // Add any additional styles if needed
                       />
                       
        </div>
    </div>
   </div>
   // end 
   <div className="flex h-screen">
    <div className="relative w-5/10 bg-white flex flex-col justify-center items-center p-8">
       <div className="flex-0">
                     <Image
                       src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-1080.webp"
                       alt="Description of image"
                       width={750} // Set your desired width
                       height={500} // Set your desired height
                       className="rounded-lg" // Add any additional styles if needed
                     />
        </div>
    </div>

    {/* Section Rigt  */}
    <div className="w-5/10 bg-white flex flex-col justify-center items-start p-1">
      <h1 className="text-7xl font-bold mb-4">Grow your career and unleash your potential.</h1>
      <p className="mb-4 items-left">
      Ready to expand your horizons at a truly global company?
      </p>
      <p className="mb-4">
      At SupportNinja, we prioritize your progress, celebrate your wins, and provide a supportive environment where you can thrive. Check out our openings today.
      </p>
      <div className="justify-center">
               <button type="button" className="flex justify-centertext-white w-60 h-20 bg-red-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-4xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</button>
      </div>
    </div>
   </div>
  </>
  )
}

export default  FourPage;