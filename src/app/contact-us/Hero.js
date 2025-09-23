"use client";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center px-10 pt-25">
      {/* Background Image */}
      <Image
        src="/images/contact/header.jpg" // your image path in /public folder
        alt="Contact Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white max-md:pt-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg sm:text-xl mb-12">
          Have a question about our products or services, or want to discuss a potential collaboration? Reach out and our team will respond promptly.
        </p>

        {/* Contact Info */}
        <div className="grid min-lg:grid-cols-3 max-md:grid-cols-1 max-md:grid-rows-3 gap-8">
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2 text-blue-100">Email</h2>
            <p>xeltonpharma@gmail.com</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2 text-blue-100">Phone</h2>
            <p>+91 43543543</p>
          </div>
          <div className="bg-white/20 backdrop-blur-md p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2 text-blue-100">Location</h2>
            <p>Ernakulam, India</p>
          </div>
        </div>

        <hr className="border-t border-white/50 mt-12" />
      </div>
    </section>
  );
}
