const CardOurProject = ({ img, order, text, title }) => {
  return (
    <section className="my-4">
      <div className="grid grid-cols-1 p-3 bg-blue-950 w-full items-center justify-items-center rounded md:grid-cols-2 md:p-0 ">
        <img src={img} alt="shoes" className="h-40 w-64 rounded md:h-auto md:w-auto md:rounded-none" />
        <div className={`text-white ${order}`}>
          <h1 className="text-xl mt-4 font-medium text-center lg:text-4xl">{title}</h1>
          <p className="text-justify my-3 md:mx-3 lg:text-2xl lg:my-5 lg:mx-10">{text}</p>
        </div>
      </div>
    </section>
  );
};

export default CardOurProject;
