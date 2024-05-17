import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { IoMdContacts } from "react-icons/io";

const Menu = [
  {
    id: 1,
    name: "ACCUEIL",
    link: "/accueil",
  },
  {
    id: 2,
    name: "QUI SOMMES-NOUS?",
    link: "/about-us",
  },
  {
    id: 3,
    name: "NOS SERVICES",
    link: "/services",
  },
  {
    id: 4,
    name: "NOUVELLE ANNONCE",
    link: "/annonce",
  },
];

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(true); // Set to true initially

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${
          isNavbarFixed
            ? "fixed top-0 left-0 w-full shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200 z-10"
            : "relative"
        } py-2 px-4`}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="w-16 h-16" />
                {/* Foodie */}
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-2 px-3 hover:text-yellow-500"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="contact">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full flex items-center gap-3">

                  Contact
                  <IoMdContacts className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
