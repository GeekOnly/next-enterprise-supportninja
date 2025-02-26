"use client";
import Image from 'next/image';

const FivePage = () => {
    return(
    <>

     <div className="flex h-screen bg-primary-custom-pink">
 
     {/* Section Text */}
      <div className="relative w-4/10 bg-primary-custom-pink flex flex-col justify-center items-left p-8">
       <h1 className="text-6xl font-bold mb-4">We’re better together. <br/> Start building your <br/> dream team.</h1>
         <p className="mb-4">
         Design a custom outsourcing solution that drives results.</p>
         <div className="justify-center">
               <button type="button" className="flex justify-centertext-white w-60 h-20 bg-red-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-4xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Started</button>
            </div>
       </div>

      {/* Section Image */}
      <div className="w-5/10 flex flex-col justify-center items-center p-8">
       <div className="flex-0">
              <Image
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%2520Illustration__Footer-CTA-p-1080.webp"
                alt="Description of image"
                width={750} // Set your desired width
                height={500} // Set your desired height
                className="rounded-lg" // Add any additional styles if needed
              />
        </div>
      </div>
     </div>
    </>
    )
  }
  
  export default  FivePage;