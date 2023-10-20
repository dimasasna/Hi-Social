import { serviceDetail1, serviceImage1 } from "../../../assets/img"
const BannerServiceDetail = ({t}) => {
    return (
        <section className="mt-16  relative flex flex-col items-center font-plus-jakarta-sans">
            <img className="w-full h-full absolute" src={serviceDetail1} alt="Banner Service Detail" />
            <div className="relative z-20 grid grid-cols-2 mt-[100px] gap-5   max-w-[1230px] mx-auto mb-10">
                <div className="w-full h-full ">
                    <h1 className="text-[42px] font-bold text-[#004073]">{t("ServiceDetail.banner.title")}</h1>
                    <p className="leading-loose mt-4 text-[20px]">{t("ServiceDetail.banner.detail")}</p>
                    <button className="mt-10 btn-blue shadow-3xl rounded-xl shadow-blue-400 lg:h-14 lg:w-72">{t("ServiceDetail.banner.button")}</button>
                </div>
                <div className="h-full w-full -mt-14 ml-10">
                    <img className="object-cover  " src={serviceImage1} alt="" />
                </div>
            </div>
        </section>

    )
}
export default BannerServiceDetail