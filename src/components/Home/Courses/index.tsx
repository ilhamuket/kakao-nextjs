"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { cocoaProductData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Courses = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="products" className="bg-[#FDFCF9] py-20">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="sm:flex justify-between items-center mb-16">
          <h2 className="text-midnight_text text-3xl sm:text-4xl font-semibold mb-5 sm:mb-0">
            Our Cocoa Products
          </h2>
          <Link href="/products" className="text-primary text-lg font-medium hover:tracking-widest duration-500">
            View all products &gt;
          </Link>
        </div>

        <Slider {...settings}>
          {cocoaProductData.map((product, i) => (
            <div key={i}>
              <div className="bg-white m-3 mb-12 px-3 pt-3 pb-10 shadow-course-shadow rounded-2xl h-full">
                <div className="relative rounded-3xl">
                  <Image
                    src={`${getImagePrefix()}${product.imgSrc}`}
                    alt={product.title}
                    width={389}
                    height={262}
                    className="rounded-xl object-cover mx-auto"
                  />
                  {product.featured && (
                    <div className="absolute right-5 -bottom-3 bg-secondary rounded-full px-5 py-3">
                      <h3 className="text-white text-sm font-medium text-center uppercase">Popular</h3>
                    </div>
                  )}
                </div>

                <div className="px-3 pt-6">
                  <h3 className="text-xl font-bold text-black mb-2">{product.title}</h3>
                  <p className="text-base text-gray-600 mb-4">{product.description}</p>

                  <div className="flex justify-between text-sm font-medium text-gray-500 border-t pt-4">
                    <div className="flex items-center gap-2">
                      <Icon icon="solar:box-outline" className="text-primary text-lg" />
                      {product.packaging}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon icon="solar:weight-line-duotone" className="text-primary text-lg" />
                      {product.weight}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Courses;
