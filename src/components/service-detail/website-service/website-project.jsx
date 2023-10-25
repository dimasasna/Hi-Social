import { iconsOffer,  websiteOffer1, websiteOffer2, websiteOffer3, websiteOffer4, websiteOffer5 } from "../../../assets/img"

const WebsiteProject = () => {
    return (
        <section className="mx-4 h-full lg:mt-20 mt-12 font-plus-jakarta-sans">
            <div className=" h-full max-w-[1230px] mx-auto">
                <div className="flex flex-row flex-wrap max-w-full justify-center lg:justify-between">
                    <div className="max-w-[789px] ">
                        <h1 className="text-[32px] px-2 lg:text-[50px] font-bold">What Do You Need?</h1>
                    </div>
                    <div className="flex max-w-full flex-wrap items-center mt-2 md:mt-0 lg:px-0">
                        <button className=" m-2 lg:w-[150px] w-full btn-blue shadow-3xl rounded-full shadow-blue-400 text-[16px]">Website & Apps</button>
                        <button className="m-2 lg:w-[170px] w-full btn-white border border-slate-500 shadow-3xl rounded-full shadow-blue-400 font-light  text-[16px]">Company Profile</button>
                        <button className="m-2 lg:w-[150px] w-full btn-white border border-slate-500 shadow-3xl rounded-full shadow-blue-400 font-light text-[16px]">Marketplace</button>
                    </div>
                </div>
                <div className="h-full mt-2 md:mt-10 flex flex-wrap  justify-center items-center gap-4">
                    <div className=" border w-[395px] h-full bg-white rounded-[20px] shadow-xl">
                        <div>
                            <img src={websiteOffer1} alt="Service Project 1" />
                        </div>
                        <div className="flex justify-end h-12 pr-4 mb-2 items-center">
                            <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                            <h2 className="cursor-pointer"><img src={iconsOffer} alt="" /></h2>
                        </div>
                    </div>
                    <div className=" w-[395px] h-full bg-white rounded-[20px] shadow-xl">
                        <div>
                            <img src={websiteOffer2} alt="Service Project 2" />
                        </div>
                        <div className="flex justify-end h-12 pr-4 mb-2 items-center">
                            <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                            <h2 className="cursor-pointer"><img src={iconsOffer} alt="" /></h2>
                        </div>
                    </div>
                    <div className="w-[395px] h-full bg-white rounded-[20px] shadow-xl">
                        <div>
                            <img src={websiteOffer3} alt="Service Project 3" />
                        </div>
                        <div className="flex justify-end h-12 pr-4 mb-2 items-center">
                            <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                            <h2 className="cursor-pointer"><img src={iconsOffer} alt="" /></h2>
                        </div>
                    </div>
                    <div className="w-[395px] h-full bg-white rounded-[20px] shadow-xl">
                        <div>
                            <img src={websiteOffer4} alt="Service Project 4" />
                        </div>
                        <div className="flex justify-end h-12 pr-4 mb-2 items-center">
                            <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                            <h2 className="cursor-pointer"><img src={iconsOffer} alt="" /></h2>
                        </div>
                    </div>
                    <div className="w-[395px] h-full bg-white rounded-[20px] shadow-xl">
                        <div>
                            <img src={websiteOffer5} alt="Service Project 5" />
                        </div>
                        <div className="flex justify-end h-12 pr-4 mb-2 items-center">
                            <h1 className="font-bold text-[20px] mr-4">Flower Farm</h1>
                            <h2 className="cursor-pointer"><img src={iconsOffer} alt="" /></h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WebsiteProject