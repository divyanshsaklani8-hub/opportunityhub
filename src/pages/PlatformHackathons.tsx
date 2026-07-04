import { Link, useNavigate } from "react-router-dom";

export default function PlatformHackathons() {
    const navigate = useNavigate();
  return (
    <div className="page">
        <button
  onClick={() => navigate(-1)}
  className="back-btn"
>
  ← Back
</button>
      <h1>Hackathons Platform</h1>

      <div className="cards">

        <Link to="/platform-opportunity/Hack with India">
          <div className="card">
            <h3>Hack with India</h3>
            <p>National Coding Hackathon</p>
          </div>
        </Link>

        <Link to="/platform-opportunity/Devfolio Hackathons">
          <div className="card">
            <h3>Devfolio Hackathons</h3>
            <p>Latest College Hackathons</p>
          </div>
        </Link>

        <Link to="/platform-opportunity/GFG HackFest">
  <div className="card">
    <h3>GFG HackFest</h3>
    <p>Coding & Innovation Hackathon</p>
  </div>
</Link>

      </div>
    </div>
  );
}