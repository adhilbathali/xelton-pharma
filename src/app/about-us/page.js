import Image from "next/image";
import MissionVision from "./mission-vision";
import CoreValues from "./core-values";
import Quote from "./quote";

export default function Hero() {
  return (
    <main>
        <div className="relative w-full h-screen pt-25">
          {/* Background Image */}
          <Image
            src="/images/about/about_hero.jpg" // Make sure the path is correct in public/images
            alt="Laboratory Research"
            fill // Correct usage instead of layout="fill"
            style={{ objectFit: "cover", objectPosition: "center" }} // fit & position
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-15 mt-25">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Building a Healthier India
            </h1>
            <div className="bg-white/30 backdrop-blur-md lg:w-1/2 flex p-10 rounded-xl">
                <p className="text-lg md:text-xl text-white">
                    Xelton Pharma was founded with the vision to revolutionize healthcare in India. Based in Mumbai, we are dedicated to bringing innovative and high-quality pharmaceutical products to the Indian market. Though new, our team is driven by experience, expertise, and a passion for improving lives.
                </p>
            </div>

          </div>
        </div>
        <MissionVision />
        <CoreValues />
        <Quote />
    </main>
  );
}
