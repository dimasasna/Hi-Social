const GetStarted = ({ t }) => {
  return (
    <section className="bg-blue-950 rounded-lg font-plus-jakarta-sans h-36 md:w-9/12 lg:h-48 flex flex-col w-full justify-center items-center">
      <div className="space-y-3 px-2 md:flex md:justify-between relative z-20 md:items-center lg:w-10/12 w-full">
        <p className="text-lg md:text-xl lg:text-2xl md:w-[508px] text-white">{t("Service.get-started.text")}</p>
        <button className="btn-white rounded-full w-full py-1.5 px-2.5 md:text-lg lg:text-2xl md:w-60">{t("Service.get-started.btn-text")}</button>
      </div>
      <div className="self-end hidden bg-blue-500 h-36 w-32  absolute rounded-l-full md:block lg:w-52 lg:h-48" />
    </section>
  );
};

export default GetStarted;
