import { shape1, shape2, shape3 } from "../../../assets/shape/index";

import { experienceImg } from "../../../assets/img/index";
import ListExperience from "./list-experience/listExperience";

const OurWork = ({ t }) => {
  return (
    <section className="md:grid md:grid-cols-2 md:gap-x-10 md:justify-items-end md:items-center lg:gap-x-14 ">
      <div>
        <h1 className="mb-3 font-clash-display text-2xl font-medium md:text-3xl lg:mb-12 lg:text-5xl">{t("Home.our-work.text-one")}</h1>

        <ListExperience title={t("Home.our-work.title-1")} text={t("Home.our-work.descript-1")} img={shape1} />

        <ListExperience title={t("Home.our-work.title-2")} text={t("Home.our-work.descript-2")} img={shape2} />

        <ListExperience title={t("Home.our-work.title-3")} text={t("Home.our-work.descript-3")} img={shape3} />
      </div>
      <img className="hidden md:block" src={experienceImg} />
    </section>
  );
};

export default OurWork;
