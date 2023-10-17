import { pumaStore, patner } from "../../../../assets/img/index";
import { FaQuoteLeft } from "../../../../../node_modules/react-icons/fa";

const CardTesti = ({ t }) => {
  return (
    <section className="mt-10 lg:mt-14 p-5 bg-neutral-200 rounded-2xl md:space-x-5  md:justify-center md:flex md:items-center lg:justify-between lg:p-8 2xl:justify-around">
      <img src={pumaStore} alt="store" className="hidden rounded-2xl h-72 w-72 md:block lg:w-[407px] lg:h-[369px]" />

      <div className="w-auto md:w-96  lg:w-[626px]">
        <p className="text-justify font-medium lg:text-xl">
          <FaQuoteLeft className="text-blue-500 text-3xl mb-3 lg:text-5xl" />
          {t("Home.testi.testi-text")}
        </p>
        <div className="mt-7 pt-3 flex items-center space-x-3 border-t border-black lg:mt-8 lg:pt-5 lg:space-x-7">
          <img src={patner} alt="patner" className="h-20 lg:h-[86px] lg:w-[86px]" />
          <div>
            <h1 className="font-semibold lg:text-2xl">Chen Lee Alexander</h1>
            <p className="text-sm lg:text-lg"> {t("Home.testi.job")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardTesti;
