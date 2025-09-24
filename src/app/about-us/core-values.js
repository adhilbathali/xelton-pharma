import { corePillars } from "../(home)/contents"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CoreValues(){
    return(
        <section className="flex flex-col justify-center items-center pt-15 bg-blue-50 w-full">
                <div className="flex flex-col gap-10 px-5">
                    <h2 className="text-2xl font-bold mb-2 text-slate-700 text-center">Our Values</h2>
                    {corePillars.map((pillar, index) => (
                        <article key={index} className="flex items-center gap-5 max-md:p-4 hyphens-auto min-md:p-5 text-slate-700 text-lg max-md:rounded-2xl min-md:rounded-full bg-white min-w-1/2 transition-all duration-400 hover:scale-[1.02]">
                            <div className="bg-blue-50 p-5 rounded-full">
                                <FontAwesomeIcon icon={pillar.icon} className="w-10 h-10 text-blue-600 rounded-full"/>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold my-2">{pillar.heading}</h1>
                                <p>{pillar.content}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
    )
}