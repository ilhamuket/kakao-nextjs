"use client";
import { Icon } from "@iconify/react";

const reasons = [
  {
    title: "Sustainably Sourced",
    desc: "We partner with local farmers to grow ethical cocoa.",
    icon: "solar:leaf-bold",
  },
  {
    title: "Single-Origin Beans",
    desc: "Unique flavor profile from one region only.",
    icon: "solar:map-point-bold",
  },
  {
    title: "No Additives",
    desc: "Pure cocoa. No fillers. No junk.",
    icon: "solar:forbidden-circle-bold",
  },
  {
    title: "Rich in Antioxidants",
    desc: "Boost your health with natural flavonoids.",
    icon: "solar:flask-bold",
  },
  {
    title: "Crafted with Love",
    desc: "Every batch is made with attention and care.",
    icon: "solar:heart-bold",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white" id="why-choose-us">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <h2 className="text-4xl font-bold text-midnight_text mb-10 text-center">
          Why Choose Us
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-14">
          Discover what makes our cocoa stand out from the rest.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="bg-[#f9f7f4] p-6 rounded-xl shadow-sm text-center">
              <Icon icon={reason.icon} className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold text-midnight_text mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
