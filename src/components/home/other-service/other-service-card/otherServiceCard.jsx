const OtherServiceCard = ({ image, otherServices, t }) => {
  return (
    <section className="relative flex-grow flex flex-col items-center">
      <div className="gradient-img-otherService rounded-lg absolute h-44 w-72 md:h-52 md:w-80 lg:w-full lg:h-[300px]" />
      <img src={image} alt="OtherService" className="object-cover rounded-lg h-44 w-72 md:h-52 md:w-80 lg:w-full lg:h-[300px]" />
      <div className="relative font-plus-jakarta-sans z-10 bg-white flex justify-around items-center shadow-md rounded-b-lg px-1 -mt-7 w-72 h-14 md:w-80 md:h-16 md:-mt-10 lg:-mt-24 lg:rounded-xl lg:w-11/12">
        <p className="font-semibold text-sm lg:text-2xl flex-1">{otherServices}</p>
        <button className="btn-blue rounded-full text-xs lg:text-sm ">{t("Home.other-service.btn-text")}</button>
      </div>
    </section>
  );
};

export default OtherServiceCard;
