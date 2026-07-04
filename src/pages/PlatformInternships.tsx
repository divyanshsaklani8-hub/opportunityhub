import { Link, useNavigate } from "react-router-dom";

export default function PlatformInternships() {
    const navigate = useNavigate();
  return (
    <div className="page">
        <button
  onClick={() => navigate(-1)}
  className="back-btn"
>
  ← Back
</button>
      <h1>Internships Platform</h1>

      <div className="cards">

        <Link to="/platform-opportunity/TCS iON Internship">
          <div className="card">
            <h3>TCS iON Internship</h3>
            <p>Technology & IT Internship</p>
          </div>
        </Link>

        <Link to="/platform-opportunity/IBM SkillsBuild Internship">
          <div className="card">
            <h3>IBM SkillsBuild Internship</h3>
            <p>Skills Development Internship</p>
          </div>
        </Link>

        <Link to="/platform-opportunity/Deloitte Internship">
  <div className="card">
    <h3>Deloitte Internship</h3>
    <p>Business Consulting Internships</p>
  </div>
</Link>

      </div>
    </div>
  );
}