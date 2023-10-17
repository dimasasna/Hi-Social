const LeaderCardSlider = ({ image, name, t }) => {
  return (
    <section className="p-2 border rounded-lg w-full hover:border-blue-500 cursor-pointer md:w-52">
      <img src={image} className="w-full" />
      <div>
        <h1 className="text-xl my-3 font-medium md:text-2xl">{name}</h1>
        <div className="w-14 h-[3px] bg-blue-500" />
      </div>
      <p className="mt-3 text-justify text-sm md:text-base">{t("AboutUs.text")}</p>
    </section>
  );
};

export default LeaderCardSlider;
