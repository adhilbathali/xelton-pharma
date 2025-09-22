import Hero from "./Hero"
import About from "./About"
import ProductCategories from "./ProductCategories"

// #F8FAFC

export default function Home(){
    return(
        <div className="overflow-x-hidden">
            <Hero />
            <About className='flex flex-col items-center justify-center bg-[#f5f5f5] p-5' />
            <ProductCategories />
        </div>
    )
}