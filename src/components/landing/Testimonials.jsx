"use client"
import * as React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "I love to craft functional solutions for unique problems. These are some skills I've picked up over my career.",
      author: "Najmul Hasan",
      role: "CEO",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8db50c6571aecfa7784232a695190b0185d98ef88bd42bfa1b76276c3583c37?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12"
    },
    {
      id: 2,
      quote: "Working with this team has transformed our digital presence completely. Their expertise is unmatched.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8db50c6571aecfa7784232a695190b0185d98ef88bd42bfa1b76276c3583c37?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12"
    },
    {
      id: 3,
      quote: "The attention to detail and technical excellence delivered by this team exceeded our expectations.",
      author: "Michael Chen",
      role: "CTO",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8db50c6571aecfa7784232a695190b0185d98ef88bd42bfa1b76276c3583c37?placeholderIfAbsent=true&apiKey=2460baf06a544f9d9f86d4b097120e12"
    }
  ];

  return (
    <div className="flex flex-col justify-center py-8 lg:py-20 pr-24 pl-24 w-full max-lg:px-5 max-lg:max-w-full">
      <div className="flex flex-col w-full max-lg:max-w-full">
        <div className="flex flex-col self-center max-w-full text-center text-white w-[548px]">
          <h2 className="gap-2.5 self-stretch p-2.5 w-full text-3xl font-semibold whitespace-nowrap min-h-[59px] max-lg:max-w-full">
            Testimonials
          </h2>
          <p className="self-center mt-5 text-base font-medium max-lg:max-w-full">
            What our clients says about us
          </p>
        </div>

        <div className="mt-10 w-full container mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            className="testimonials-swiper rounded-2xl border border-solid border-amber-300 border-opacity-40"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col justify-center pt-10 pb-[6.5rem] pr-9 pl-10 max-lg:px-5">
                  <div className="flex lg:flex-row flex-col gap-10 items-center">
                    <img
                      loading="lazy"
                      src={testimonial.image}
                      alt={`${testimonial.author}'s testimonial`}
                      className="object-contain self-stretch my-auto rounded-none aspect-[1.73] min-w-[240px] w-[597px] max-lg:max-w-full"
                    />
                    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[536px] max-lg:max-w-full">
                      <blockquote className="text-3xl font-medium tracking-wider leading-8 text-neutral-200 max-lg:max-w-full">
                        {testimonial.quote}
                      </blockquote>
                      <div className="flex flex-col mt-20 max-w-full font-semibold rounded-none w-[163px] max-lg:mt-10">
                        <div className="flex gap-1.5 text-xl text-neutral-200">
                          <div className="shrink-0 my-auto w-3 h-px border border-solid bg-neutral-200 border-neutral-200" />
                          <div className="grow shrink w-[143px]">
                            {testimonial.author}
                          </div>
                        </div>
                        <div className="self-start mt-2.5 ml-5 text-xs text-neutral-400 max-lg:ml-2.5">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev !bg-transparent !text-amber-300 !top-[90%] !left-[32%] lg:!left-[45%] after:!content-none">
              <svg width="18" height="8" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4668 6H1.4668M1.4668 6L6.4668 11M1.4668 6L6.4668 1" stroke="#F9D342" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
            <div className="swiper-button-next !bg-transparent !text-amber-300 !top-[90%] !right-[32%] lg:!right-[45%] after:!content-none">
              <svg width="18" height="8" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.4668 6H19.4668M19.4668 6L14.4668 1M19.4668 6L14.4668 11" stroke="#F9D342" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}