const ListExperience = ({ title, text, img }) => {
  return (
    <div className="flex space-y-9 md:space-x-5 ">
      <img className="hidden h-10 w-12 md:h-14 md:w-20 md:mt-8 md:block lg:w-24 lg:h-16 lg:mt-10" src={img} />
      <div>
        <div className="flex items-center space-x-4 mb-4 md:space-x-0 ">
          <img className="block w-16 md:hidden" src={img} />
          <h1 className="font-clash-display font-medium text-lg lg:text-3xl">{title}</h1>
        </div>
        <p className=" text-justify lg:text-lg">{text}</p>
      </div>
    </div>
  );
};

export default ListExperience;
