import { imgOffer } from "../../../assets/img"

const ServiceOffer = () => {
    return (
        <section className="mb-6 m-12 z-40">
            <div className="mt-16 text-center w-[789px] mx-auto">
                <h1 className="text-[48px] font-bold text-[#004073]">What We <span className="text-[#008FFF]">Offer?</span></h1>
                <p className="leading-loose mt-2 text-[20px]">We Offer creative design solutions and build branding for our client companies including Logo, branding Strategy and Visual Identity.</p>
            </div>

            <div className=" mt-12 grid grid-cols-2 gap-4 max-w-[1230px] mx-auto">
                <div className="">
                    <img src={imgOffer} alt="offer 1" className="object-cover" />
                </div>
                <div className=" h-[500] grid grid-rows-3 gap-4">
                    <div className="h-[206px] w-[600px] rounded-[20px]  shadow-2xl ">
                        <div className="border-b-2 h-[70px] flex justify-between items-center p-6">
                            <p className="flex text-[20px] items-center font-semibold">Custom Visual Identity</p>
                            <button className=" w-[158px] btn-blue shadow-3xl rounded-full shadow-blue-400 ">Learn More</button>
                        </div>
                        <div className="p-6">
                            <p className="leading-7 font-superlight text-[18px]">We craft unique visual elements, from logos and color palettes to typography and imagery, tailored to your brands personality and message.</p>
                        </div>
                    </div>
                    <div className="h-[206px] w-[600px] rounded-[20px] shadow-2xl">
                        <div className="border-b-2 h-[70px] flex justify-between items-center p-6">
                            <p className="flex text-[20px] items-center font-semibold">Eye-Catching Graphics</p>
                            <button className=" w-[158px] btn-blue shadow-3xl rounded-full shadow-blue-400 ">Learn More</button>
                        </div>
                        <div className="p-6">
                            <p className="leading-7 font-superlight text-[18px]">Our team of talented designers will create stunning visuals that captivate your audience and reinforce your brands story.</p>
                        </div>
                    </div>
                    <div className="h-[206px] w-[600px] rounded-[20px] shadow-2xl">
                        <div className="border-b-2 h-[70px] flex justify-between items-center p-6">
                            <p className="flex text-[20px] items-center font-semibold">Brand Transformation</p>
                            <button className=" w-[158px] btn-blue shadow-3xl rounded-full shadow-blue-400 ">Learn More</button>
                        </div>
                        <div className="p-6">
                            <p className="leading-7 font-superlight text-[18px]">Our Branding Identity Visual Service will empower your brand to soar and leave an indelible mark.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default ServiceOffer