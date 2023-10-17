import { srv1, srv2, srv3, srv4, srv5 } from "../../../assets/service-program/index";
import ListProjectCard from "./list-project-card/list-project-card";

const ServiceProject = ({ t }) => {
  return (
    <section className="md:w-10/12 2xl:w-9/12 space-y-12 md:space-y-24 lg:space-y-32">
      <div className="space-y-5 lg:space-y-24">
        <h1 className="font-medium text-xl md:text-4xl">{t("Service.service-program.list-program.list-0")}</h1>
        <p className="text-justify md:text-xl lg:text-2xl">{t("Service.service-program.service-program-detail")}</p>
      </div>

      <div className="grid grid-cols-1 gap-y-20 md:gap-y-28 lg:gap-y-32 md:grid-cols-2 lg:grid-cols-3 w-full justify-items-center">
        <ListProjectCard text="Eduwork.id Landing Pages" image={srv1} />
        <ListProjectCard text="Upscale.id Landing Page" image={srv2} />
        <ListProjectCard text="Digital Marketing School Landing Pages" image={srv3} />
        <ListProjectCard text="Kreatif.com" image={srv4} />
        <ListProjectCard text="Upscale.id Mobile Appliacations" image={srv2} />
        <ListProjectCard text="Dago Vision Care Landing Pages" image={srv5} />
      </div>
    </section>
  );
};

export default ServiceProject;
