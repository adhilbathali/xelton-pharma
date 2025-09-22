import styles from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faArrowRightArrowLeft, faArrowRightFromBracket, faArrowRightFromFile, faArrowRightRotate, faArrowRightToBracket, faEnvelope, faLocation, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight"

export default function Footer(){
    return(
        <footer className="footer p-5 pl-10 lg:p-20 pb-10 bg-gradient-to-br from-[royalblue] to-[#5172d4] text-white">
            <div className="flex flex-col lg:flex-row gap-10 justify-around items-start">
                <div className="max-w-[500px] mt-5 lg:mt-0 flex flex-col justify-around items-start">
                    <div className="flex justify-around items-center">
                        <img src="/xelton_white.png" alt="xelton" className="h-[100px] lg:h-[150px]" />
                        <p>Xelton Pharma delivers safe, high-quality pharmaceutical products across India, focused on innovation and reliability.</p>
                    </div>
                </div>
                <div>
                    <h1 className="text-[20px] font-bold mb-[10px]">Quick Links</h1>
                    <ul className="py-[5px] px-[8px]">
                        <li className="mb-[12px]">About Us</li>
                        <li className="mb-[12px]">Our Products</li>
                        <li className="mb-[12px]">Careers</li>
                        <li className="mb-[12px]">Contact</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-[20px] font-bold mb-[10px]">Products</h1>
                    <ul className="py-[5px] px-[8px]">
                    <li className="mb-[12px]">Moxifloxacin Eye Drops</li>
<li className="mb-[12px]">Carmellose 0.5%</li>
<li className="mb-[12px]">Carmellose 1.0%</li>
<li className="mb-[12px]">Olopatadine Solution</li>
<li className="mb-[12px]">Moxifloxacin & Loteprednol</li>
<li className="mb-[12px]">Sodium Hyaluronate 0.18%</li>
<li className="mb-[12px]">Nepafenac 0.3%</li>

                    </ul>
                </div>
                <div>
                    <h1 className="text-[20px] font-bold mb-[10px]">Contact</h1>
                    <ul className="py-[5px] px-[8px]">
                        <li className="mb-[12px] flex items-center"><FontAwesomeIcon className='mr-2 w-5 h-5' icon={faEnvelope}/>abc@xelton.com</li>
                        <li className="mb-[12px] flex items-center"><FontAwesomeIcon className='mr-2 w-5 h-5' icon={faLocationDot}/>Address abc street</li>
                        <li className="mb-[12px] flex items-center"><FontAwesomeIcon className='mr-2 w-5 h-5' icon={faPhone}/>+91 1234567890</li>
                    </ul>
                </div>
            </div>
            <hr className="my-[3rem]" />
            <div className="flex flex-col justify-center items-center text-center">
                <div className="flex mb-10 gap-10">
                    <FontAwesomeIcon className='mr-2 h-10 w-10' icon={faWhatsapp}/>
                    <FontAwesomeIcon className='mr-2 h-10 w-10' icon={faFacebook}/>
                    <FontAwesomeIcon className='mr-2 h-10 w-10' icon={faInstagram}/>
                    <FontAwesomeIcon className='mr-2 h-10 w-10' icon={faYoutube}/>
                </div>
                <p>&#169; 2025 xelton. All Rights Reserved.</p>
            </div>
        </footer>
    )
}