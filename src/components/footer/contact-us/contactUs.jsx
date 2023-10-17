import { Link } from "react-router-dom";

const ContactUs = ({ icons, text, link }) => {
  return (
    <section className="flex mt-2 md:mt-3 hover:text-gray-300 cursor-pointer">
      <h1 className="text-2xl hidden md:block">{icons}</h1>
      <Link to={link} target="_blank" className="ms-1 text-xs md:text-sm">
        {text}
      </Link>
    </section>
  );
};

export default ContactUs;
