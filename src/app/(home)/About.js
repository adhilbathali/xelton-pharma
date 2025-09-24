import Link from "next/link";
import Image from "next/image";

export default function About(props) {
  const { className } = props;

  return (
    <div
      className={`${className} relative flex flex-col items-center justify-center min-h-screen max-md:p-5 min-md:p-10 bg-gradient-to-br from-blue-50 to-white overflow-hidden`}
    >
      {/* Top floating PNG */}
      {/* <Image
        src="/images/home/top-floating.png"
        alt="Floating top"
        width={240}
        height={240}
        className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      /> */}

      {/* Bottom doctor/patient PNG */}
      <Image
        src="/images/home/home-about.png"
        alt="Doctor"
        width={800} // adjust width
        height={600} // adjust height
        className="lg:block absolute bottom-0 right-0"
      />

      {/* Optional abstract background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 hidden lg:block"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 hidden lg:block"></div>

      {/* Content */}
      <div className="z-10 bg-white/40 max-md:bg-white/50 flex flex-col justify-center items-center max-md:p-5 min-md:p-10 rounded-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 text-center mb-6">
          Pioneering Better Health
        </h1>
        <p className="text-slate-800 max-w-[900px] text-center text-lg sm:text-xl leading-relaxed mb-8">
          <b>Xelton</b> is an innovation-driven pharmaceutical company dedicated to transforming healthcare worldwide. Combining cutting-edge research with advanced manufacturing, we develop high-quality medicines that address critical health needs across multiple countries.
          <br /><br />
          As an emerging global leader, Xelton focuses on excellence, compliance, and patient-centric solutions, striving to improve health outcomes and create a positive impact on communities everywhere.
        </p>

        <Link
          href="/about-us"
          className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 transition-all duration-500"
        >
          Know More
        </Link>
      </div>
    </div>
  );
}
