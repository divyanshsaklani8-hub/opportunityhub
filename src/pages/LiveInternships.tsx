import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { supabase } from "../lib/supabase";

export default function LiveInternships() {
  const navigate = useNavigate();

  const [internships, setInternships] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInternships();
  }, []);

 async function fetchInternships() {
  const { data, error } = await supabase
    .from("live_internships")
    .select("*")
    .order("id", { ascending: false });


  if (!error && data) {
    setInternships(data);
  }

  setLoading(false);
}

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
          maxWidth: "1200px",
          width: "100%",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            border: "none",
            background: "transparent",
            color: "#2563eb",
            cursor: "pointer",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        >
          ← Back
        </button>

        <h1
          style={{
            textAlign: "center",
            color: "#1e3a8a",
            marginBottom: "10px",
          }}
        >
          🚀 Live Internship Opportunities
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
          }}
        >
          Latest internships fetched from the Live Internship Database.
        </p>

        {loading ? (
          <h2 style={{ textAlign: "center" }}>Loading...</h2>
        ) : internships.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>
            No Live Internships Available
          </h2>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "25px",
            }}
          >
            {internships.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 8px 25px rgba(0,0,0,.08)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "20px" }}>
                  <h2>{item.title}</h2>

                  <p
                    style={{
                      color: "#555",
                      marginTop: "10px",
                      lineHeight: "25px",
                    }}
                  >
                    {item.description}
                  </p>

                  <div
                    style={{
                      marginTop: "20px",
                      display: "grid",
                      gap: "8px",
                      color: "#444",
                    }}
                  >
                    <span>🏢 {item.company}</span>
                    <span>📍 {item.location}</span>
                    <span>💰 {item.stipend}</span>
                    <span>🎓 {item.eligibility}</span>
                    <span>📅 {item.deadline}</span>
                  </div>

                  <button
                     onClick={() => {
    window.location.href = item.apply_link;
  }}
                    style={{
                      marginTop: "25px",
                      width: "100%",
                      background: "#2563eb",
                      color: "white",
                      border: "none",
                      padding: "14px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    Apply Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}