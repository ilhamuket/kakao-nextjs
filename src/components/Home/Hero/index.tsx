import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {
    return (
        <section
            id="home-section"
            className="relative h-[90vh] bg-cover bg-center flex items-center"
            style={{
                backgroundImage: "url('/images/banner/banner.png')", // ganti sesuai nama file kamu
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div> {/* overlay gelap untuk kontras */}

            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative z-10">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-4">
                        <Icon
                            icon="solar:verified-check-bold"
                            className="text-green-400 text-xl"
                        />
                        <p className="text-green-400 text-sm font-semibold">
                            Trusted Global Exporter
                        </p>
                    </div>

                    <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight mb-6">
                        Indonesian Cocoa Products for the World
                    </h1>

                    <p className="text-white text-lg mb-8">
                        We deliver premium cocoa beans, powder, and derivatives from Indonesia to international markets with certified quality and sustainable farming practices.
                    </p>

                    <div className="flex flex-wrap gap-4 text-white text-base">
                        <div className="flex items-center gap-2">
                            <Icon icon="tabler:leaf" className="text-green-400" />
                            Sustainable Farming
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon icon="tabler:world" className="text-green-400" />
                            Global Reach
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon icon="tabler:certificate" className="text-green-400" />
                            Certified Quality
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
