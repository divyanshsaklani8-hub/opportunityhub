import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function HomeScholarships() {
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
            fontWeight: "600",
            marginBottom: "25px",
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
              🎓 Scholarship Opportunities
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              Scholarships help students achieve their educational dreams
              without worrying about financial limitations. Every year,
              thousands of scholarships are offered by governments,
              universities, NGOs, research organizations and multinational
              companies.
            </p>

            <p
              style={{
                marginTop: "18px",
                fontSize: "18px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              OpportunityHub collects verified scholarship opportunities
              from trusted organizations so students can easily discover
              funding programs that match their academic background,
              achievements and career goals. Our mission is to ensure that
              no deserving student misses an opportunity simply because they
              couldn't find the right information.
            </p>

            <button
              onClick={() => navigate("/explore-scholarships")}
              style={{
                marginTop: "35px",
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "16px 32px",
                borderRadius: "12px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "17px",
              }}
            >
              Explore Scholarships →
            </button>

          </div>

          <img
            src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Scholarships"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,.15)",
            }}
          />
        </div>
      </section>

      {/* BENEFITS */}

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
              fontSize: "40px",
              color: "#1e3a8a",
              marginBottom: "50px",
            }}
          >
            Why Apply for Scholarships?
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
                icon: "💰",
                title: "Financial Support",
                text: "Reduce tuition fees and education expenses."
              },
              {
                icon: "🏆",
                title: "Recognition",
                text: "Scholarships recognize academic excellence and talent."
              },
              {
                icon: "🌎",
                title: "Global Education",
                text: "Study at prestigious universities around the world."
              },
              {
                icon: "📚",
                title: "Academic Growth",
                text: "Focus on learning without financial stress."
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  padding: "30px",
                  textAlign: "center",
                  boxShadow: "0 8px 20px rgba(0,0,0,.08)",
                }}
              >
                <div style={{ fontSize: "55px" }}>
                  {item.icon}
                </div>

                <h3
                  style={{
                    color: "#2563eb",
                    marginTop: "20px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "#666",
                    marginTop: "15px",
                    lineHeight: "28px",
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
            textAlign: "center",
            color: "#1e3a8a",
            fontSize: "40px",
            marginBottom: "30px",
          }}
        >
          Education Should Never Stop
        </h2>

        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200"
          alt="Education"
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
          Education has the power to transform lives, yet financial barriers
          prevent many talented students from pursuing their dreams.
          Scholarships are designed to remove these barriers by rewarding
          academic excellence, leadership, innovation and determination.
          OpportunityHub provides a centralized platform where students can
          explore verified scholarships from India and abroad without wasting
          time searching multiple websites. Whether you are pursuing engineering,
          medicine, management, arts or research, scholarships can open doors
          to world-class education and future career success.
        </p>

        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <button
            onClick={() => navigate("/view-live-scholarship-database")}
            style={{
              background: "#2563eb",
              color: "#fff",
              border: "none",
              padding: "18px 40px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            View Live Scholarship Database →
          </button>
        </div>

      </section>

      <Footer />
    </>
  );
}