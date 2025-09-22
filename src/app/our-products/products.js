import Image from "next/image";
import products from "./contents.js"; // adjust path

export default function ProductSection() {
  return (
    <section id="products" className="bg-white py-16 px-6">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
          Our Products
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Explore our range of pharmaceutical solutions designed for quality, safety, and comfort.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-md:px-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl overflow-hidden flex flex-col bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.15)]"
          >
            {/* Product Image */}
            <div className="w-full h-64 relative">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Glassmorphism Content */}
            <div className="p-6 flex flex-col items-center text-center bg-white/30 backdrop-blur-lg rounded-b-2xl">
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-700 text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
