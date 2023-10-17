import { lead1, lead2, lead3, lead4, lead5 } from "../../../assets/leaders/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LeaderCardSlider from "./leaders-card/leader-card";

const OurLeaders = ({ t }) => {
  return (
    <section className="flex flex-col items-center space-y-8 mb-24 lg:space-y-12 lg:mb-44">
      <h1 className=" font-clash-display font-medium text-3xl md:text-4xl lg:text-6xl">{t("AboutUs.leads")}</h1>
      <Swiper
        centeredSlides={true}
        spaceBetween={8}
        loop={true}
        slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          639: {
            slidesPerView: 3,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full relative md:w-10/12 lg:hidden"
      >
        <SwiperSlide className="flex items-center justify-center">
          <LeaderCardSlider image={lead1} name="Jane Cooper" t={t} />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center">
          <LeaderCardSlider image={lead2} name="Wade Warren" t={t} />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center">
          <LeaderCardSlider image={lead3} name="Esther Howard" t={t} />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center">
          <LeaderCardSlider image={lead4} name="Williamson" t={t} />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center">
          <LeaderCardSlider image={lead5} name="Jenny Wilson" t={t} />
        </SwiperSlide>
        <div className="slider-controler relative flex justify-center w-9/12 mt-12 lg:hidden">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      <div className="hidden w-10/12 lg:flex lg:justify-center lg:space-x-4">
        <LeaderCardSlider image={lead1} name="Jane Cooper" t={t} />
        <LeaderCardSlider image={lead2} name="Wade Warren" t={t} />
        <LeaderCardSlider image={lead3} name="Esther Howard" t={t} />
        <LeaderCardSlider image={lead4} name="Williamson" t={t} />
        <LeaderCardSlider image={lead5} name="Jenny Wilson" t={t} />
      </div>
    </section>
  );
};

export default OurLeaders;
