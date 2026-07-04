import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function HomeInternships() {
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

      {/* HERO */}
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "52px",
                color: "#1e3a8a",
                marginBottom: "20px",
              }}
            >
              💼 Internship Opportunities
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              Internships are one of the most important stepping stones in a
              student's career journey. They provide real-world exposure,
              practical experience, industry knowledge, professional networking,
              and an opportunity to work with experienced mentors.
            </p>

            <p
              style={{
                marginTop: "18px",
                fontSize: "18px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              At OpportunityHub, we bring together verified internship
              opportunities from Google, Microsoft, Amazon, NVIDIA, Flipkart,
              Meta, startups, research organizations, and many more. Our goal
              is to make finding quality internships simple, transparent, and
              accessible for every student in India.
            </p>

            <button
              onClick={() => navigate("/explore-live-internships")}
              style={{
                marginTop: "35px",
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "16px 32px",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              Explore Live Internships →
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt="Internships"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,.15)",
            }}
          />
        </div>
      </section>

      {/* WHY INTERNSHIPS */}

      <section
        style={{
          background: "#f8fafc",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#1e3a8a",
              marginBottom: "50px",
              fontSize: "40px",
            }}
          >
            Why Internships Matter?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                icon: "💻",
                title: "Practical Experience",
                text: "Work on real industry projects and gain hands-on technical knowledge."
              },
              {
                icon: "🤝",
                title: "Professional Network",
                text: "Build valuable connections with recruiters, mentors and professionals."
              },
              {
                icon: "🚀",
                title: "Career Growth",
                text: "Improve your resume and increase your chances of landing full-time jobs."
              },
              {
                icon: "🌍",
                title: "Global Opportunities",
                text: "Apply for internships from top companies across India and worldwide."
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "white",
                  padding: "30px",
                  borderRadius: "18px",
                  textAlign: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "55px",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    marginTop: "20px",
                    color: "#2563eb",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: "15px",
                    lineHeight: "28px",
                    color: "#666",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section
        style={{
          maxWidth: "1100px",
          margin: "70px auto",
          padding: "20px",
        }}
      >
        <h2
          style={{
            color: "#1e3a8a",
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "40px",
          }}
        >
          Build Your Future Today
        </h2>

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
          alt="Students"
          style={{
            width: "100%",
            borderRadius: "20px",
            marginBottom: "35px",
          }}
        />

        <p
          style={{
            fontSize: "18px",
            lineHeight: "35px",
            color: "#555",
            textAlign: "justify",
          }}
        >
          Every successful professional starts somewhere, and internships are
          often the first step toward achieving career goals. Whether you are a
          first-year student exploring different domains, a third-year student
          preparing for placements, or a final-year student seeking industrial
          exposure, internships help bridge the gap between academics and
          industry. OpportunityHub ensures that students can discover trusted,
          verified, and updated opportunities without spending hours searching
          multiple websites. Our mission is to empower students by connecting
          them with opportunities that accelerate learning, enhance confidence,
          and prepare them for the future job market.
        </p>

        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <button
            onClick={() => navigate("/visit-live-internship-database")}
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "18px 38px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            View Live Internship Database →
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}