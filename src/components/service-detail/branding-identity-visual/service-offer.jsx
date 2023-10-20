import { imgOffer } from "../../../assets/img"

const ServiceOffer = ({t}) => {
    return (
        <section className="mb-6 m-12 z-40">
            <div className="mt-16 text-center w-[789px] mx-auto">
                <h1 className="text-[48px] font-bold text-[#004073]">{t("ServiceDetail.offer.title1")}<span className="text-[#008FFF]">{t("ServiceDetail.offer.title2")}</span></h1>
                <p className="leading-loose mt-2 text-[20px]">{t("ServiceDetail.offer.detail")}.</p>
            </div>

            <div className=" mt-12 grid grid-cols-2 gap-4 max-w-[1230px] mx-auto">
                <div className="">
                    <img src={imgOffer} alt="offer 1" className="object-cover" />
                </div>
                <div className=" h-[500] grid grid-rows-3 gap-4">
                    <div className="h-[206px] w-[600px] rounded-[20px]  shadow-2xl ">
                        <div className="border-b-2 h-[70px] flex justify-between items-center p-6">
                            <p className="flex text-[20px] items-center font-semibold">{t("ServiceDetail.offer.brand.title1")}</p>
                            <button className=" w-[158px] btn-blue shadow-3xl rounded-full shadow-blue-400 ">{t("ServiceDetail.offer.button")}</button>
                        </div>
                        <div className="p-6">
                            <p className="leading-7 font-superlight text-[18px]">{t("ServiceDetail.offer.brand.detail1")}</p>
                        </div>
                    </div>
                    <div className="h-[206px] w-[600px] rounded-[20px] shadow-2xl">
                        <div className="border-b-2 h-[70px] flex justify-between items-center p-6">
                            <p className="flex text-[20px] items-center font-semibold">{t("ServiceDetail.offer.brand.title2")}</p>
                            <button className=" w-[158px] btn-blue shadow-3xl rounded-full shadow-blue-400 ">{t("ServiceDetail.offer.button")}</button>
                        </div>
                        <div className="p-6">
                            <p className="leading-7 font-superlight text-[18px]">{t("ServiceDetail.offer.brand.detail2")}</p>
                        </div>
                    </div>
                    <div className="h-[206px] w-[600px] rounded-[20px] shadow-2xl">
                        <div className="border-b-2 h-[70px] flex justify-between items-center p-6">
                            <p className="flex text-[20px] items-center font-semibold">{t("ServiceDetail.offer.brand.title3")}</p>
                            <button className=" w-[158px] btn-blue shadow-3xl rounded-full shadow-blue-400 ">{t("ServiceDetail.offer.button")}</button>
                        </div>
                        <div className="p-6">
                            <p className="leading-7 font-superlight text-[18px]">{t("ServiceDetail.offer.brand.detail3")}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default ServiceOffer