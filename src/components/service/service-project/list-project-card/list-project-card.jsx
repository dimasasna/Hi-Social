import { BsFillArrowUpRightSquareFill } from "../../../../../node_modules/react-icons/bs";
const ListProjectCard = ({ text, image }) => {
  return (
    <section className="relative flex flex-col shadow-2xl items-center w-60 md:w-72 lg:w-80 2xl:w-11/12">
      <div className="flex flex-col">
        <img src={image} alt="image program" className="rounded-xl object-cover w-full h-80 md:h-96 lg:h-[26rem] 2xl:h-[431.273px] " />

        <div className="absolute gradient-img-about rounded-lg w-full h-80 md:h-96 lg:h-[26rem] 2xl:h-[431.273px] " />
      </div>

      <div className="relative z-10 -mt-24 group text-center cursor-pointer shadow-lg flex justify-around items-center bg-white rounded-lg w-52 h-14 md:w-64 md:-mt-28 lg:-mt-32 lg:w-64 lg:h-20" tabIndex="1">
        <h1 className="font-semibold font-plus-jakarta-sans text-start group-focus:text-sky-500 text-xs md:text-base w-36 md:w-44 lg:w-44">{text}</h1>
        <BsFillArrowUpRightSquareFill className="text-3xl lg:text-4xl text-blue-500" />
      </div>
    </section>
  );
};

export default ListProjectCard;
