import { otherService1, otherService2 } from "../../../assets/img/index";
import OtherServiceCard from "./other-service-card/otherServiceCard";

const OtherService = ({ t }) => {
  return (
    <section className="lg:pb-8">
      <div className="mb-10 lg:flex lg:flex-col lg:items-center">
        <h1 className="mb-5 lg:mb-10 font-clash-display font-medium text-2xl md:text-4xl lg:text-5xl">{t("Home.other-service.title")}</h1>
        <p className="text-justify text-base lg:text-xl lg:w-[859px] lg:text-center">{t("Home.other-service.descript")}</p>
      </div>
      <div className="flex flex-col items-center space-y-5 md:space-y-0 md:space-x-5 lg:space-x-5 md:flex-row md:justify-around">
        <OtherServiceCard image={otherService1} otherServices={t("Home.other-service.other-service-1")} t={t} />
        <OtherServiceCard image={otherService2} otherServices={t("Home.other-service.other-service-2")} t={t} />
      </div>
    </section>
  );
};

export default OtherService;
