import { about1, about2, about3 } from "../../../assets/img/index";

const BannerAbout = ({ t }) => {
  return (
    <section className=" md:w-10/12 font-plus-jakarta-sans gap-y-16 mb-24 grid grid-cols-1  md:gap-x-7 lg:mb-20 md:grid-cols-7 lg:gap-x-16">
      <div className="order-last space-y-5 md:order-first lg:space-y-12 md:col-span-3">
        <h1 className="font-bold text-3xl text-justify md:text-left lg:text-6xl">{t("AboutUs.banner.title")}</h1>
        <p className="md:text-justify lg:text-xl">{t("AboutUs.banner.detail")}</p>
        <button className="btn-blue rounded-full lg:text-xl lg:px-12">{t("AboutUs.banner.button")}</button>
      </div>

      <div className="order-first flex justify-center items-center md:order-last md:col-span-4">
        <div className="rounded-full bg-sky-300 w-72 h-72 blur-2xl opacity-70 absolute lg:h-[403px] lg:w-[403px]" />
        <div className="flex justify-around relative z-30 w-full">
          <img src={about1} alt="about1" className="shadow-2xl  rounded-full shadow-gray-400 object-cover w-24 h-60 md:h-66 lg:w-[179px] lg:h-[402px]" />
          <img src={about2} alt="about2" className="mt-6 shadow-2xl  rounded-full shadow-gray-400 object-cover w-24 h-60 md:h-66 lg:w-[179px] lg:h-[402px] lg:mt-10" />
          <img src={about3} alt="about3" className="shadow-2xl  rounded-full shadow-gray-400 object-cover w-24 h-60 md:h-66 lg:w-[179px] lg:h-[402px]" />
        </div>
      </div>
    </section>
  );
};

export default BannerAbout;
