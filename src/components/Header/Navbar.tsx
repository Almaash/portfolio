import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // const [page, setPage] = useState<any>();
  // const [counter, setCounter] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const navItems = [
    { name: "About", path: "/about", type: 1 },
    { name: "Work", path: "/work", type: 2 },
    { name: "Contact", path: "/contact", type: 3 },
  ];

  // useEffect(() => {
  //   let data = localStorage.getItem("page");
  //   setPage(data);
  // }, [counter]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 640) {
        setIsVisible(window.scrollY === 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialItems = [
    { name: "Github", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "LinkedIn", url: "#" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 flex justify-between items-center py-4 px-6 sm:px-20 bg-transparent z-50 transition-transform duration-500 
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
    >
      <div>
        <Link
          to="/"
          className={`text-xl cursor-pointer transition-all duration-300 hover:text-gray-300 block max-sm:hidden text-black`}
          // className={`text-xl cursor-pointer transition-all duration-300 hover:text-gray-300 block max-sm:hidden ${
          //   page === "Home"
          //     ? "text-white"
          //     : page === "About"
          //     ? "text-black"
          //     : page === "Work"
          //     ? "text-black"
          //     : page === "Contact"
          //     ? "text-white"
          //     : ""
          // }`}
          onClick={() => {
            localStorage.setItem("page", "Home");
            // setCounter((prev) => !prev);
            setIsMenuOpen(false);
          }}
        >
          @almaashalam
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden z-50 flex items-center max-sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-white focus:outline-none"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Desktop and Mobile Navigation */}
      <div
        className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 fixed sm:static top-0 right-0 h-full sm:h-auto w-64  bg-black text-white sm:bg-transparent p-4 sm:p-0 transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } sm:translate-x-0 max-sm:hidden`}
      >
        {navItems.map(({ name, path }) => (
          <Link
            key={name}
            to={`${path}`}
            // to={`${path}/${type}`}
            className={`text-lg cursor-pointer relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-25px] after:w-2 after:h-2  after:rounded-full after:transition-transform after:duration-300 after:scale-0 hover:after:scale-100 hover:after:left-1/2 
             text-black after:bg-black`}
            // className={`text-lg cursor-pointer relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-25px] after:w-2 after:h-2  after:rounded-full after:transition-transform after:duration-300 after:scale-0 hover:after:scale-100 hover:after:left-1/2 
            //   ${
            //     page === "Home"
            //       ? "text-white after:bg-white"
            //       : page === "About"
            //       ? "text-black after:bg-black"
            //       : page === "Work"
            //       ? "text-black after:bg-black"
            //       : page === "Contact"
            //       ? "text-white after:bg-white"
            //       : ""
            //   } `}
            onClick={() => {
              localStorage.setItem("page", name);
              // setCounter((prev) => !prev);
              setIsMenuOpen(false);
            }}
          >
            {name}
          </Link>
        ))}
      </div>

      <div className={`block sm:hidden bg-black ${!isMenuOpen && 'p-5 py-7'} rounded-full`}>
        {/* Mobile Menu Button - Not shown in the image but needed for functionality */}
        {!isMenuOpen && (
          <div className="sm:hidden z-50 flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-white focus:outline-none flex-col items-center "
            >
              {isMenuOpen ? (
                <X />
              ) : (
                <>
                  <span className="block w-6 h-[1px] bg-white mb-1.5"></span>
                  <span className="block w-6 h-[1px] bg-white"></span>
                </>
              )}
              {/* {isMenuOpen ? (
              <X />
            ) : (
              <>
                <span className="block w-6 h-[1px] bg-white mb-1.5"></span>
                <span className="block w-6 h-[1px] bg-white"></span>
              </>
            )} */}
            </button>
          </div>
        )}

        {/* Navigation Menu */}
        <div
          className={`fixed inset-0 bg-black text-white p-6 flex flex-col transition-transform duration-300 transform z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } sm:translate-x-0`}
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center focus:outline-none"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation Section */}
          <div className="mt-8">
            <h3 className="text-sm uppercase text-gray-500 tracking-wider mb-4">
              NAVIGATION
            </h3>
            <div className="h-px w-full bg-gray-800 mb-6"></div>

            <nav className="flex flex-col space-y-4">
              <Link
                to="."
                className="text-5xl font-light hover:text-gray-300 transition-colors"
                onClick={() => {
                  setActivePage("home");
                  setIsMenuOpen(false);
                }}
              >
                Home
              </Link>
              {navItems.map((item) => (
                <div key={item.name} className="flex items-center">
                  <Link
                    to={`${item.path}`}
                    // to={`${item.path}/${item.type}`}
                    className="text-5xl font-light hover:text-gray-300 transition-colors"
                    onClick={() => {
                      setActivePage(item.name);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                  {activePage === item.name && (
                    <div className="w-2 h-2 rounded-full bg-white ml-4"></div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Socials Section */}
          <div className="mt-auto mb-10">
            <div className="h-px w-full bg-gray-800 mb-6"></div>
            <h3 className="text-sm uppercase text-gray-500 tracking-wider mb-4">
              SOCIALS
            </h3>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socialItems.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
