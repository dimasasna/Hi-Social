import { logoColaborate1, logoColaborate2, logoColaborate3, logoColaborate4 } from "../../../assets/img/index"

const ServiceColaborate = () => {
    return (
        <section className="bg-[#004073] h-full ">
            <div className="text-white text-center w-full">
                <h1 className="pt-14 pb-10 text-[18px] lg:text-[22px] font-light">We Have Collaborated With Companies And Educational Agencies.</h1>
            </div>
            <div className="container mx-auto pb-12">
                <div className="flex flex-row max-w-[1230px] justify-center items-center mx-auto gap-16 flex-wrap">
                    <div className="flex justify-end items-center ">
                        <img className="" src={logoColaborate3} alt="" />
                    </div>
                    <div className="">
                        <img src={logoColaborate2} alt="" />
                    </div>
                    <div className="">
                        <img className="w-36" src={logoColaborate1} alt="" />
                    </div>
                    <div className="">
                        <img className="w-36" src={logoColaborate4} alt="" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ServiceColaborate