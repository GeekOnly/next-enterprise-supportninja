"use client";
import Image from 'next/image';
import GetStartedButton from 'components/GetStartedButton/GetStartedButton';

const FivePage = () => {
    return(
    <>
     <div className="flex flex-col md:flex-row bg-primary-custom-pink px-[134.850px]">
 
      <div className="relative w-full md:w-1/2 bg-primary-custom-pink flex flex-col justify-center items-start p-8">
       <h1 className="text-7xl  mb-4">
         We’re better together. <br/> Start building your <br/> dream team.
       </h1>
       <p className="mb-4 font-bold">
         Design a custom outsourcing solution that drives results.
       </p>
       <div className="flex">
        <GetStartedButton />
       </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
       <div className="flex-0">
              <Image
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%2520Illustration__Footer-CTA-p-1080.webp"
                alt="Description of image"
                width={750}
                height={500}
                className="rounded-lg"
              />
        </div>
      </div>
     </div>
    </>
    )
  }
  
  export default FivePage;