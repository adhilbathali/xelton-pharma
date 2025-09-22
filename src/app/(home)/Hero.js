import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Hero(){
    return(
        <main className="overflow-x-hidden pt-25 max-md:pt-10 h-screen w-screen bg-gradient-to-br from-blue-900 to-blue-400 flex flex-col min-lg:flex-row max-lg:items-end max-lg:justify-end justify-center items-center overflow-hid">
            <div className="min-lg:w-1/2 flex flex-col justify-center min-md:p-10 text-center">
                <div className="flex flex-col gap-5 p-5 max-md:items-center w-full text">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">Advancing Healthcare, One Innovation at a Time</h1>
                    <h2 className="text-white text-lg sm:text-xl md:xl lg:text-2xl">Delivering safe, reliable, and innovative pharmaceutical solutions for a healthier tomorrow.</h2>
                </div>
                {/* Buttons */}
                <div className="flex w-full max-md:justify-center justify-center gap-4 sm:gap-6 mt-6 px-5">
                    <Link href='/our-products' className="text-white text-lg sm:text-xl font-bold bg-violet-700 py-2 px-6 rounded-full hover:bg-violet-600 transition">
                    Products
                    </Link>
                    <Link href='/careers' className="flex justify-center items-center text-white text-lg sm:text-xl font-bold border border-white py-2 px-6 rounded-full hover:bg-white hover:text-blue-600 transition">
                    Join
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-5" />
                    </Link>
                </div>
            </div>
            <div className="max-md:h-1/2 h-full w-full min-lg:w-1/2 flex max-md:justify-end min-md:justify-center items-end">
                <div className="relative w-full max-lg:h-full min-lg:h-3/4">
                    <Image
                        src='/images/home/hero1.png'
                        alt="Xelton pharma suggests"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </main>
    )
}