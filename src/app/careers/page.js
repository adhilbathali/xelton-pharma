import XeltonPerks from "./perks"
import Image from "next/image"
export default function CareerPage(){
    return(
        <>
            <main className=" relative h-screen w-full flex flex-col md:flex-row justify-center items-center">
                {/* Background image */}
                <Image
                    src="/images/careers/hero.jpg"
                    alt="Laboratory Research"
                    fill
                    style={{ objectFit: "cover", objectPosition: 'center' }}
                    className="absolute inset-0"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <div className="flex flex-col justify-center items-center md:w-1/2 pt-25">
                        <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Xelton Family</h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-center">Join us in building a healthier tomorrow.</h2>
                    </div>
                    <div className="bg-white/30 md:w-1/2 max-md:w-3/4 backdrop-blur-md flex justify-center items-center text-center rounded-xl mt-20 p-5">
                        <p className="text-lg md:text-xl">At <b>Xelton</b> Pharma, we believe in innovation, collaboration, and purpose-driven work. We are committed to creating a supportive environment where talent thrives and ideas make an impact on healthcare.</p>
                    </div>
                </div>
            </main>
            <XeltonPerks />
        </>
    )
}