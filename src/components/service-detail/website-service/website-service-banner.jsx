import { bgBannerWebsiteService } from "../../../assets/img"

const WebsiteServiceBanner = () => {
    return (
        <section className=" lg:mt-12 relative flex flex-col items-center font-plus-jakarta-sans sm:w-full px-6 -mb-6">
            <img className="w-full h-full absolute  object-cover " src={bgBannerWebsiteService} alt="Banner Service Detail" />
            <div className="relative z-20 flex flex-row mt-[100px] gap-5 max-w-[1230px] mx-auto mb-10">
                <div className="max-w-[1050px] h-full relative z-20 text-center md:py-20 py-11 ">
                    <h1 className="text-[38px] font-bold text-[#004073] leading-tight lg:text-[60px]">Unlock Your Digital Potential With Our Expert <span className="text-[#008FFF]"> Website And System Service</span></h1>
                    <p className="leading-loose mt-4 text-[18px] lg:text-[20px]">Elevate Your Online Presence, Streamline Operations, and Drive Results</p>
                    <button className="lg:mt-20 mt-10 btn-blue shadow-3xl rounded-[18px] shadow-blue-400 lg:h-14 lg:w-72">Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default WebsiteServiceBanner