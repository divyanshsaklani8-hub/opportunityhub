import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function VisitLiveInternshipDatabase() {
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
      company: "Wipro",
      role: "Internship Program",
      location: "Bangalore, Hyderabad, Pune",
      stipend: "₹20,000-₹40,000/month",
      duration: "2 Months",
      apply: "https://careers.wipro.com/content/Early-Careers/",
    },
    {
      company: "Zoho",
      role: "Software Developer Intern",
      location: "Chennai",
      stipend: "₹30,000-₹45,000/month",
      duration: "2-6 Months",
      apply: "https://www.zoho.com/careers/",
    },
    {
      company: "Paytm",
      role: "Product & Tech Intern",
      location: "Noida",
      stipend: "₹40,000/month",
      duration: "3-6 Months",
      apply: "https://paytm.com/careers",
    },
    {
      company: "PhonePe",
      role: "Software Engineering Intern",
      location: "Bengaluru",
      stipend: "₹60,000-₹1,00,000/month",
      duration: "3-6 Months",
      apply: "https://www.phonepe.com/careers/",
    },
    {
      company: "KPMG",
      role: "Audit & Advisory Intern",
      location: "Gurugram, Bengaluru, Mumbai",
      stipend: "₹25,000-₹50,000/month",
      duration: "2-3 Months",
      apply: "https://kpmg.com/in/en/home/careers.html",
    },
    {
      company: "Qualcomm",
      role: "Engineering Intern",
      location: "Bangalore, Hyderabad",
      stipend: "₹60,000-₹1,20,000/month",
      duration: "3, 6, 0r 11 Months",
      apply: "https://www.qualcomm.com/company/careers/internships-and-early-in-career-opportunities/india",
    },
    {
      company: "Samsung",
      role: "R & D Intern",
      location: "Bengaluru, Noida",
      stipend: "₹40,000-₹80,000/month",
      duration: "3-6 Months",
      apply: "https://sec.wd3.myworkdayjobs.com/Samsung_Careers",
    },
    {
      company: "Accenture",
      role: "Technology Intern",
      location: "Bengaluru, Hyderabad, Pune, Gurugram",
      stipend: "₹25,000-₹50,000/month",
      duration: "2-3 Months",
      apply: "https://www.accenture.com/in-en/careers",
    },
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
  className="database-page"
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
            marginBottom: "10px",
            fontSize: "42px",
          }}
        >
          📚 Live Internship Database
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Browse all verified internship opportunities in one place.
        </p>

        <div
  className="database-table"
  style={{
    overflowX:"auto",
    background:"#fff",
    borderRadius:"15px",
    boxShadow:"0 5px 15px rgba(0,0,0,.08)",
  }}
>
          <table
  style={{
    width: "100%",
    minWidth: "900px",
    borderCollapse: "collapse",
  }}
>
            <thead
              style={{
                background: "#2563eb",
                color: "#fff",
              }}
            >
              <tr>
                <th style={{ padding: "16px" }}>Company</th>
                <th style={{ padding: "16px" }}>Role</th>
                <th style={{ padding: "16px" }}>Location</th>
                <th style={{ padding: "16px" }}>Duration</th>
                <th style={{ padding: "16px" }}>Stipend</th>
                <th style={{ padding: "16px" }}>Apply</th>
              </tr>
            </thead>

            <tbody>
              {internships.map((job, index) => (
                <tr
                  key={index}
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "16px" }}>{job.company}</td>
                  <td style={{ padding: "16px" }}>{job.role}</td>
                  <td style={{ padding: "16px" }}>{job.location}</td>
                  <td style={{ padding: "16px" }}>{job.duration}</td>
                  <td style={{ padding: "16px" }}>{job.stipend}</td>

                  <td style={{ padding: "16px" }}>
                    <button
                       onClick={() => {
    window.location.href = job.apply;
  }}
                      style={{
                        background: "#2563eb",
                        color: "#fff",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      Apply
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

       <div
  className="database-btn"
  style={{
    marginTop:"50px",
    textAlign:"center",
  }}
>
          <button
            onClick={() => navigate("/more-internships")}
            style={{
              background: "#1e40af",
              color: "#fff",
              border: "none",
              padding: "16px 35px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            Explore More Internships →
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}