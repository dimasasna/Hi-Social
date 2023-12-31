import { logo1 } from "../../../assets/img"



const ServiceFooter = () => {
    return (
        <section className="px-4 mt-24 mb-12 font-plus-jakarta-sans">
            <div className="w-full h-full  max-w-[1230px] mx-auto">
                <div className="w-full bg-[#2563EB] text-white h-full rounded-[20px] pt-8 pb-12 flex flex-col items-center justify-center flex-wrap">
                    <h1 className="text-[32px] lg:text-[42px]  font-semibold text-center">Subscribe to our newslater</h1>
                    <div className="flex lg:flex-row flex-col mt-8 gap-4 flex-wrap ">
                        <input type="text" className="rounded-[9px] w-[246px] h-[54px] bg-transparent border border-white placeholder:text-white placeholder:pl-4" placeholder="First name"/>
                        <input type="text" className="rounded-[9px] w-[246px] h-[54px] bg-transparent border border-white placeholder:text-white placeholder:pl-4" placeholder="Email address"/>
                        <button className=" lg:w-[263px] h-[54px] bg-black shadow-3xl rounded-[9px] shadow-blue-400 text-[20px] hover:bg-slate-700">Subscribe Now</button>
                    </div>
                </div>

                <div className=" w-full h-full  flex flex-col lg:flex-row mt-12 pb-10 border-b-2">
                    <div className="h-full w-full ">
                        <div className="flex flex-col ">
                            <div className="w-[400px] h-full">
                                <img src={logo1} alt="" />
                                <h1 className="text-[18px] font-normal mt-12">HiSocial Digital gives you ease in learning and improving your skills to become a professional.</h1> 
                            </div>
                            <div className="flex mt-12 gap-2">
                                <div className="w-[40px] h-[40px] border border-black rounded-full"></div>
                                <div className="w-[40px] h-[40px] bg-[#2563EB] rounded-full"></div>
                                <div className="w-[40px] h-[40px] border border-black rounded-full"></div>
                                <div className="w-[40px] h-[40px] border border-black rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-full  mx-auto flex flex-col my-4 lg:my-0">
                        <div className="flex flex-row  ">
                            <div className=" w-full h-full lg:-mr-9">
                                <h1 className="text-[#2563EB] lg:text-[20px] text-[18px] font-semibold mb-8">COMPANY</h1>
                                <div className="font-normal lg:text-[18px] text-[16px]">
                                    <p className="py-1">About</p>
                                    <p className="py-1">Features</p>
                                    <p className="py-1">Works</p>
                                    <p className="py-1">Career</p>
                                </div>
                            </div>
                            <div className=" w-full h-full">
                                <h1 className="text-[#2563EB] lg:text-[20px] text-[18px] font-semibold mb-8">HELP</h1>
                                <div className="font-normal lg:text-[18px] text-[16px]">
                                    <p className="py-1">Customer Suport</p>
                                    <p className="py-1">Delivery Details</p>
                                    <p className="py-1">Terms & Conditions</p>
                                    <p className="py-1">Privacy Policy</p>
                                </div>
                            </div>
                            <div className=" w-full h-full">
                                <h1 className="text-[#2563EB] lg:text-[20px] text-[18px] font-semibold mb-8">RESOURCE</h1>
                                <div className="font-normal lg:text-[18px] text-[16px]">
                                    <p className="py-1">Free Ebooks</p>
                                    <p className="py-1">Development Tutorial</p>
                                    <p className="py-1">How To - Blog</p>
                                    <p className="py-1">Youtube Playlist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" mt-4 flex justify-center font-normal text-[12px] lg:text-[16px]">
                    <h1>© 2022 HISOCIAL DIGITAL, ALL RIGHTS RESERVEDDOWNED BY PT TALENTA SINERGI GROUP</h1>
                </div>
            </div>
        </section>
    )
}

export default ServiceFooter