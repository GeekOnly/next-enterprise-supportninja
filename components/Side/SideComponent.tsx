"use client";
import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./SecondPage.module.css";

const testimonials = [
  {
    quote:
      "SupportNinja is really responsive and flexible based on our needs. But what we’re really, really happy about is the Ninjas and their commitment to the brand. They’re like an extension of our team!",
    name: "Sudip Dasgupta",
    position: "Head of Customer Experience, Product Madness",
  },
  {
    quote:
      "Our partnership with SupportNinja has helped meet client demands we couldn’t handle internally. They have also given us great referrals with a much shorter sales cycle than we typically see.",
    name: "Michael Hanson",
    position: "VP Growth, CloudTask",
  },
  {
    quote:
      "I love the communication that we have with management, especially when we need to address something. It gets handled really quickly! Beyond this, I get great support, they're reliable and they get the job done.",
    name: "Lorna Quijano",
    position: "Full Service Manager, RedWeek",
  },
  {
    quote:
      "SupportNinja has really been flexible with us as we’re growing the business, and have been really responsive and accommodating. They’ve been integral to helping our business grow.",
    name: "Pam Schwab",
    position: "VP of Quality & Customer Care, SymmetryRx",
  },
];

const SliderCard: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
      },
      pagination: {
        el: `.${styles.swiperPagination}`,
        clickable: true,
      },
      preventClicks: true,
      preventClicksPropagation: true,
      observer: true,
      observeParents: true,
    });

    swiperInstanceRef.current = swiper;

    return () => {
      if (swiperInstanceRef.current) {
        swiperInstanceRef.current.destroy(true, true);
      }
    };
  }, []);

  return (
    
    <div className="relative w-full max-h-[1500px] flex justify-center items-center ">
        
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center z-0 blur-lg" />
      

      {/* Swiper Container - อยู่ตรงกลางจริง ๆ */}
      <div className="relative max-w-7xl max-h-412 flex justify-center items-center z-10 bg-[#F7E1D2] p-4 rounded-2xl">
        
        <div ref={swiperRef} className="swiper w-full ">
        <br/>
        <br/>
          <div className="swiper-wrapper ">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide flex justify-center">
                <div className="max-w-250 w-full mx-auto text-center bg-opacity-80 rounded-lg  p-6">
                  <blockquote className="text-2xl italic text-gray-700 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <br />
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
                <br/>
                <br/>
              </div>
              
            ))}
          </div>

          {/* Pagination & Navigation */}
          <div className={`${styles.swiperPagination} swiper-pagination`} />

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2 justify-end">
            {/* ปุ่มก่อนหน้า */}
            
            <button
              className="custom-swiper-button-prev slider-button flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full transition"
              aria-label="Previous slide"
            >
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5525 5.292L5.5845 10.308L6.7845 9.124L3.8005 6.132H11.2325V4.468H3.8005L6.7845 1.476L5.5845 0.268L0.5525 5.292Z"
                  fill="white"
                />
              </svg>
            </button>          

            {/* ปุ่มถัดไป */}
            <button
              className="custom-swiper-button-next slider-button flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full transition"
              aria-label="Next slide"
            >
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4405 5.292L6.4085 0.268L5.2085 1.46L8.2005 4.452H0.7605V6.116H8.2005L5.2085 9.108L6.4085 10.308L11.4405 5.292Z"
                  fill="white"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
