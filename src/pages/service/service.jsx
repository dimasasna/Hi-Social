import { BannerService, ServiceProgram, ServiceProject, GetStarted } from "../../components/service/index";

const Service = ({ t }) => {
  return (
    <section className="max-w-[1920px] pt-20 md:pt-30 lg:pt-20 flex flex-col">
      {/* <div className=""> */}
      <BannerService t={t} />
      <div className="px-5 lg:px-0 mt-32 md:mt-52 lg:mt-40  space-y-10 md:space-y-24 lg:space-y-36">
        <ServiceProgram t={t} />
        <div className="lg:px-5 flex flex-col items-center justify-center space-y-24 md:space-y-24 lg:space-y-36">
          <ServiceProject t={t} />
          <GetStarted t={t} />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Service;
