import { logoColaborate1, logoColaborate2, logoColaborate3, logoColaborate4 } from "../../../assets/img/index"

const ServiceColaborate = ({t}) => {
    return (
        <section className="bg-[#004073] h-[240px] relative">
            <div className="text-white text-center w-full">
                <h1 className="pt-14 pb-10 text-[20px] font-thin">{t("ServiceDetail.collaborate.detail")}</h1>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                    <div className="flex justify-end items-center ">
                        <img src={logoColaborate3} alt="" />
                    </div>
                    <div className="flex justify-center pl-20 items-center ">
                        <img src={logoColaborate2} alt="" />
                    </div>
                    <div className="flex justify-center pr-20 items-center">
                        <img src={logoColaborate1} alt="" />
                    </div>
                    <div className="flex justify-start items-center ">
                        <img src={logoColaborate4} alt="" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ServiceColaborate