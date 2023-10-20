import { profilUs } from "../../../assets/img"

const ServiceUs = ({t}) => {
    return (
        <section className="mt-24 m-12">
            <div className="mx-auto max-w-[1230px] rounded-xl bg-[#008FFF] pb-4">
                <div className="text-white h-52 text-center w-[789px] mx-auto">
                    <h1 className="pt-12 text-[48px] font-bold">{t("ServiceDetail.workwithus.title1")}<span className="text-[#EDC700]">{t("ServiceDetail.workwithus.title2")}</span></h1>
                    <p className="leading-loose font-light mt-2 text-[20px]">{t("ServiceDetail.workwithus.detail")}</p>
                </div>

                <div className="items flex flex-row justify-center gap-10 max-w-6xl mx-auto my-12">
                    <div className="h-[226px] w-[335px] border rounded-[20px] bg-white shadow-2xl">
                        <h1 className="m-4">Icons</h1>
                        <h1 className="m-4 font-bold text-[#008FFF] text-[20px]" >{t("ServiceDetail.workwithus.card.title1")}</h1>
                        <p className="m-4 leading-normal font-light text-[18px]">{t("ServiceDetail.workwithus.card.detail1")}</p>
                    </div>
                    <div className="h-[226px] w-[335px] border rounded-[20px] bg-white shadow-2xl">
                        <h1 className="m-4">Icons</h1>
                        <h1 className="m-4 font-bold text-[#008FFF] text-[20px]" >{t("ServiceDetail.workwithus.card.title2")}</h1>
                        <p className="m-4 leading-normal font-light text-[18px]">{t("ServiceDetail.workwithus.card.detail2")}</p>
                    </div>
                    <div className="h-[226px] w-[335px] border rounded-[20px] bg-white shadow-2xl">
                        <h1 className="m-4">Icons</h1>
                        <h1 className="m-4 font-bold text-[#008FFF] text-[20px]" >{t("ServiceDetail.workwithus.card.title3")}</h1>
                        <p className="m-4 leading-normal font-light text-[18px]">{t("ServiceDetail.workwithus.card.detail3")}</p>
                    </div>
                </div>

                <div className="h-[131px] w-[580px] border rounded-[20px] bg-white mx-auto mb-12 shadow-2xl">
                    <div className="grid grid-cols-3  gap-2">
                        <div className="flex justify-center col-span-2 m-4 border-r-2 ">
                            <img src={profilUs} alt="" />
                        </div>
                        <div className="text-center mr-4 mt-2">
                            <h1 className="text-[50px] font-bold text-[#008FFF]">50+</h1>
                            <p className="font-bold">{t("ServiceDetail.workwithus.foot")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceUs