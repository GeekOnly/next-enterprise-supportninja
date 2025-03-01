"use client";
import Head from "next/head";
import CheckboxSlide from "components/Checkbox/Checkbox";

const checkboxItems = [
  {
    id: "customer-experience-outsourcing",
    name: "Customer Experience",
    value: "customer-experience-outsourcing",
    imageUrl:
      "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/672cd9b56f4a3c4346ff88b7_6728efd16a3b5a8ca8f2a32e_Characer%20Illustration%20Single__Customer-Experience_Square_Filled.svg",
    label: "Customer Experience",
  },
  {
    id: "customer-Support-outsourcing",
    name: "Customer Support",
    value: "customer-support-outsourcing",
    imageUrl:
      "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cd6fece4b65_filled_customer_success.webp",
    label: "Customer Support",
  },
  {
    id: "customer-Customer-outsourcing",
    name: "Technical Customer Support",
    value: "customer-customer-support",
    imageUrl:
      "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c3491ce4b63_filled_technical_support.webp",
    label: "Technical Customer Support",
  },
  {
    id: "customer-Moderation-outsourcing",
    name: "Content Moderation",
    value: "customer-content-moderation",
    imageUrl:
      "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0cce61ce4b6b_filled_content_moderation.webp",
    label: "Content Moderation",
  },
  {
    id: "customer-Processing-outsourcing",
    name: "Data Processing",
    value: "customer-data-processing",
    imageUrl:
      "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/64149f79022d0c1bd3ce4b69_filled_data_processing.webp",
    label: "Data Processing",
  },
  {
    id: "customer-Accounting-outsourcing",
    name: "Finance & Accounting",
    value: "customer-finance-accounting",
    imageUrl:
      "https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/66ab870287012990781761a1_649438d904b97f8a9692a85a_Solution%253DE-mail%2520Support%252C%2520State%253DHover.webp",
    label: "Finance & Accounting",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="bg-primary-custom-pink dark:bg-gray-900 w-full">
        <div className="mx-auto grid w-full px-10 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <p className="mb-6 max-w-xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Quickly and seamlessly scale your team with agile, highly
              customizable outsourcing solutions that power your growth.
            </p>
            <h1 className="mb-7 max-w-xl text-6xl leading-none tracking-tight md:text-6xl xl:text-6xl dark:text-white">
              Outsourcing worth talking about
            </h1>
          </div>
          <hr className="my-8 border-t border-gray-300 dark:border-gray-600" />

          <h4 className="mb-0 font-bold leading-none tracking-tight md:text-xl xl:text-2xl dark:text-white">
            Which outsourcing solutions are you looking for?
          </h4>
          <h4 className="my-6 font-light leading-none tracking-tight md:text-xl xl:text-2xl dark:text-white">
            Choose as many as you need.
          </h4>

          <div className="relative">
            <ul className="flex flex-wrap justify-center gap-5">
              {checkboxItems.map((item) => (
                <CheckboxSlide
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  value={item.value}
                  imageUrl={item.imageUrl}
                  label={item.label}
                />
              ))}
            </ul>
          </div>

          <br />
          <div className="flex justify-center">
            <button
              type="button"
              className="flex justify-center text-white w-30 bg-red-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-base px-25 py-3 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get Started
            </button>
          </div>

          <div className="flex items-center justify-between bg-gray-100 p-4 mb-4">
            <div className="flex-1 text-left">
              <h2 className="text-xs font-light">
                Driving better business results <br /> for 200+ companies.
              </h2>
            </div>
            <div className="flex flex-row space-x-1">
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0380ce484b_B%26MG_foundation.svg"
                alt="BMG Foundation"
                className="w-5 h-auto"
              />
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64f9e7ede9b6df55f6f1a029_Midjourney%20Logo%20(1).svg"
                alt="Midjourney Logo"
                className="w-5 h-auto"
              />
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/65a7f1f93afe1bee1bb429a4_Happy%20Socks%20Logo.svg"
                alt="Happy Socks Logo"
                className="w-15 h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
