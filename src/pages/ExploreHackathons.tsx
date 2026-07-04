import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function ExploreHackathons() {
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
      name: "Smart India Hackathon (SIH)",
      organizer: "Government of India",
      prize: "₹1,00,000",
      mode: "Offline",
      deadline: "15 Sept 2026",
      link: "https://www.sih.gov.in/",
    },
    {
      name: "Devfolio Hackathon",
      organizer: "Devfolio",
      prize: "₹2,50,000",
      mode: "Hybrid",
      deadline: "22 Sept 2026",
      link: "https://devfolio.co/hackathons",
    },
    {
      name: "Unstop Coding Challenge",
      organizer: "Unstop",
      prize: "₹75,000",
      mode: "Online",
      deadline: "30 Sept 2026",
      link: "https://unstop.com/",
    },
    {
      name: "Hack2Skill Innovation Challenge",
      organizer: "Hack2Skill",
      prize: "₹3,00,000",
      mode: "Online",
      deadline: "05 Oct 2026",
      link: "https://hack2skill.com/",
    },
    {
      name: "MLH Global Hack Week",
      organizer: "Major League Hacking",
      prize: "Goodies + Certificates",
      mode: "Online",
      deadline: "08 Oct 2026",
      link: "https://mlh.io/",
    },
    {
      name: "Google Solution Challenge",
      organizer: "Google",
      prize: "$3,000",
      mode: "Online",
      deadline: "15 Oct 2026",
      link: "https://developers.google.com/community",
    },
    {
      name: "Microsoft Imagine Cup",
      organizer: "Microsoft",
      prize: "$100,000",
      mode: "Online",
      deadline: "20 Oct 2026",
      link: "https://imaginecup.microsoft.com/",
    },
    {
      name: "Amazon ML Challenge",
      organizer: "Amazon",
      prize: "₹2,00,000",
      mode: "Online",
      deadline: "25 Oct 2026",
      link: "https://www.amazon.science/",
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
    width: "100%",
    paddingLeft: "20px",
    paddingTop: "20px",
  }}
>
  <button
    onClick={() => navigate(-1)}
    style={{
      background: "transparent",
      border: "none",
      color: "#2563eb",
      fontSize: "17px",
      cursor: "pointer",
      fontWeight: "600",
      padding: 0,
    }}
  >
    ← Back
  </button>
</div>

<div
  style={{
    maxWidth: "1250px",
    margin: "20px auto 40px",
    padding: "20px",
  }}
>

        <h1
          style={{
            textAlign: "center",
            color: "#1e40af",
            fontSize: "42px",
            marginBottom: "10px",
          }}
        >
          🏆 Explore Hackathons
        </h1>

        <p
  style={{
    textAlign: "center",
    color: "#666",
    fontSize: "18px",
    marginBottom: "40px",
  }}
>
  Discover India's top hackathons and coding competitions.
</p>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  }}
>
  {hackathons.map((hackathon, index) => (
    <div
      key={index}
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        background: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h3>{hackathon.name}</h3>
      <p><strong>Organizer:</strong> {hackathon.organizer}</p>
      <p><strong>Prize:</strong> {hackathon.prize}</p>
      <p><strong>Mode:</strong> {hackathon.mode}</p>
      <p><strong>Deadline:</strong> {hackathon.deadline}</p>
    </div>
  ))}
</div>
                <div
          style={{
            marginTop: "50px",
            textAlign: "center",
          }}
        >
        </div>
      </div>

      <Footer />
    </>
  );
}