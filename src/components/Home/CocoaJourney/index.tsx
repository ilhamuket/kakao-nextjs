import Image from "next/image";
import { getImagePrefix } from "@/utils/util";

export default function CocoaJourney() {
  const gallerySteps = [
    {
      src: "/images/cocoa/farm.jpg",
      caption: "Cocoa Plantation",
    },
    {
      src: "/images/cocoa/panen.jpg",
      caption: "Cocoa Harvest",
    },
    {
      src: "/images/cocoa/proses.jpg",
      caption: "Chocolate Processing",
    },
    {
      src: "/images/cocoa/coklat.jpg",
      caption: "Chocolate Products",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
            <h2 className="text-4xl font-bold text-midnight_text mb-4">
              From Cocoa to Chocolate
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We process selected cocoa beans from local farmers into high-quality chocolate products. Every step is carried out with love and responsibility.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
              <span className="inline-block w-8 h-8 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold text-xl">🌱</span>
              <span>Sustainable cocoa cultivation</span>
              </li>
              <li className="flex items-start gap-3">
              <span className="inline-block w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-700 font-bold text-xl">🌾</span>
              <span>Harvesting the best quality beans</span>
              </li>
              <li className="flex items-start gap-3">
              <span className="inline-block w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">🏭</span>
              <span>Modern and hygienic production</span>
              </li>
            </ul>
            </div>

          <div className="relative w-full h-[400px]">
            <Image
              src={`images/cocoa/pabrik.jpeg`}
              alt="Cocoa process"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {gallerySteps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-52">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              <p className="mt-2 text-gray-700 text-sm">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
