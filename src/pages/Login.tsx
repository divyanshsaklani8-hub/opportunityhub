import { useState, useEffect } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}, [darkMode]);

useEffect(() => {
  setPassword("");
}, []);

  const handleLogin = () => {
    if (password === "Divyansh@2026") {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      alert("Wrong Password");
    }
  };

  return (
  <>
    <nav>
      <h2 className="logo-box">
        <Link to="/">OpportunityHub</Link>
      </h2>

      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/internships">Internships</NavLink></li>
        <li><NavLink to="/scholarships">Scholarships</NavLink></li>
        <li><NavLink to="/hackathons">Hackathons</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li>
       <NavLink
  to="/login"
  className={({ isActive }) =>
    isActive ? "active-link" : ""
  }
>
  Admin
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

        <input
          type="text"
          className="search-bar"
          placeholder="Search.................."
        />
      </div>
    </nav>

    <div className="page">
  <h1>Admin Login</h1>

  <form autoComplete="off">
   <div className="password-box">
  <input
    type={showPassword ? "text" : "password"}
    name="admin-password"
    placeholder="Enter Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    autoComplete="new-password"
  />

  <span
    className="eye-icon"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

    <button
      type="button"
      onClick={handleLogin}
    >
      Login
    </button>
  </form>
</div>
  </>
);
}