import { Banner, OurWork, SeveralService, OurProject, Testi, Pricing, OtherService, OurPatner } from "../../components/home/index";

const Home = ({ t }) => {
  return (
    <section className="pt-36 md:pt-30 lg:pt-20 flex flex-col items-center">
      <div className="max-w-[1920px] flex flex-col items-center justify-center space-y-12 md:space-y-24 lg:space-y-32">
        <Banner t={t} />
        <div className="px-5 md:w-auto lg:w-10/12  md:flex md:flex-col md:items-center lg:block space-y-14 md:space-y-24 lg:space-y-32 ">
          <OurWork t={t} />
          <div className="md:w-10/12 lg:w-auto space-y-14 md:space-y-24 lg:space-y-32 ">
            <SeveralService t={t} />
            <OtherService t={t} />
            <OurProject t={t} />
            <Testi t={t} />
            <Pricing t={t} />
            <OurPatner t={t} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
