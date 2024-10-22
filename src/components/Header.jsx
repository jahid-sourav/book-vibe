import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-3 bg-black text-white">
      <div className="container flex flex-wrap gap-3 justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">
          Book Vibe
        </NavLink>

        <ul className="flex items-center gap-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-green-600" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listed-books"
              className={({ isActive }) => (isActive ? "text-green-600" : "")}
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pages-to-read"
              className={({ isActive }) => (isActive ? "text-green-600" : "")}
            >
              Pages To Read
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
