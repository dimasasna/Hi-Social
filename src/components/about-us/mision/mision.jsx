import { ourWorkImg } from "../../../assets/img/index";

const Mision = ({ t }) => {
  return (
    <section className="flex flex-col items-center mb-24 lg:mb-32">
      <div className="grid grid-cols-1 gap-7 justify-items-center md:w-10/12 md:gap-7 lg:gap-10 lg:grid-cols-2">
        <div className="space-y-5 lg:space-y-12">
          <div className="flex justify-end space-x-7 items-center mb-5">
            <h1 className="font-clash-display text-3xl font-medium md:text-4xl lg:text-6xl">{t("AboutUs.mision.title")}</h1>
            <div className="h-1 bg-yellow-500 w-20 lg:w-28" />
          </div>
          <p className="text-justify md:text-lg lg:text-xl">{t("AboutUs.mision.detail")}</p>
          <button className="btn-outline rounded-lg font-plus-jakarta-sans font-semibold">{t("AboutUs.btn-read-more")}</button>
        </div>
        <div className="hidden w-full md:flex md:justify-center">
          <img src={ourWorkImg} className="h-84 w-96 object-cover rounded-lg lg:w-full lg:h-[450px]" />
        </div>
      </div>
    </section>
  );
};

export default Mision;
