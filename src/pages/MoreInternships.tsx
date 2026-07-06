import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function MoreInternships() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}, [darkMode]);

  const internships = [
    {
      company: "Uber",
      role: "Software Engineering Intern",
      location: "Bangalore",
      stipend: "₹80,000-₹1.50 Lakh/month",
      apply: "https://www.uber.com/global/en/careers/"
    },
    {
      company: "Atlassian",
      role: "Software Engineering Intern",
      location: "Bengaluru",
      stipend: "₹1.00-₹1.50 Lakh/month",
      apply: "https://www.atlassian.com/company/careers"
    },
    {
      company: "JPMorganChase",
      role: "Software Engineering Intern",
      location: "Bangalore, Mumbai",
      stipend: "₹60,000-₹1.00 Lakh/month",
      apply: "https://careers.jpmorgan.com/"
    },
    {
      company: "Goldman Sachs",
      role: "Summer Analyst Intern",
      location: "Bangalore, Hyderabad",
      stipend: "₹80,000-₹1.20 Lakh/month",
      apply: "https://www.goldmansachs.com/careers/"
    },
    {
      company: "Morgan Stanley",
      role: "Technology Summer Analyst",
      location: "Mumbai",
      stipend: "₹70,000-₹1.20 Lakh/month",
      apply: "https://www.morganstanley.com/careers"
    },
    {
      company: "Siemens",
      role: "Engineering Intern",
      location: "Bengaluru, Pune",
      stipend: "₹30,000-₹60,000/month",
      apply: "https://www.siemens.com/global/en/company/jobs.html"
    },
    {
      company: "Bosch",
      role: "Software Engineering Intern",
      location: "Bengaluru",
      stipend: "₹25,000-₹50,000/month",
      apply: "https://www.bosch.in/careers/"
    },
    {
      company: "SAP",
      role: "Developer Intern",
      location: "Bengaluru",
      stipend: "₹60,000-₹1.00 Lakh/month",
      apply: "https://jobs.sap.com/"
    },
    {
      company: "Meesho",
      role: "Software Engineering Intern",
      location: "Bengaluru",
      stipend: "₹60,000-₹1.00 Lakh/month",
      apply: "https://www.meesho.io/jobs"
    }
  ];

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={() => {}}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            color: "#2563eb",
            cursor: "pointer",
            fontSize: "17px",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          ← Back
        </button>

        <h1
          style={{
            textAlign: "center",
            color: "#1e40af",
            fontSize: "42px",
            marginBottom: "15px",
          }}
        >
          🚀 More Internship Opportunities
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Discover even more internship opportunities from leading companies.
        </p>

        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: window.innerWidth <= 768 ? "10px" : "25px",
    alignItems: "stretch",
  }}
>
          {internships.map((job, index) => (
            <div
              key={index}
              style={{
  background: "#fff",
  borderRadius: "15px",
  padding: window.innerWidth <= 768 ? "12px" : "25px",
  boxShadow: "0 5px 15px rgba(0,0,0,.08)",
  minWidth: 0,
  overflow: "hidden",
  transition: "0.3s",
}}
            >
              <h2
  style={{
    color: "#2563eb",
    fontSize: window.innerWidth <= 768 ? "14px" : "28px",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
  }}
>
  {job.company}
</h2>

              <p
  style={{
    fontSize: window.innerWidth <= 768 ? "12px" : "16px",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
  }}
>
  <b>Role:</b> {job.role}
</p>

<p
  style={{
    fontSize: window.innerWidth <= 768 ? "12px" : "16px",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
  }}
>
  <b>Location:</b> {job.location}
</p>

<p
  style={{
    fontSize: window.innerWidth <= 768 ? "12px" : "16px",
    wordBreak: "break-word",
    overflowWrap: "anywhere",
  }}
>
  <b>Stipend:</b> {job.stipend}
</p>

              <button
                onClick={() => {
    window.location.href = job.apply;
  }}
                style={{
                  marginTop: "15px",
                  width: "100%",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding: window.innerWidth <= 768 ? "8px" : "12px",
fontSize: window.innerWidth <= 768 ? "12px" : "16px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
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