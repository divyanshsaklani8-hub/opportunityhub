import '../App.css';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Footer from "../components/Footer";

function Internships() {
  const [internships, setInternships] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
  fetchInternships();
}, []);

async function increaseView(id: number) {

  const opportunity = internships.find(item => item.id === id);

  if (!opportunity) return;

  await supabase
    .from("opportunities")
    .update({
      views: (opportunity.views || 0) + 1,
    })
    .eq("id", id);

  window.location.href = opportunity.link;
}

useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}, [darkMode]);

  async function fetchInternships() {
  const { data, error } = await supabase
    .from('opportunities')
    .select('*')
    .eq('category', 'Internship');

  console.log('INTERNSHIP DATA =', data);
  console.log('ERROR =', error);

  if (!error && data) {
    setInternships(data);
  }

  setLoading(false);
}

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
  <li><NavLink to="/admin">Admin</NavLink></li>
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
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
</div>
      </nav>

      <div className="page">
        <button
  className="back-btn"
  onClick={() => navigate(-1)}
>
  ← Back
</button>
        <h1>Internship Opportunities</h1>

        <div className="opportunity-cards">

          {loading && <h3>Loading internships...</h3>}

          {!loading && internships.length === 0 && (
            <h3>No internships found.</h3>
          )}


  {!loading &&
    internships.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    ).length === 0 && (
      <h3>No internships found.</h3>
  )}

          {internships
  .filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .map((item) => (
    <div className="card" key={item.id}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  width="120"
                />
              )}

              <h3>{item.title}</h3>

              <p>{item.description}</p>

          <button
  onClick={() => increaseView(item.id)}
>
  Apply Now
</button>
            </div>
          ))}

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Internships;