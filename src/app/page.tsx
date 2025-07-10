import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
import CocoaJourney from "@/components/Home/CocoaJourney"; 
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Testimonial from "@/components/Home/Testimonials";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "eLearning",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Courses />
      <CocoaJourney />  
      <WhyChooseUs />   
      <Testimonial />
    </main>
  );
}