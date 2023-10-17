import { AiOutlineArrowRight } from "../../../../../node_modules/react-icons/ai";

const CardPricing = ({ imgPricing, price, type, description, list, additional, t }) => {
  return (
    <section className="flex flex-col items-center w-80 space-y-5 h-full p-2 pb-4 bg-blue-950 rounded-3xl  lg:w-11/12">
      <div className="bg-white w-full py-5 px-8 shadow-lg  rounded-2xl md:w-auto h-[530px] lg:h-[574px] md:px-5 2xl:px-8">
        <div className=" space-y-1">
          <img src={imgPricing} alt="bronze" className="w-10 lg:w-12 lg:h-12" />
          <h1 className="text-xl font-semibold text-blue-500 lg:text-3xl">{price}</h1>
          <h1 className="text-lg font-medium font-clash-display lg:text-2xl">{type}</h1>
        </div>

        <div className="border-t-2 my-3" />

        <div className="text-sm space-y-4 lg:space-y-5">
          <p className="text-justify">{description}</p>
          <ul className="ms-5 list-disc space-y-1">
            {list?.map((index, i) => (
              <li key={i}>{index}</li>
            ))}
          </ul>
          <p className="text-justify">{t("Home.pricing.additional")}</p>
          <ul className="ms-5 list-disc grid grid-cols-2 lg:gap-1">
            {additional?.map((index, i) => (
              <li key={i}>{index}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className=" text-white text-sm flex items-center cursor-pointer hover:text-gray-200 active:text-gray-400 lg:text-base">
        CHECK DETAIL <AiOutlineArrowRight className="text-lg ms-3" />
      </p>

      {/* <div className="bg-blue-950 shadow-md p-2 w-58 h-66 mt-7 rounded-2xl -ms-52 flex items-end lg:mt-5 lg:-ms-72 lg:h-84 lg:w-80">
        <p className=" text-white text-sm flex items-center cursor-pointer hover:text-gray-200 active:text-gray-400 lg:text-base">
          CHECK DETAIL <AiOutlineArrowRight className="text-lg ms-3" />
        </p>
      </div> */}
    </section>
  );
};

export default CardPricing;
