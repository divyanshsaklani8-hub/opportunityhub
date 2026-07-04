import { Link, NavLink } from "react-router-dom";

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

      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/internships">Internships</NavLink></li>
        <li><NavLink to="/scholarships">Scholarships</NavLink></li>
        <li><NavLink to="/hackathons">Hackathons</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/admin">Admin</NavLink></li>
        <li><NavLink to="/saved">❤️ Saved</NavLink></li>
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