import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Folder,
  Mail,
  ChevronRight,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: "Início", to: "/", icon: Home },
    { name: "Sobre", to: "/about", icon: User },
    { name: "Especialidades", to: "/skills", icon: Code },
    { name: "Projetos", to: "/projects", icon: Folder },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // rolagem suave
    });
  };

  return (
    <nav
      className={`fixed p-3 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-800/90 backdrop-blur-md shadow-md"
          : "bg-gray-800/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto px-4">
        <div className="flex items-center md:justify-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  to={item.to}
                  key={item.name}
                  onClick={() => {
                    handleClick();
                  }}
                  className="nav-link hover:scale-105 transition-all duration-200 flex gap-2 items-center justify-center p-2 rounded-md "
                >
                  <div className="flex gap-2 justify-center items-center">
                    <Icon className="text-cyan-500" size={18} />{" "}
                    <span>{item.name}</span>
                  </div>
                </NavLink>
              );
            })}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyan-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? "" : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="fixed top-0 right-0 w-full min-h-screen bg-black/80"
          ></div>
        )}

        <div
          className={`md:hidden py-4 fixed top-0 left-0 h-screen bg-[#111317] transition-all duration-300 overflow-hidden ${
            isOpen ? "w-[60%]" : "w-0"
          }`}
        >
          <X
            size={24}
            onClick={() => setIsOpen(!isOpen)}
            className=" float-end mx-5 text-cyan-500 bg-cyan-500/20 rounded-md"
          />
          <div className="flex flex-col space-y-4 w-full py-4 mt-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  to={item.to}
                  onClick={() => {
                    setIsOpen(false);
                    handleClick();
                  }}
                  key={item.name}
                  className="text-foreground hover:text-primary transition-colors duration-300 py-2 flex items-center justify-between p-2 "
                >
                  <div className="flex gap-2 justify-start items-center">
                    <Icon size={18} className="text-cyan-500" />{" "}
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight className="text-cyan-500" />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
