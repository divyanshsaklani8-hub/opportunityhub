import { Link, useNavigate } from "react-router-dom";

export default function PlatformScholarships() {
    const navigate = useNavigate();
  return (
    <div className="page">
        <button
  onClick={() => navigate(-1)}
  className="back-btn"
>
  ← Back
</button>
      <h1>Scholarships Platform</h1>

      <div className="cards">

        <Link to="/platform-opportunity/National Scholarship Portal">
          <div className="card">
            <h3>National Scholarship Portal</h3>
            <p>Government Scholarship</p>
          </div>
        </Link>

        <Link to="/platform-opportunity/Vidya Lakshmi Scholarship">
          <div className="card">
            <h3>Vidya Lakshmi</h3>
            <p>Scholarship & Education Loan</p>
          </div>
        </Link>

        <Link to="/platform-opportunity/INSPIRE Scholarship">
  <div className="card">
    <h3>INSPIRE Scholarship</h3>
    <p>Scholarship for Science Students</p>
  </div>
</Link>

      </div>
    </div>
  );
}