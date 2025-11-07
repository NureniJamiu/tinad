import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex items-center justify-between px-6 py-4 ">
        <Link to="/" className="flex items-center">
          <img src="/white-logo.png" alt="Tinad Logo" className="h-12 w-auto object-contain" />
        </Link>
        <ul className="flex items-center gap-8 bg-black w-full md:w-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-white hover-border-link"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;