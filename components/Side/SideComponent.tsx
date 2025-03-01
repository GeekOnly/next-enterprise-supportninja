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
        nextEl: `.${styles.swiperButtonNext}`,
        prevEl: `.${styles.swiperButtonPrev}`,
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
          <div className={`${styles.swiperButtonPrev} swiper-button-prev`} />
          <div className={`${styles.swiperButtonNext} swiper-button-next`} />
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
