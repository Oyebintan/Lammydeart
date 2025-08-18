import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Checkbox from "./Checkbox";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const checkboxRef = useRef(null); // Reference to the checkbox

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuVisible && // ✅ Only run if the menu is open
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuVisible]); // ✅ Re-run when menu state changes

  const closeMenu = () => {
    setIsMenuVisible(false);

    // ✅ Ensure the checkbox is "clicked" only when the menu is open
    if (checkboxRef.current && checkboxRef.current.checked) {
      checkboxRef.current.click();
    }
  };

  return (
    <nav
      ref={menuRef}
      className="flex px-6 lg:px-10 py-6 lg:py-1 justify-between lg:bg-black/10 md:backdrop-blur-xl bg-[rgba(18,18,18)] lg:border-gray items-center sticky top-0 z-4 text-white"
    >
      <div className="flex gap-8 items-center  ">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-6" />
        </Link>
      </div>
      <div
        className={`nav-links flex   md:py-2  rounded-3xl text-white font-semibold items-center md:gap-8 ${
          isMenuVisible ? "show" : ""
        }`}
      >
        <Link to="/about" onClick={closeMenu} className="">
          About
        </Link>
        <Link to="/project" onClick={closeMenu} className="">
          Projects
        </Link>
        <Link to="/contact" onClick={closeMenu} className="">
          Contact
        </Link>
         <a href="" className='lg:hidden font-semibold border-1 border-gray-200 rounded-lg py-1 px-3 text-white'>Hire Me!</a>
      </div>
      <div className="flex items-center gap-2">
        <FaXTwitter className="hidden lg:block size-7 text-white border-1 p-1 rounded-lg " />
        <FaInstagram className="hidden lg:block size-7 text-white border-1 p-1 rounded-lg" />
        <FaWhatsapp className="hidden lg:block size-7 text-white border-1 p-1 rounded-lg" />
        <div className="hidden lg:block h-6 w-[2px] bg-gray-200"></div>
        <Button />
      </div>

      <Checkbox setIsMenuVisible={setIsMenuVisible} checkboxRef={checkboxRef} />
    </nav>
  );
};

export default Navbar;
