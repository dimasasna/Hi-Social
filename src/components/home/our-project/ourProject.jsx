import CardOurProject from "./card-our-project/cardOurProject";
import { shoes, lotion, fruit } from "../../../assets/img/index";

const OurProject = ({ t }) => {
  return (
    <section>
      <div className="mb-7 md:flex md:space-x-10 md:items-end lg:items-center lg:mb-16 lg:justify-between">
        <h1 className="font-medium font-clash-display text-2xl md:text-4xl lg:text-5xl">{t("Home.our-project.title")}</h1>
        <button className=" hidden btn-blue rounded-full font-medium md:block md:w-40 md:h-14 lg:w-72">{t("Home.our-project.text-button")}</button>
      </div>
      <div>
        <CardOurProject img={shoes} title={t("Home.our-project.brand-puma")} order="md:order-last" text={t("Home.our-project.puma")} />

        <CardOurProject img={fruit} title={t("Home.our-project.brand-fruit")} order="md:order-first" text={t("Home.our-project.fruit")} />

        <CardOurProject img={lotion} order="md:order-last" title={t("Home.our-project.brand-lotion")} text={t("Home.our-project.lotion")} />
      </div>
      <button className="block btn-blue rounded-full font-medium text-xs h-10 w-full md:hidden">{t("Home.our-project.text-button")}</button>
    </section>
  );
};

export default OurProject;
