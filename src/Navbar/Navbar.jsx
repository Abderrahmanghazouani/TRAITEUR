import { useState, useEffect, useRef, createContext, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Logo from "../assets/logo.jpg";
import { IoMdContacts } from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";

// Create a context to share the navbar height
const NavbarHeightContext = createContext(0);

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
      { id: 3, name: "Art du table", link: "/art-de-la-table" },
      { id: 4, name: "Decoration", link: "/decoration" },
      { id: 5, name: "Amenagment", link: "/amenagment" },
      { id: 6, name: "Autre", link: "/autres-services" },
    ],
  },
  {
    id: 4,
    name: "NOUVELLE ANNONCE",
    link: "/annonce",
  },
];

const Navbar = () => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [showNavbar, setShowNavbar] = useState(false); // State to manage navbar visibility
  const [verticalNavbar, setVerticalNavbar] = useState(false); // State to manage vertical navbar
  const location = useLocation();
  const navbarRef = useRef(null); // Ref to get navbar height
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 || location.pathname === "/traiteur") {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
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

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    const resizeObserver = new ResizeObserver(updateNavbarHeight);
    if (navbarRef.current) {
      resizeObserver.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        resizeObserver.unobserve(navbarRef.current);
      }
    };
  }, [showNavbar, isNavbarScrolled]);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownVisible(false);
    }, 90); // 0.09 seconds
    setDropdownTimeout(timeout);
  };

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
    setVerticalNavbar(!verticalNavbar); // Toggle vertical state
  };
  return (
    <NavbarHeightContext.Provider value={navbarHeight}>
      <header
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full h-20 z-10 transition-all duration-300 ease-in-out ${
          isNavbarScrolled
            ? "bg-[#e3dac9] dark:bg-gray-900 dark:text-white shadow-lg py-1"
            : "bg-[#e3dac9] dark:bg-gray-900 dark:text-white py-3"
        }`}
      >
        <div className="container px-4">
          <div className="flex justify-between items-center">
            <div>
              <a href="accueil" className="flex items-center gap-2">
                <img src={Logo} alt="Logo" className="w-36 h-16" />
              </a>
            </div>
            <div className="sm:hidden">
              {/* Button to toggle navbar on smaller screens */}
              <button
                onClick={toggleNavbar}
                className="text-xl text-black drop-shadow-sm cursor-pointer"
              >
                <FiAlignJustify />
              </button>
            </div>
            <div className={`sm:flex justify-between items-center gap-4 font-mono font-bold ${showNavbar ? "flex" : "hidden"} ${verticalNavbar ? "flex-col" : "flex-row"}`}>
              {/* Show/hide navbar based on state */}
              <ul className={`sm:flex items-center gap-4 ${verticalNavbar ? "flex-col" : "hidden"}`}>
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
                        className={`absolute left-0 top-full mt-2 w-48 shadow-lg border rounded-lg z-20 bg-[#e3dac9] bg-opacity-80 transition-opacity duration-500 ${
                          dropdownVisible
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                      >
                        {menu.submenu.map((sub) => (
                          <li key={sub.id}>
                            <a
                              href={sub.link}
                              className="block py-2 px-4 hover:bg-gray-200"
                            >
                              {sub.name}
                            </a>
                            {sub.id < menu.submenu.length && (
                              <hr className="border-t-2 border-[#FFA801]" />
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              {!verticalNavbar && (
                <a href="contact">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:border-2 hover:border-double hover:border-black duration-200 text-white py-2 px-4 rounded-lg flex items-center gap-3 font-mono">
                    Contact
                    <IoMdContacts className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      <MainContent />
    </NavbarHeightContext.Provider>
  );
};

const MainContent = () => {
  const navbarHeight = useContext(NavbarHeightContext);

  return (
    <main style={{ paddingTop: `${navbarHeight}px` }}>
      <Outlet />
    </main>
  );
};

export default Navbar;
