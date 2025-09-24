// components/HeroSection.jsx
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-400 to-blue-900 min-h-[500px] flex items-center justify-center overflow-hidden max-md:pt-10">
      {/* Background wave/shape - You might replace this with an actual SVG or more complex design */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white transform -skew-y-3 origin-bottom-left md:h-2/3 lg:h-3/4"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Image/Products */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-0">
          {/* Using a placeholder image, you'd replace this with your actual product image */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
            {/* For a more accurate depiction, you might want to create an SVG of the basket with items or use a transparent PNG */}
            {/* For now, let's use a placeholder that hints at the content */}
            <Image
              src="/images/products/hero.png" // Replace with your image path
              alt="Pharmacy products in a shopping basket"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left max-md:-mt-10 min-md:p-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4 uppercase tracking-widest">
            Xelton Pharma
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
          Delivering high-quality pharmaceutical solutions trusted by healthcare professionals across India.          </p>
          <Link
  href="#products"
  scroll={true}
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out shadow-lg inline-block"
>
  See More
</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;