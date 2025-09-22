import Image from "next/image"

export default function MissionVision(){
    return(
        <div className="flex flex-col justify-center items-center gap-8 py-15 px-4 text-slate-700">
            <div className="flex flex-col md:flex-row items-center">
                <div className="bg-white shadow-md max-md:rounded-t-2xl min-md:rounded-full min-md:rounded-br-none w-fit flex flex-col h-fit max-md:p-5 min-md:p-15 ">
                    <h2 className="text-2xl font-bold mb-2 text-slate-600">Our Mission</h2>
                    <p>To provide high-quality, affordable pharmaceutical products to improve health and wellbeing across India.</p>
                </div>
                <Image
                    src='/images/about/mission.jpg'
                    alt="xelton mission"
                    height={400}
                    width={400}
                    className="rounded-xl"
                 />

            </div>
            <div className="flex flex-col md:flex-row items-center">
                <Image
                    src='/images/about/vision.jpg'
                    alt="xelton mission"
                    height={400}
                    width={400}
                    className="rounded-xl"
                 />
                <div className=" bg-white shadow-md flex flex-col h-fit max-md:p-5 min-md:p-15 min-md:rounded-full max-md:rounded-b-2xl min-md:rounded-bl-none">
                    <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
                    <p>To become a trusted name in healthcare, known for innovation, safety, and excellence.</p>
                </div>
            </div>
        </div>
    )
}