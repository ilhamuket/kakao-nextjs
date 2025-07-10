"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CocoaPartners } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Companies = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-white py-16 border-b border-gray-100">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
        <h2 className="text-2xl font-semibold text-midnight_text mb-8">
          Trusted by global cocoa partners
        </h2>
        <Slider {...settings}>
          {CocoaPartners.map((partner, index) => (
            <div key={index} className="px-6">
              <Image
                src={`${getImagePrefix()}${partner.imgSrc}`}
                alt={`logo-${index}`}
                width={140}
                height={40}
                className="mx-auto grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Companies;
