

import  { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

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
    submenu: [
      { id: 1, name: "Traiteur", link: "/traiteur" },
      { id: 2, name: "Patisserie", link: "/patisserie" },
      { id: 3, name: "Art du table", link: "/table" },
      { id: 4, name: "Decoration", link: "/decoration" },
      { id: 5, name: "Amenagment", link: "/amenagment" },
      { id: 6, name: "Autre", link: "/autre" },
    ],
  },
  {
    id: 4,
    name: "NOUVELLE ANNONCE",
    link: "/annonce",
  },
];

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(true); // Set to true initially
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && location.pathname !== "/traiteur") {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const storedScrollPosition = localStorage.getItem("scrollPosition");
    if (storedScrollPosition) {
      window.scrollTo(0, parseInt(storedScrollPosition));
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("scrollPosition", window.scrollY);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownVisible(false);
    }, 90); // 0.09second
    setDropdownTimeout(timeout);
  };

  return (
    <>
      <header
        className={`${
          isNavbarFixed
            ? "fixed top-0 left-0 w-full shadow-lg bg-[#e3dac9] dark:bg-gray-900 dark:text-white duration-200 z-10"
            : "relative"
        } py-2 px-4`}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <a href="accueil" className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="w-36 h-16" />
              </a>
            </div>
            <div className="flex justify-between items-center gap-4 font-mono font-bold">
              <ul className="hidden sm:flex items-center gap-4 ">
                {Menu.map((menu) => (
                  <li
                    key={menu.id}
                    onMouseEnter={menu.submenu ? handleMouseEnter : undefined}
                    onMouseLeave={menu.submenu ? handleMouseLeave : undefined}
                    className="relative"
                  >
                    <a
                      href={menu.link}
                      className="inline-block py-2 px-3 hover:text-yellow-500"
                    >
                      {menu.name}
                    </a>
                    {menu.submenu && (
                      <ul
                        className={`absolute left-0 top-full mt-2 w-48 shadow-lg border rounded-lg z-20 bg-[#e3dac9] bg-opacity-80 transition-opacity duration-500 ${dropdownVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                      >
                        {menu.submenu.map((sub, index) => (
                          <li key={sub.id}>
                            <a
                              href={sub.link}
                              className="block py-2 px-4 hover:bg-gray-200"
                            >
                              {sub.name}
                            </a>
                            {index < menu.submenu.length - 1 && (
                              <hr className="border-t-2 border-[#FFA801]" />
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <a href="contact">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:border-2 hover:border-double hover:border-black duration-200 text-white py-2 px-4 rounded-lg flex items-center gap-3 font-mono">

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
