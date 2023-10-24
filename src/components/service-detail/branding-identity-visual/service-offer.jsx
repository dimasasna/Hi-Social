import { imgOffer } from "../../../assets/img"

const ServiceOffer = () => {
    return (
        <section className="mb-6 md:m-12 z-40 px-4 font-plus-jakarta-sans">
            <div className="mt-16 text-center max-w-[789px] mx-auto">
                <h1 className="text-[38px] lg:text-[42px] font-bold text-[#004073]">What We <span className="text-[#008FFF]">Offer?</span></h1>
                <p className="leading-loose mt-2 text-[16px] lg:text-[22px]">We Offer creative design solutions and build branding for our client companies including Logo, branding Strategy and Visual Identity.</p>
            </div>

            <div className="h-full mt-12 flex flex-row gap-2 max-w-[1230px] mx-auto">
                <div className="w-full -ml-4 hidden lg:block">
                    <img src={imgOffer} alt="offer 1" className=" w-full h-full" />
                </div>
                <div className="w-full flex flex-col fex-wrap gap-9 justify-center items-center">
                    <div className="h-[246px] max-w-[600px] rounded-[20px] shadow-2xl">
                        <div className="border-b-2 h-[70px] flex justify-between items-center p-6">
                            <p className="flex text-[16px] lg:text-[20px] items-center font-semibold">Custom Visual Identity</p>
                            <button className=" w-[158px] btn-blue shadow-3xl rounded-full shadow-blue-400 ">Learn More</button>
                        </div>
                        <div className="p-6">
                            <p className="leading-7 text-[15px]  lg:text-[18px]">We craft unique visual elements, from logos and color palettes to typography and imagery, tailored to your brands personality and message.</p>
                        </div>
                    </div>
                    <div className="h-[246px] max-w-[600px] rounded-[20px] shadow-2xl">
                        <div className="border-b-2 h-[70px] flex justify-between items-center p-6">
                            <p className="flex text-[16px] lg:text-[20px] items-center font-semibold">Eye-Catching Graphics</p>
                            <button className=" w-[158px] btn-blue shadow-3xl rounded-full shadow-blue-400 ">Learn More</button>
                        </div>
                        <div className="p-6">
                            <p className="leading-7 text-[16px]  lg:text-[18px]">Our team of talented designers will create stunning visuals that captivate your audience and reinforce your brands story.</p>
                        </div>
                    </div>
                    <div className="h-[246px] max-w-[600px] rounded-[20px] shadow-2xl">
                        <div className="border-b-2 h-[70px] flex justify-between items-center p-6">
                            <p className="flex text-[16px] lg:text-[20px] items-center font-semibold">Brand Transformation</p>
                            <button className=" w-[158px] btn-blue shadow-3xl rounded-full shadow-blue-400 ">Learn More</button>
                        </div>
                        <div className="p-6">
                            <p className="leading-7 text-[16px]  lg:text-[18px]">Our Branding Identity Visual Service will empower your brand to soar and leave an indelible mark.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default ServiceOffer