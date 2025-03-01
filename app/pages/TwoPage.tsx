"use client";
import Image from "next/image";
import Link from "next/link";
import SliderCard from "components/Side/SideComponent";

interface Testimonial {
  quote: string;
  name: string;
  position: string;
}

const SecondPage: React.FC = () => {
  return (
    <div className="w-full mx-auto">
      <br />
      <div className="flex items-center justify-between p-8">
        <div className="flex-1">
          <Image
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-800.webp"
            alt="Description of image"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1 pl-8">
          <h2 className="text-2xl font-bold">Free up resources, accelerate growth, and solve for scale.</h2>
          <p className="mt-4 text-gray-600">
            At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing, reliable teams that turn growing pains into efficient pathways to profitability.
          </p>
          <p className="mt-4 text-gray-600">
            Our customized, agile, AI-enabled solutions don’t just deliver cost savings — they also help you achieve key business outcomes.
          </p>
          <p className="mt-4 text-gray-600">
            We work closely with you to continually adjust strategies, realize efficiencies, and drive scale according to your unique needs. Plus, flexibility is baked in from day one, so you’re never locked into rigid, long-term contracts.
          </p>
          <p className="mt-4 text-gray-600">Now that’s outsourcing worth talking about.</p>
        </div>
      </div>

      <div className="flex justify-center items-center justify-between p-8 gap-8">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">Don’t grow it alone</h2>
          <p className="mt-4 text-gray-600">
            Don't let headcount become a headache. We’ll connect you with talent that meets your needs.
          </p>
          <p className="mt-4 text-gray-600">
            Your dedicated new team members will become experts in your world — your customers, your tech, your data, your systems — so they can expand on what you’ve built.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
            alt="Illustration of green plant inside of red and white vase"
            width={75}
            height={75}
            className="rounded-lg"
          />
        </div>
      </div>

      <hr className="my-8 border-t-1 border-gray-300 dark:border-gray-600" />
    </div>
  );
};

export default SecondPage;
