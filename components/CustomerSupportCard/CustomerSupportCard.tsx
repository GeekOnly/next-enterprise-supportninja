import Image from 'next/image';

const CustomerSupportCard = () => {
  return (
    <a
      href="/solutions/customer-support-outsourcing"
      className="icon-grid-block w-95 h-64 flex items-center justify-between p-4  transition duration-300 ease-in-out"
    >
      {/* ไอคอน */}
      <div className="flex justify-center mb-40"> 
        <Image
          src="https://cdn.prod.website-files.com/64149f79022d0c3ed8ce46e9/6734db6b63d29b612d1a8d19_Icons_Customer-Support.svg"
          alt="Customer Support Icon"
          width={125}
          height={125}
          className="main-icon"
        />
      </div>

      {/* เนื้อหาด้านใน */}
      <div className="flex flex-col ml-4 justify-center">
        <h3 className="text-2xl font-semibold">Customer Support</h3>
        <br />
        <p className="text-gray-600 text-base md:block hidden">
          Transform every interaction into a positive experience with customer-centric support that scales as you grow.
        </p>
        <br />
        {/* ลูกศร */}
        <div className="flex items-start mt-1">
          <span className="text-gray-800 font-bold text-lg">Explore Customer Support</span>
          <div className="arrow-icon ml-2 transform transition-transform duration-300">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.51 6.605L6.822 0.916999L5.076 2.654L7.83 5.408H0.657V7.784H7.83L5.076 10.547L6.822 12.293L12.51 6.605Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CustomerSupportCard;
