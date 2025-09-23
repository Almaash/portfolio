import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [page, setPage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activePage, setActivePage] = useState("Home");

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  // ✅ Runs only on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("page");
      setPage(data || "Home");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 640) {
        setIsVisible(window.scrollY === 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const socialItems = [
  //   { name: "Github", url: "https://github.com/Almaash" },
  //   {
  //     name: "Instagram",
  //     url: "https://www.instagram.com/sheikhalmaash?igsh=MWpoZTc0a3hlczhiaw%3D%3D&utm_source=qr",
  //   },
  //   { name: "Twitter", url: "https://x.com/almaashalam?s=11" },
  //   {
  //     name: "LinkedIn",
  //     url: "https://www.linkedin.com/in/almaash-alam-a96a291ab/",
  //   },
  // ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 flex justify-between items-center py-4 px-6 sm:px-20 bg-transparent z-50 transition-transform duration-500 
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
    >
      <div>
        <Link
          to="/"
          className={`text-xl cursor-pointer transition-all duration-300 hover:text-gray-300 block max-sm:hidden ${
            page === "Home"
              ? "text-white"
              : page === ""
              ? "text-white"
              : page === "About"
              ? "text-black"
              : page === "Work"
              ? "text-black"
              : page === "Contact"
              ? "text-white"
              : "text-white"
          }`}
          onClick={() => {
            if (typeof window !== "undefined") {
              localStorage.setItem("page", "Home");
            }
            setPage("Home");
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

      {/* Desktop Navigation */}
      <div
        className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 fixed sm:static top-0 right-0 h-full sm:h-auto w-64  bg-black text-white sm:bg-transparent p-4 sm:p-0 transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } sm:translate-x-0 max-sm:hidden`}
      >
        {navItems.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className={`text-lg cursor-pointer relative after:content-[''] after:absolute after:left-1/2 after:bottom-[-25px] after:w-2 after:h-2  after:rounded-full after:transition-transform after:duration-300 after:scale-0 hover:after:scale-100 hover:after:left-1/2 
              ${
                page === "Home"
                  ? "text-white after:bg-white"
                  : page === "About"
                  ? "text-black after:bg-black"
                  : page === "Work"
                  ? "text-black after:bg-black"
                  : page === "Contact"
                  ? "text-white after:bg-white"
                  : "text-white after:bg-white"
              } `}
            onClick={() => {
              if (typeof window !== "undefined") {
                localStorage.setItem("page", name);
              }
              setPage(name);
              setIsMenuOpen(false);
            }}
          >
            {name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      {/* ... rest of your mobile menu code stays the same */}
    </nav>
  );
};

export default Navbar;
