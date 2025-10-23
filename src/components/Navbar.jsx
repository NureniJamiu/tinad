import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            <Link to="/" className="flex items-center">
                <img src="/white-logo.png" alt="Tinad Logo" className="h-12 w-auto object-contain" />
            </Link>
          <ul className="flex items-center gap-8">
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