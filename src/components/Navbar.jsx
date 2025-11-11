import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-50" onClick={handleLinkClick}>
            <img src="/gold-logo.png" alt="Tinad Logo" className="h-16 md:h-24 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-white hover-border-link"
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-50 flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-black z-50 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="flex flex-col gap-6 pt-24 px-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-white text-lg hover-border-link"
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;