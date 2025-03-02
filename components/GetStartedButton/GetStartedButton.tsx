"use client";
import Link from "next/link";

const GetStartedButton = ({ size = "w-60 h-16", rightItem="pl-8" }: { size?: string , rightItem?: string}) => {
  return (
    <Link
      id="get-started-footer"
      href="/get-started"
      className={`group flex items-center gap-2 rounded-full px-6 py-3 ${size} bg-red-400   font-semibold text-white transition-all duration-300 hover:bg-black`}
    >
      <span className="transition-all text-xl duration-300">Get started</span>
      <div className={`flex  items-start ${rightItem}`}>
      <div className="relative flex h-10 w-10 text-red-600 items-center justify-center overflow-hidden rounded-full bg-white transition-all duration-300 group-hover:text-black">
        {/* ลูกศรปกติ */}
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute text-[var(--clr)] translate-x-0 transition-transform duration-300 group-hover:translate-x-15`}
        >
          <path
            d="M11.4405 5.292L6.4085 0.268L5.2085 1.46L8.2005 4.452H0.7605V6.116H8.2005L5.2085 9.108L6.4085 10.308L11.4405 5.292Z"
            fill="currentColor"
          />
        </svg>

        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute text-[var(--clr)] -translate-x-15 transition-transform duration-300 group-hover:translate-x-0`}
        >
          <path
            d="M11.4405 5.292L6.4085 0.268L5.2085 1.46L8.2005 4.452H0.7605V6.116H8.2005L5.2085 9.108L6.4085 10.308L11.4405 5.292Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
    </Link>
  );
};

export default GetStartedButton;
