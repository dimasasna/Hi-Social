import { serviceDetail1, serviceImage1 } from "../../../assets/img"
const BannerServiceDetail = () => {
    return(
        <section className="mt-16 relative flex flex-col items-center font-plus-jakarta-sans">
            <div className="w-full h-[340px] z-10 absolute md:h-[400px] lg:h-[788px]" />
            <img className="w-full absolute" src={serviceDetail1} alt="Banner Service Detail" />
            <div className="relative z-20 grid grid-cols-2 mt-[100px] gap-5  ">
                <div className="w-[672px] h-[500px] ">
                    <h1 className="text-[48px] font-bold text-[#004073]">Elevate Your Brand With Our Expert <span className="text-[#008FFF]">Branding Identity Visual Service</span></h1>
                    <p className="leading-loose mt-4 text-[20px]">we know that a powerful brand identity goes beyond aesthetics; its a strategic asset that defines your business, speaks to your audience, and sets you apart in a crowded market. Were here to partner with you and bring your brand to life.</p>
                    <button className="mt-10 btn-blue shadow-3xl rounded-xl shadow-blue-400 lg:h-14 lg:w-72">Get Started</button>
                </div>
                <div className=" w-[672px] h-[500px] ">
                    <img className=" w-full h-full object-cover" src={serviceImage1} alt="" />
                </div>
            </div>
        </section>
    )
}
export default BannerServiceDetail