"use client";
import Image from "next/image";
import Link from "next/link";
import SliderCard from "components/Side/SideComponent";
import CustomerSupportCard from "components/CustomerSupportCard/CustomerSupportCard";


const SecondPage: React.FC = () => {
  return (
    <div className="w-full mx-auto">
      <br />
      <div className="flex flex-col md:flex-row items-center justify-between p-8 mx-15">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-800.webp"
            alt="Description of image"
            width={750}
            height={750}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 justify-center">
          <h2 className="text-6xl font-light mx-11">Free up resources, <br/> accelerate growth,<br/> and solve for scale.</h2>
          <p className="mt-4 text-xl text-gray-600 mx-11">
            At SupportNinja, we combine cutting-edge technology <br/>
             with value-centricity to foster high-performing, reliable <br/>
             teams that turn growing pains into efficient pathways to <br/>
             profitability.
          </p>
          <br/>
          <p className="mt-4 text-xl text-gray-600 mx-11">
            Our customized, agile, AI-enabled solutions don’t just<br/>
            deliver cost savings — they also help you achieve key<br/>
            business outcomes.
          </p>
          <br/>
          <p className="mt-4 text-xl text-gray-600 mx-11">
            We work closely with you to continually adjust strategies,<br/>
            realize efficiencies, and drive scale according to your<br/>
            unique needs. Plus, flexibility is baked in from day one, so<br/>
            you’re never locked into rigid, long-term contracts.
          </p>
          <br/>
          <p className="mt-4 text-xl text-gray-600 mx-11">Now that’s outsourcing worth talking about.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-8 gap-4 ">
        {/* กล่องข้อความ */}
        <div className="md:w-1/2 md:pl-40 justify-center">
          <h2 className="text-6xl font-light">Don’t grow it alone</h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't let headcount become a headache. We’ll connect you with talent that meets your needs.
          </p>
          <p className="mt-4 text-xl text-gray-600">
            Your dedicated new team members will become experts in your world — your customers, your tech, your data, your systems — so they can expand on what you’ve built.
          </p>
        </div>      

        {/* กล่องรูปภาพ */}
        <div className="md:w-1/2 flex justify-center md:p5-140">
          <Image
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
            alt="Illustration of green plant inside of red and white vase"
            width={125}
            height={125}
            className="rounded-lg"
          />
        </div>
      </div>

      <hr className="my-8 border-t-1 border-gray-300 dark:border-gray-600" />

      {/* แสดง CustomerSupportCard แบบ 3x1 */}
      <div className="flex justify-center items-center space-x-4 p-8">      
        <CustomerSupportCard />
        <CustomerSupportCard />
        <CustomerSupportCard />
      </div>

      <hr className="my-8 border-t-1 border-gray-300 dark:border-gray-600" />

      {/* แสดง CustomerSupportCard แบบ 3x1 */}
      <div className="flex justify-center items-center space-x-4 p-8">   
        <CustomerSupportCard />
        <CustomerSupportCard />
        <CustomerSupportCard />
      </div>


    </div>
  );
};

export default SecondPage;
