import { AiFillStar } from "react-icons/ai";

const CardTesti = ({ image, user, text, job, name }) => {
  return (
    <section className="bg-white rounded-lg shadow-md font-plus-jakarta-sans ">
      {image ? <img src={image} alt="banner" className="rounded w-full " /> : null}

      <div className="space-y-3 p-3">
        <p className="text-gray-500 text-xs text-justify w-60">{text}</p>

        <div className="h-[1px] bg-gray-500 w-full" />
        <div className="flex space-x-2 items-center">
          <img src={user} alt="user" className="w-10 h-10" />

          <div className="flex flex-col items-start w-full">
            <h1 className="font-semibold text-sm">{name}</h1>
            <div className="flex justify-between w-full">
              <p className="text-gray-500 text-xs">{job}</p>
              <p className="text-gray-500 text-xs flex space-x-1 items-center">
                <AiFillStar className="text-yellow-500 text-base" /> <span>4.5</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardTesti;
