import Image from "next/image";
import { productCategories } from "./contents";

export default function ProductCategories() {
  return (
    <div className="flex flex-col justify-center items-center p-5 pt-10 lg:p-20 lg:min-h-screen">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-700 mb-10 text-center">
        Heal with Our Therapeutics
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {productCategories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer group"
          >
            {/* Optimized Image */}
            <Image
              src={category.image}
              alt={category.title}
              width={500}       // adjust as needed
              height={288}      // adjust as needed
              className="w-full h-72 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-36 bg-black/40 backdrop-blur-sm text-white p-5 flex flex-col justify-end rounded-b-2xl">
              <h1 className="text-xl sm:text-2xl font-bold">{category.title}</h1>
              <p className="text-sm sm:text-base line-clamp-2">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
