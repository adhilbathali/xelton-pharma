import ContactForm from "./contactForm";
import GetInTouch from "./getInTouch";
import ContactHero from "./Hero";

export default function ContactPage(){
    return(
        <div className="bg-[#f5f5f5]">
            <ContactHero />
            <main className="flex flex-col justify-between bg-[#f5f5f5] lg:flex-row">
                <ContactForm />
                <GetInTouch />
            </main>
        </div>
    )
}