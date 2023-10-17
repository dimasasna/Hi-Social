import CardTesti from "./card-testi/cardTesti";

const Testi = ({ t }) => {
  return (
    <section>
      <h1 className="text-center font-medium text-2xl md:text-4xl lg:text-6xl">
        {t("Home.testi.title")}
        <br />
        <span className="text-lg md:text-2xl lg:text-4xl"> {t("Home.testi.title-2")}</span>
      </h1>
      <CardTesti t={t} />
    </section>
  );
};

export default Testi;
