import { useState } from "react";
import { logo } from "../../assets/img/index";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import DropdownLang from "./dropdown-lang/dropdownLang";
import { Link } from "react-router-dom";
import DropdownPorto from "./dropdown-portofolio/dropdownPorto";

const Navbar = ({ id, en }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    open === false ? setOpen(true) : setOpen(false);
  };
  let selecLang = localStorage.getItem("lang") || "id";

  return (
    <div className="flex justify-between lg:justify-around py-3 shadow-xl items-center fixed w-full top-0 bg-white z-[999999] font-plus-jakarta-sans">
      <div className="h-full w-full flex justify-between max-w-[1360px] mx-auto pr-7">
        <img src={logo} className="cursor-pointer ms-4 lg:ms-16" />
        <div className="me-10 text-2xl border-2 border-black p-1 rounded hover:bg-gray-300 lg:opacity-0 cursor-pointer" onClick={() => handleOpen()}>
          {open === false ? <AiOutlineMenu /> : <GrClose />}
        </div>
        <div
          className={
            !open
              ? "flex flex-col absolute top-20  py-2 ps-4 w-full shadow-lg transition duration-700 opacity-0 lg:flex-row lg:opacity-100 lg:top-0 lg:static lg:w-auto lg:shadow-none"
              : "flex flex-col absolute top-20  py-2 ps-4 w-full shadow-lg transition duration-700 bg-white"
          }
        >
          <ul className="flex flex-col cursor-pointer lg:flex-row lg:space-x-8 lg:w-auto lg:items-center lg:me-10">
            <li className=" hover:text-gray-400">
              <Link to="/" onClick={() => (window.location.href = "#top")}>
                Home
              </Link>
            </li>
            <li className=" hover:text-gray-400">
              <Link to="service" onClick={() => (window.location.href = "#top")}>
                Service
              </Link>
            </li>
            <li className=" hover:text-gray-400 group">
              <span className="lg:px-1">Portofolio</span>
              <div className="hidden group-hover:block">
                <DropdownPorto />
              </div>
            </li>
            <li className=" hover:text-gray-400">
              <Link to="about-us" onClick={() => (window.location.href = "#top")}>
                About Us
              </Link>
            </li>
            <li className="hover:text-gray-400 group">
              <span className="lg:px-1">{selecLang === "id" ? "ID" : "ENG"}</span>
              <div className="hidden group-hover:block">
                <DropdownLang id={id} en={en} />
              </div>
            </li>
          </ul>
          <button type="button" className="w-32 btn-blue rounded-full text-sm mt-1 lg:text-base lg:mt-auto lg:mx-10 lg:w-auto ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
