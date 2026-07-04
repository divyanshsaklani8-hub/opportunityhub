import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function MoreHackathons() {
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
      organizer: "GitHub",
      hackathon: "GitHub Universe Hackathon",
      mode: "Online",
      prize: "$5,000",
      apply: "https://github.com/",
    },
    {
      organizer: "Meta",
      hackathon: "Meta Hacker Cup",
      mode: "Online",
      prize: "$20,000",
      apply: "https://www.facebook.com/codingcompetitions/hacker-cup",
    },
    {
      organizer: "Atlassian",
      hackathon: "Codegeist",
      mode: "Online",
      prize: "$170,000",
      apply: "https://www.atlassian.com/blog/development/codegeist-2025-kickoff",
    },
    {
      organizer: "NASA",
      hackathon: "NASA Space Apps Challenge",
      mode: "Hybrid",
      prize: "Global Recognition",
      apply: "https://www.spaceappschallenge.org/",
    },
    {
      organizer: "Flipkart",
      hackathon: "Flipkart GRID",
      mode: "Online",
      prize: "₹6,00,000",
      apply: "https://unstop.com/",
    },
    {
      organizer: "Adobe",
      hackathon: "Adobe GenSolve",
      mode: "Online",
      prize: "₹4,00,000",
      apply: "https://www.adobe.com/",
    },
    {
      organizer: "Samsung",
      hackathon: "Samsung Solve for Tomorrow",
      mode: "Offline",
      prize: "₹1 Crore",
      apply: "https://www.samsung.com/in/solvefortomorrow/",
    },
    {
      organizer: "Intel",
      hackathon: "Intel AI Hackathon",
      mode: "Online",
      prize: "$10,000",
      apply: "https://www.intel.com/",
    },
    {
      organizer: "HackerEarth",
      hackathon: "Hack the Future",
      mode: "Online",
      prize: "Cash prizes,internships & job opportunities",
      apply: "https://www.hackerearth.com/challenges",
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
          🚀 More Hackathons
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Discover even more national and international hackathons.
        </p>

  <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "25px",
    alignItems: "stretch",
  }}
>
                      {hackathons.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "15px",
                padding: "25px",
                boxShadow: "0 5px 15px rgba(0,0,0,.08)",
              }}
            >
              <h2
                style={{
                  color: "#2563eb",
                  marginBottom: "15px",
                }}
              >
                {item.hackathon}
              </h2>

              <p style={{ marginBottom: "8px" }}>
                <strong>Organizer:</strong> {item.organizer}
              </p>

              <p style={{ marginBottom: "8px" }}>
                <strong>Mode:</strong> {item.mode}
              </p>

              <p style={{ marginBottom: "18px" }}>
                <strong>Prize:</strong> {item.prize}
              </p>

              <button
                onClick={() => {
    window.location.href = item.apply;
  }}
                style={{
                  width: "100%",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding: "12px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
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