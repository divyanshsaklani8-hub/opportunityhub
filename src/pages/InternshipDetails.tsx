import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function InternshipDetails() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        darkMode={false}
        setDarkMode={() => {}}
        searchTerm=""
        setSearchTerm={() => {}}
        handleSearch={() => {}}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#2563eb",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        >
          ← Back
        </button>

        <div
  style={{
    display: "grid",
    gridTemplateColumns: "1.2fr 1fr",
    gap: "40px",
    alignItems: "center",
    marginBottom: "30px",
  }}
>
  <div>
    <h1
      style={{
        fontSize: "42px",
        marginBottom: "15px",
        color: "#1e3a8a",
      }}
    >
      Browse Internship Opportunities
    </h1>

    <p
      style={{
        fontSize: "18px",
        color: "#555",
        lineHeight: "32px",
      }}
    >
      Internships help students gain real-world experience, improve technical
      skills, build professional networks, and increase placement opportunities.
      Whether you're a first-year student or preparing for placements,
      internships are the best way to strengthen your resume and kickstart your
      career.
    </p>

    <div
      style={{
        display: "flex",
        gap: "15px",
        marginTop: "25px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          background: "#e0f2fe",
          padding: "12px 18px",
          borderRadius: "10px",
          fontWeight: "600",
        }}
      >
        💼 500+ Internships
      </div>

      <div
        style={{
          background: "#dcfce7",
          padding: "12px 18px",
          borderRadius: "10px",
          fontWeight: "600",
        }}
      >
        🏢 Top Companies
      </div>

      <div
        style={{
          background: "#fef3c7",
          padding: "12px 18px",
          borderRadius: "10px",
          fontWeight: "600",
        }}
      >
        🚀 Career Growth
      </div>
    </div>
  </div>

  <img
    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000"
    alt="Students Working"
    style={{
      width: "100%",
      borderRadius: "18px",
      boxShadow: "0 12px 30px rgba(0,0,0,.15)",
    }}
  />
</div>
<div
  style={{
    marginTop: "45px",
    background: "#2563eb",
    color: "white",
    borderRadius: "20px",
    padding: "35px",
    textAlign: "center",
  }}
>
  <h2 style={{ marginBottom: "15px" }}>
    🌍 Internship Success Statistics
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: "25px",
      marginTop: "30px",
    }}
  >
    <div>
      <h1>500+</h1>
      <p>Internships Listed</p>
    </div>

    <div>
      <h1>100+</h1>
      <p>Partner Companies</p>
    </div>

    <div>
      <h1>50K+</h1>
      <p>Students Reached</p>
    </div>

    <div>
      <h1>95%</h1>
      <p>Verified Opportunities</p>
    </div>
  </div>
</div>
        <hr style={{ margin: "35px 0" }} />

       <hr style={{ margin: "35px 0" }} />

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
  }}
>
  <div>
    <h2>🎯 Why Should You Do an Internship?</h2>

    <ul
      style={{
        lineHeight: "35px",
        fontSize: "17px",
      }}
    >
      <li>Gain real industry experience.</li>
      <li>Improve your technical and communication skills.</li>
      <li>Strengthen your resume.</li>
      <li>Increase chances of campus placements.</li>
      <li>Get PPO (Pre-Placement Offer).</li>
      <li>Build a strong LinkedIn profile.</li>
    </ul>
  </div>

  <div
    style={{
      background: "#eff6ff",
      borderRadius: "18px",
      padding: "30px",
      textAlign: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,.08)",
    }}
  >
    <h2 style={{ color: "#2563eb", marginBottom: "20px" }}>
      📈 Internship Benefits
    </h2>

    <div style={{ fontSize: "18px", lineHeight: "45px" }}>
      💼 Real Experience <br />
      🚀 Better Resume <br />
      🤝 Networking <br />
      💰 PPO Opportunities <br />
      🌟 Skill Development
    </div>
  </div>
</div>

        <hr style={{ margin: "35px 0" }} />

        <h2>🏢 Top Companies Hiring Interns</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {[
            "Google",
            "Microsoft",
            "Amazon",
            "Adobe",
            "Flipkart",
            "Infosys",
            "TCS",
            "Wipro",
          ].map((company) => (
            <div
              key={company}
              style={{
                background: "#f5f7ff",
                padding: "18px",
                borderRadius: "12px",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              {company}
            </div>
          ))}
        </div>

        <hr style={{ margin: "35px 0" }} />

        <hr style={{ margin: "35px 0" }} />

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
  }}
>
  <div>
    <h2>📝 How to Apply?</h2>

    <ol
      style={{
        lineHeight: "35px",
        fontSize: "17px",
      }}
    >
      <li>Create a professional Resume.</li>
      <li>Build a LinkedIn Profile.</li>
      <li>Prepare your Portfolio or GitHub.</li>
      <li>Apply to verified opportunities.</li>
      <li>Prepare for Online Assessments.</li>
      <li>Attend Interviews confidently.</li>
    </ol>
  </div>

  <div
    style={{
      background: "#fefce8",
      borderRadius: "18px",
      padding: "30px",
      boxShadow: "0 10px 25px rgba(0,0,0,.08)",
    }}
  >
    <h2
      style={{
        color: "#ca8a04",
        marginBottom: "20px",
        textAlign: "center",
      }}
    >
      ✅ Application Checklist
    </h2>

    <div style={{ lineHeight: "40px", fontSize: "17px" }}>
      ☑ Resume Ready <br />
      ☑ LinkedIn Updated <br />
      ☑ GitHub / Portfolio <br />
      ☑ Cover Letter <br />
      ☑ Practice Aptitude <br />
      ☑ Apply Before Deadline
    </div>
  </div>
</div>
        <hr style={{ margin: "35px 0" }} />

        <hr style={{ margin: "35px 0" }} />

<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "center",
  }}
>
  <div>
    <h2>💡 Tips to Get Selected</h2>

    <ul
      style={{
        lineHeight: "35px",
        fontSize: "17px",
      }}
    >
      <li>Maintain a good CGPA.</li>
      <li>Practice DSA regularly.</li>
      <li>Work on real projects.</li>
      <li>Participate in Hackathons.</li>
      <li>Keep updating your Resume.</li>
      <li>Apply early before deadlines.</li>
    </ul>
  </div>

  <div
    style={{
      background: "#ecfeff",
      borderRadius: "18px",
      padding: "30px",
      textAlign: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,.08)",
    }}
  >
    <h2
      style={{
        color: "#0891b2",
        marginBottom: "20px",
      }}
    >
      🌟 Success Formula
    </h2>

    <div style={{ fontSize: "18px", lineHeight: "45px" }}>
      📚 Learn <br />
      💻 Build Projects <br />
      🧠 Practice DSA <br />
      🤝 Network <br />
      🎯 Stay Consistent
    </div>
  </div>
</div>
        <hr style={{ margin: "35px 0" }} />

        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <h2>Ready to Explore Live Opportunities?</h2>

          <p
            style={{
              color: "#666",
              marginBottom: "25px",
            }}
          >
            Click below to browse all available internships.
          </p>

          <button
            onClick={() => navigate("/live-internships")}
            style={{
              background: "#2563eb",
              color: "white",
              padding: "15px 35px",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Browse Live Internships →
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}