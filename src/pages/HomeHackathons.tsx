import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function HomeHackathons() {
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
              🏆 Hackathon Opportunities
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              Hackathons are one of the best ways to improve your technical
              skills, solve real-world problems, collaborate with talented
              students, and gain recognition from leading companies and
              organizations.
            </p>

            <p
              style={{
                marginTop: "18px",
                fontSize: "18px",
                lineHeight: "34px",
                color: "#555",
              }}
            >
              OpportunityHub provides verified hackathons from Google,
              Microsoft, Smart India Hackathon (SIH), Devfolio, Unstop,
              Hack2Skill, MLH and many other trusted platforms. Whether you're
              a beginner or an experienced developer, you'll find competitions
              that challenge your creativity and help build an outstanding
              portfolio.
            </p>

            <button
  onClick={() => navigate("/explore-hackathons")}
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
              Explore Hackathons →
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
            alt="Hackathons"
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
            Why Participate in Hackathons?
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
                icon: "💡",
                title: "Innovation",
                text: "Build unique solutions to real-world problems within a limited time."
              },
              {
                icon: "🤝",
                title: "Teamwork",
                text: "Collaborate with talented developers, designers and innovators."
              },
              {
                icon: "🏅",
                title: "Win Prizes",
                text: "Earn cash rewards, internships, certificates and exciting goodies."
              },
              {
                icon: "🚀",
                title: "Career Growth",
                text: "Showcase your skills to recruiters and improve your resume."
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
                <div
                  style={{
                    fontSize: "55px",
                  }}
                >
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
          Build. Compete. Learn. Grow.
        </h2>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200"
          alt="Hackathon"
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
          Hackathons are more than coding competitions—they are opportunities
          to learn, innovate and make meaningful connections with people who
          share the same passion for technology. Participants work under time
          constraints to design, develop and present innovative products,
          gaining valuable experience in problem-solving, teamwork, leadership,
          communication and project management. Many students receive internship
          offers, Pre-Placement Offers (PPOs), mentorship opportunities and
          industry recognition through hackathons. OpportunityHub brings all
          major national and international hackathons together on a single
          platform so that students never miss an opportunity to showcase their
          talent and build an impressive portfolio.
        </p>

        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <button
  onClick={() => navigate("/view-live-hackathon-database")}
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
            View Live Hackathon Database →
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}