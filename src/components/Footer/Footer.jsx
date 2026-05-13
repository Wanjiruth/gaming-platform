import {
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";
const socialLinks = [
  { to: "https://www.linkedin.com/in/ruth-njoki-74105423b/", icon: <FaLinkedinIn /> },
  { to: "https://github.com/wanjiruth", icon: <FaInstagram /> }, // using instagram icon as placeholder or change to GitHub if imported
  { to: "mailto:ruth.engineer49@gmail.com", icon: <FaEnvelope /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          &copy; {new Date().getFullYear()} Ruth Njoki. All rights reserved.
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </Link>
          ))}
        </div>

        <Link
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
