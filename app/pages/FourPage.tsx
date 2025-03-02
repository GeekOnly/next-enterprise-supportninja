"use client";
import Image from 'next/image';
import { Button } from 'components/Button/Button';

const FourPage = () => {
  return(

  <>
    <div className="w-full px-[135px]">
      <div className="flex flex-col md:flex-row items-center justify-between p-8">
        <div className="md:w-1/2">
          <h1 className="text-7xl mb-2">We’re passionate about our people.</h1>
          <br/>
          <p className="mb-1 text-xl font-bold items-left">Our people-first culture attracts and retains top talent.</p>
          <br/>
          <p className="mb-4 text-xl">For nearly a decade, we’ve fostered the growth, wellbeing,<br/>
            and career development of our team members — and that’s <br/>
            earned us industry-high talent retention rates.</p>
          <div className="justify-center">
            <Button className="bg-[#0C3A23] rounded-full border-green-500 text-white hover:text-black hover:bg-white" href="https://example.com">
            Read our story
            </Button>
          </div>
        </div>
    
        <div className="md:w-1/2 flex justify-center md:p-5">
          <div className="md:w-1/2 relative md:p-5">
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c1677ce47c0_Tile__Man-p-500.png"
              alt="Description of image"
              width={250}
              height={250}
              className="rounded-lg absolute bottom-10 right-100 bg-[#BABCB4] "
            />
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c32c6ce47ba_Tile%20Illustrations__Pie%20Chart.webp"
              alt="Description of image"
              width={250}
              height={250}
              className="rounded-lg absolute bottom-10 right-32 bg-[#F7E1D2]"
            />
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cf161ce47c1_Tile__Woman-p-500.png"
              alt="Description of image"
              width={250}
              height={250}
               className="rounded-lg absolute bottom-20 left-55 bg-[#BABCB4] shadow-xl"
            />
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cbdf4ce47b9_Tile%2520Illustrations__Laptop-p-500.png"
              alt="Description of image"
              width={250}
              height={250}
              className="rounded-lg absolute top-10 right-100 bg-[#F7E1D2]"
              />
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c141ace47c2_Tile__Man%25202-p-500.png"
              alt="Description of image"
              width={250}
              height={250}
              className="rounded-lg absolute top-20 right-42 bg-[#BABCB4] shadow-lg"
              />
            <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cb7f6ce47b8_Tile%20Illustrations__Bar%20Chart.webp"
              alt="Description of image"
              width={250}
              height={250}
              className="rounded-lg absolute top-10 left-64 bg-[#F7E1D2]"
              />
          </div>
        </div>
      </div>
    </div>

    <div className="w-full px-[135px] flex flex-col md:flex-row items-center justify-between p-45 mt-20 md:gap-50">
      <div className="w-full md:w-1/2 flex justify-center relative">
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-1080.webp"
          alt="Description of image"
          width={696.734}
          height={460.281}
          className="rounded-lg"
        />
        <Image
              src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cbdf4ce47b9_Tile%2520Illustrations__Laptop-p-500.png"
              alt="Description of image"
              width={215.750}
              height={215.750}
              className="rounded-lg absolute top-70 left-15 bg-[#F7E1D2]"
              />
      </div>
    
      <div className="w-full md:w-1/2 flex flex-col md:p-5">
        <h1 className="text-6xl mb-8">
          Grow your career and <br/> unleash your<br/> potential.
        </h1>

        <p className="mb-8 text-xl font-bold">Ready to expand your horizons at a truly global company?</p>
        <p className="mb-8 text-xl">
          At SupportNinja, we prioritize your progress, celebrate <br/>
           your wins, and provide a supportive environment where<br/>
            you can thrive. Check out our openings today.
        </p>
        <div className="flex">
        <Button className="bg-[#0C3A23] rounded-full border-green-500 text-white hover:text-black hover:bg-white" href="https://example.com">
             View open roles
            </Button>
        </div>
      </div>
    </div>
  </>
  )
}

export default  FourPage;