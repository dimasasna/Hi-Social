const CardPercentase = ({ t }) => {
  return (
    <section className="bg-blue-500 p-3 text-white  text-start rounded-xl font-plus-jakarta-sans w-[160px] h-[126px] flex flex-col justify-center">
      <h1 className="text-4xl font-bold">50%</h1>
      <p className="w-[118px] text-sm">{t}</p>
    </section>
  );
};

export default CardPercentase;
