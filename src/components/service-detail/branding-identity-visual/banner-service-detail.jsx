import { serviceDetail1, serviceImage1 } from "../../../assets/img"
const BannerServiceDetail = () => {
    return (
        <section className="mt-10 lg:mt-16  relative flex flex-col items-center font-plus-jakarta-sans sm:w-full px-6">
            <img className="w-full h-full absolute" src={serviceDetail1} alt="Banner Service Detail" />
            <div className="relative z-20 flex flex-row mt-[100px] gap-5 max-w-[1230px] mx-auto mb-10">
                <div className="w-full h-full ">
                    <h1 className="text-[38px] font-bold text-[#004073]  lg:text-[42px]">Elevate Your Brand With Our Expert<span className="text-[#008FFF]"> Branding Identity Visual Service</span></h1>
                    <p className="leading-loose mt-4 text-[18px] lg:text-[20px]">we know that a powerful brand identity goes beyond aesthetics; it&apos;s a strategic asset that defines your business, speaks to your audience, and sets you apart in a crowded market. We&apos;re here to partner with you and bring your brand to life.</p>
                    <button className="mt-10 btn-blue shadow-3xl rounded-xl shadow-blue-400 lg:h-14 lg:w-72">Get Started</button>
                </div>
                <div className="h-full w-full ml-10 hidden lg:block">
                    <img className="object-cover  " src={serviceImage1} alt="" />
                </div>
            </div>
        </section>

    )
}
export default BannerServiceDetail