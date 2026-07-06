import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function ViewLiveScholarshipDatabase() {
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

  const scholarships = [
    {
      provider: "Eaton India Foundation",
      scholarship: "Eaton Scholarship",
      amount: "Mentorship support",
      eligibility: "Women engineering students(UG,PG)",
      deadline: "Annual (varies)",
      apply:
        "https://www.eaton.com/in/en-us/company/sustainability/eaton-india-foundation/eaton-scholarship.html",
    },
    {
      provider: "Wabtec Corporation",
      scholarship: "Wabtec Scholarship",
      amount: "Upto full tuition support",
      eligibility: "Economically disadvantaged engineering students in India",
      deadline: "Annual",
      apply:
        "https://ffe.org/ffe-wabtec-scholarship-program/",
    },
    {
      provider: "Intuit India",
      scholarship: "Intuit Scholarship",
      amount: "₹Varies (scholarshipunder Intuit Rise program)",
      eligibility: "Girl students from economically weaker families",
      deadline: "Annual",
      apply:
        "https://www.intuit.com/in/company/corporate-responsibility/educating-the-girl-child/",
    },
    {
      provider: "Aditya Birla Group",
      scholarship: "Aditya Birla Scholarship",
      amount: "₹1.5 Lakh/year",
      eligibility: "Top students from IITs, BITs, IIMs",
      deadline: "September (annual)",
      apply:
        "https://www.adityabirlascholars.net/",
    },
    {
      provider: "K.C. Mahindra Education Trust",
      scholarship: "Mahindra Group Scholarship",
      amount: "Up to ₹10 lakh",
      eligibility: "Indian students pursuing higher studies",
      deadline: "Mar-Apr (varies by scheme)",
      apply:
        "https://www.kcmet.org/what-we-do-Scholarship-Grants.aspx/index.aspx",
    },
    {
      provider: "Adani Group",
      scholarship: "AALP Scholarship",
      amount: "Up to full tuition fee",
      eligibility: "Students at partner institutes",
      deadline: "Annual",
      apply:
        "https://aalp.adani.com",
    },
    {
      provider: "Ajit Prabhu Foundation",
      scholarship: "Quest Global Scholarship",
      amount: "Varies (merit-based financial assistance)",
      eligibility: "SEngineering/STEM students from selectedinstitutions",
      deadline: "Annual",
      apply:
        "https://www.quest-global.com/careers/",
    },
    {
      provider: "Alstom India",
      scholarship: "Alstom Scholarship",
      amount: "Up to ₹75,000",
      eligibility: "STEM/Engineering students from economically weaker sections",
      deadline: "Annual (aug-Oct)",
      apply:
        "https://www.alstom.com/alstom-india-scholarship-program-unlocking-futures",
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
            background: "transparent",
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
          📚 Live Scholarship Database
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Browse all verified scholarship opportunities in one place.
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
                <th style={{ padding: "16px" }}>Provider</th>
                <th style={{ padding: "16px" }}>Scholarship</th>
                <th style={{ padding: "16px" }}>Eligibility</th>
                                <th style={{ padding: "16px" }}>Amount</th>
                <th style={{ padding: "16px" }}>Deadline</th>
                <th style={{ padding: "16px" }}>Apply</th>
              </tr>
            </thead>

            <tbody>
              {scholarships.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "16px" }}>
                    {item.provider}
                  </td>

                  <td style={{ padding: "16px" }}>
                    {item.scholarship}
                  </td>

                  <td style={{ padding: "16px" }}>
                    {item.eligibility}
                  </td>

                  <td style={{ padding: "16px" }}>
                    {item.amount}
                  </td>

                  <td style={{ padding: "16px" }}>
                    {item.deadline}
                  </td>

                  <td style={{ padding: "16px" }}>
                    <button
                      onClick={() => {
    window.location.href = item.apply;
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
            onClick={() => navigate("/more-scholarships")}
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
            Explore More Scholarships →
          </button>
        </div>

      </div>

      <Footer />
    </>
  );
}