import { serviceImg, serviceCard1, serviceCard2, serviceCard3, serviceCard4, serviceCard5, serviceCard6, serviceCard7 } from "../../../assets/img/index";
import { vectorLine } from "../../../assets/shape/index";
import CardImg from "./card-banner/card-img";
import CardPercentase from "./card-banner/card-percentase";
import CardTesti from "./card-banner/card-testi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const BannerService = ({ t }) => {
  return (
    <section className="flex flex-col items-center font-plus-jakarta-sans">
      <div className="w-full bg-white bg-opacity-75 h-[340px] z-10 absolute md:h-[400px] lg:h-[788px]" />
      <img src={serviceImg} alt="service banner" className=" w-auto absolute top-20 h-[340px] md:w-full md:h-[400px] lg:h-[788px]" />

      <div className="relative z-20 text-center flex flex-col items-center  top-10 space-y-5 md:text-sm md:top-20 lg:top-28 lg:space-y-12">
        <button className="rounded-full border border-gray-500 w-60 text-xs  py-1 lg:text-base lg:w-96 lg:py-2 hover:bg-gray-500 hover:bg-opacity-10 active:bg-opacity-30">{t("Service.banner-btn.btn-text-3")}</button>

        <h1 className="font-bold text-2xl w-10/12 md:text-4xl md:w-7/12 lg:text-[52px]/[62px] ">
          {t("Service.banner")}
          <span className="text-blue-500 inline-flex flex-col items-center lg:-ms-5 ">
            HiSocial Digital
            <img src={vectorLine} alt="line" className=" w-48   -mt-2  md:w-72  lg:w-[430px] " />
          </span>
        </h1>

        <p className="w-10/12 md:text-xl lg:text-3xl lg:w-7/12"> {t("AboutUs.banner.detail")}</p>

        <div className="flex justify-around text-sm lg:text-lg w-10/12 md:w-5/12 lg:w-[34rem]">
          <button className="btn-blue shadow-2xl rounded-xl shadow-blue-400 lg:h-14 lg:w-72">{t("Service.banner-btn.btn-text-1")}</button>
          <button className="btn-yellow rounded-xl shadow-2xl shadow-yellow-400 lg:h-14 lg:w-52">{t("Service.banner-btn.btn-text-2")}</button>
        </div>
      </div>

      <div className="hidden mt-44 lg:flex justify-center items-center gap-8 w-[1797px] z-50 relative">
        <CardTesti image={serviceCard1} user={serviceCard7} text={t("Service.banner-card.card-1.text")} name={t("Service.banner-card.card-1.name")} job={t("Service.banner-card.card-1.job")} />

        <CardTesti user={serviceCard3} text={t("Service.banner-card.card-2.text")} name={t("Service.banner-card.card-2.name")} job={t("Service.banner-card.card-2.job")} />

        <CardImg image={serviceCard2} />

        <CardTesti image={serviceCard4} user={serviceCard6} text={t("Service.banner-card.card-3.text")} name={t("Service.banner-card.card-3.name")} job={t("Service.banner-card.card-3.job")} />

        <CardPercentase t={t("Service.banner-card.card-5.text")} />

        <CardTesti user={serviceCard5} text={t("Service.banner-card.card-4.text")} name={t("Service.banner-card.card-4.name")} job={t("Service.banner-card.card-4.job")} />
      </div>
    </section>
  );
};

export default BannerService;
