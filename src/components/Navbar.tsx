import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  handleSearch?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function Navbar({
  darkMode,
  setDarkMode,
  searchTerm,
  setSearchTerm,
  handleSearch,
}: NavbarProps) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>

      <h2 className="logo-box">
  <Link to="/">
    <img
      src="/OpportunityHub-logo.png"
      alt="OpportunityHub Logo"
      className="navbar-logo"
    />
  </Link>
</h2>

<button
  className="menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FiX /> : <FiMenu />}
</button>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
  <NavLink
    to="/"
    onClick={() => setMenuOpen(false)}
  >
    Home
  </NavLink>
</li>
        <li>
  <NavLink
    to="/internships"
    onClick={() => setMenuOpen(false)}
  >
    Internships
  </NavLink>
</li>
        <li>
  <NavLink
    to="/scholarships"
    onClick={() => setMenuOpen(false)}
  >
    Scholarships
  </NavLink>
</li>
        <li>
  <NavLink
    to="/hackathons"
    onClick={() => setMenuOpen(false)}
  >
    Hackathons
  </NavLink>
</li>
        <li>
  <NavLink
    to="/contact"
    onClick={() => setMenuOpen(false)}
  >
    Contact
  </NavLink>
</li>
        <li>
  <NavLink
    to="/admin"
    onClick={() => setMenuOpen(false)}
  >
    Admin
  </NavLink>
</li>
        <li>
  <NavLink
    to="/saved"
    onClick={() => setMenuOpen(false)}
  >
    ❤️ Saved
  </NavLink>
</li>
      </ul>

      <div className="nav-right">

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        {setSearchTerm && (
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        )}

      </div>

    </nav>
  );
}