import ListProgram from "./list-program/list-program";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ServiceProgram = ({ t }) => {
  return (
    <Swiper
      centeredSlides={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 30,
          initialSlide: 0,
        },
        365: {
          slidesPerView: 2,
          spaceBetween: 0,
          initialSlide: 0,
        },
        639: {
          slidesPerView: 4,
          spaceBetween: 50,
          initialSlide: 1,
        },
        1020: {
          slidesPerView: 5.3,
          spaceBetween: 290,
          initialSlide: 1,
        },
        1300: {
          slidesPerView: 5.5,
          spaceBetween: 250,
          initialSlide: 1,
        },
      }}
      className="mySwiper "
    >
      <SwiperSlide>
        <ListProgram t={t("Service.service-program.list-program.list-0")} />
      </SwiperSlide>

      <SwiperSlide>
        <ListProgram t={t("Service.service-program.list-program.list-1")} />
      </SwiperSlide>

      <SwiperSlide>
        <ListProgram t={t("Service.service-program.list-program.list-2")} />
      </SwiperSlide>

      <SwiperSlide>
        <ListProgram t={t("Service.service-program.list-program.list-4")} />
      </SwiperSlide>

      <SwiperSlide>
        <ListProgram t={t("Service.service-program.list-program.list-5")} />
      </SwiperSlide>
    </Swiper>
  );
};

export default ServiceProgram;
