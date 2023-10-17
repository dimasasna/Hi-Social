import { bannerImage } from "../../../assets/img/index";
import { IoIosArrowForward } from "../../../../node_modules/react-icons/io";
import HighligtBanner from "./highligt-banner/highligtBanner";

const Banner = ({ t }) => {
  return (
    <section className=" ">
      <div className="px-5 grid gap-5 grid-cols-1 md:items-center md:grid-cols-2 lg:justify-items-end lg:items-start lg:grid-cols-7  md:pe-0 lg:gap-16">
        <div className="font-plus-jakarta-sans flex justify-center lg:justify-end lg:col-span-3 ">
          <div className="md:w-full lg:w-4/5 lg:space-y-14 ">
            <h1 className="font-clash-display text-4xl font-medium mb-7 lg:mt-24 lg:text-5xl">{t("Home.banner.title")}</h1>
            <div className="text-sm text-justify md:text-base font-normal space-y-10">
              <p>{t("Home.banner.descript1")}</p>
              <p>{t("Home.banner.descript2")}</p>
            </div>
            <button className="btn-blue rounded-full flex  items-center mt-3 text-xs  md:px-7 md:text-xl lg:mt-10 lg:py-3 lg:mb-5">
              {t("Home.banner.started")}{" "}
              <span className="bg-white p-1 text-black rounded-full ms-2 lg:ms-5 text-xs md:text-base">
                <IoIosArrowForward />
              </span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 ">
          <img src={bannerImage} className="md:h-[450px] md:w-full lg:h-[834px] lg:w-[794px] 2xl:w-full" />
        </div>
      </div>

      <div className="mt-2 md:mt-8 lg:-mt-28 flex flex-col items-center">
        <HighligtBanner t={t} />
      </div>
    </section>
  );
};

export default Banner;
