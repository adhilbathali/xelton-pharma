import Image from "next/image";
import perks from "./contents";

export default function XeltonPerks() {
  return (
    <section className="flex flex-col justify-center items-center py-15 px-6 bg-blue-50">
      {/* Section Heading */}
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Perks of being a <b className="text-blue-600">xelton</b> member
      </h1>

      <div className="space-y-16 w-full max-w-6xl">
        {perks.map((perk, index) => (
          <div
            key={perk.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <Image
              src={perk.image}
              alt={perk.title}
              height={400}
              width={400}
              className="rounded-xl shadow-lg"
            />

            {/* Text Card */}
            <div
              className={`bg-white shadow-md p-10 max-w-md ${
                index % 2 === 0
                  ? "rounded-full rounded-bl-none"
                  : "rounded-full rounded-br-none"
              }`}
            >
              <h2 className="text-2xl font-bold mb-2 text-slate-700">
                {perk.title}
              </h2>
              <p className="text-gray-600">{perk.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
