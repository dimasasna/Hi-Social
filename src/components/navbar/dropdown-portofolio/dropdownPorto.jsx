import { Link } from "react-router-dom";

const DropdownPorto = () => {
  const url = {
    dribble: "https://dribbble.com/hisocialdigital",
    behance: "https://www.behance.net/hisocialdigital",
  };
  return (
    <section className="relative flex justify-start lg:justify-center">
      <ul className="absolute bg-white text-black  shadow-md">
        <li className=" cursor-pointer hover:bg-blue-500 hover:text-white px-8">
          <Link to={url.behance} target="_blank">
            Behance
          </Link>
        </li>
        <li className=" cursor-pointer hover:bg-blue-500 hover:text-white px-8  my-2">
          <Link to={url.dribble} target="_blank">
            Dribble
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default DropdownPorto;
