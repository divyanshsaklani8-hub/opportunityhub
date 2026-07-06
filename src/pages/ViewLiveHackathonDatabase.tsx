import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function ViewLiveHackathonDatabase() {
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

  const hackathons = [
    {
      organizer: "Government of India",
      hackathon: "Smart India Hackathon",
      mode: "Offline",
      prize: "₹1,00,000",
      deadline: "15 Sept 2026",
      apply: "https://www.sih.gov.in/",
    },
    {
      organizer: "Devfolio",
      hackathon: "Devfolio Hackathon",
      mode: "Hybrid",
      prize: "₹2,50,000",
      deadline: "22 Sept 2026",
      apply: "https://devfolio.co/hackathons",
    },
    {
      organizer: "Unstop",
      hackathon: "Unstop Coding Challenge",
      mode: "Online",
      prize: "₹75,000",
      deadline: "30 Sept 2026",
      apply: "https://unstop.com/",
    },
    {
      organizer: "Hack2Skill",
      hackathon: "Hack2Skill Innovation Challenge",
      mode: "Online",
      prize: "₹3,00,000",
      deadline: "05 Oct 2026",
      apply: "https://hack2skill.com/",
    },
    {
      organizer: "MLH",
      hackathon: "Global Hack Week",
      mode: "Online",
      prize: "Goodies + Certificates",
      deadline: "08 Oct 2026",
      apply: "https://mlh.io/",
    },
    {
      organizer: "Google",
      hackathon: "Google Solution Challenge",
      mode: "Online",
      prize: "$3,000",
      deadline: "15 Oct 2026",
      apply: "https://developers.google.com/community",
    },
    {
      organizer: "Microsoft",
      hackathon: "Imagine Cup",
      mode: "Online",
      prize: "$100,000",
      deadline: "20 Oct 2026",
      apply: "https://imaginecup.microsoft.com/",
    },
    {
      organizer: "Amazon",
      hackathon: "Amazon ML Challenge",
      mode: "Online",
      prize: "₹2,00,000",
      deadline: "25 Oct 2026",
      apply: "https://www.amazon.science/",
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
          🏆 Live Hackathon Database
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Browse all verified hackathons and coding competitions in one place.
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
                <th style={{ padding: "16px" }}>Organizer</th>
                <th style={{ padding: "16px" }}>Hackathon</th>
                <th style={{ padding: "16px" }}>Mode</th>
                <th style={{ padding: "16px" }}>Prize</th>
                <th style={{ padding: "16px" }}>Deadline</th>
                <th style={{ padding: "16px" }}>Apply</th>
              </tr>
            </thead>

            <tbody>
              {hackathons.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "16px" }}>
                    {item.organizer}
                  </td>

                  <td style={{ padding: "16px" }}>
                    {item.hackathon}
                  </td>

                  <td style={{ padding: "16px" }}>
                    {item.mode}
                  </td>

                  <td style={{ padding: "16px" }}>
                    {item.prize}
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
            onClick={() => navigate("/more-hackathons")}
            style={{
              background: "#1e40af",
              color: "#fff",
              border: "none",
              padding: "18px 40px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Explore More Hackathons →
          </button>
        </div>
              </div>

      <Footer />
    </>
  );
}