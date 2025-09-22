import Image from "next/image";

export default function GetInTouch(){
    return(
        <div className="relative w-full max-md:h-100 lg:w-1/2 h-200">
                <Image
                    src='/images/contact/hero.webp'
                    alt="xelton pharma contact"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
    )
}