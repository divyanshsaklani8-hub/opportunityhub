import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function ExploreLiveInternships() {
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

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={() => {}}
      />

      <section
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
            marginBottom: "25px",
            fontWeight: "600",
          }}
        >
          ← Back
        </button>

        <h1
          style={{
            textAlign: "center",
            color: "#1e3a8a",
            fontSize: "45px",
            marginBottom: "15px",
          }}
        >
          🚀 Explore Live Internships
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "18px",
            marginBottom: "50px",
          }}
        >
          Apply to verified internship opportunities from top companies.
        </p>

        <div className="live-internships-grid">
          {[
            {
              company: "Apple",
              role: "Software Engineering Intern",
              location: "Hyderabad, Bangalore",
              stipend: "₹1.5-2.0 Lakh/month",
              logo:
                "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
              link: "https://www.apple.com/in/store",
            },
            {
              company: "Adobe",
              role: "Product Development Intern",
              location: "Noida, Hyderabad",
              stipend: "₹80,000-₹1.20 Lakh/month",
              logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HpwNmXWFlzj9jc93MKv78jSOvRtxfe8vKTRdsumXxQ&s=10",
              link: "https://careers.adobe.com/us/en/student",
            },
            {
              company: "Salesforce",
              role: "Software Engineering Intern",
              location: "Bangalore, Hyderabad",
              stipend: "₹90,000-₹1.20 Lakh/month",
              logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVeT95ioBPQeSMPgA88Xv-71C8oeLciSzgcBNrYZW2w&s",
              link: "https://careers.salesforce.com",
            },
            {
              company: "Intel",
              role: "Hardware & Software Intern",
              location: "Bengaluru",
              stipend: "₹45,000-₹80,000/month",
              logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdHmBcQBuYIPgKf7xHeCbKfQxOYbfBJ28O-vyUq8uZA&s=10",
              link: "https://jobs.intel.com",
            },
            {
              company: "Cisco",
              role: "Technical Intern",
              location: "Bengaluru",
              stipend: "₹50,000-₹1.00 Lakh/month",
              logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwPq3HKSLXNv82HZO11WKMMYCxlvFYZsSopOq4fYQRw&s=10",
              link: "https://jobs.cisco.com",
            },
            {
              company: "Oracle",
              role: "Technical Intern",
              location: "Bangalore, Hyderabad",
              stipend: "₹50,000-₹1.00 Lakh/month",
              logo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzUFwEAMtfXXswGIsyUa33wllYqoxUdCEiaxvmZy2NmJ8YWWKw6avaCOb&s=10",
              link: "https://careers.oracle.com",
            },
          ].map((item) => (
            <div
              key={item.company}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 8px 20px rgba(0,0,0,.1)",
                textAlign: "center",
              }}
            >
              <img
                src={item.logo}
                alt={item.company}
                style={{
                  width: "120px",
                  height: "70px",
                  objectFit: "contain",
                  marginBottom: "20px",
                }}
              />

              <h2
                style={{
                  color: "#2563eb",
                }}
              >
                {item.company}
              </h2>

              <p>
                <b>Role:</b> {item.role}
              </p>

              <p>
                <b>Location:</b> {item.location}
              </p>

              <p>
                <b>Stipend:</b> {item.stipend}
              </p>

              <button
                onClick={() => window.location.href = item.link}
                style={{
                  marginTop: "20px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding: "12px 28px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Apply Now →
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}