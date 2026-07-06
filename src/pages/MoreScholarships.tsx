import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function MoreScholarships() {
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
      provider: "Mirae Asset Foundation",
      scholarship: "Mirae Asset Scholarship",
      amount: "Up to ₹50,000",
      eligibility: "UG & PG students with good academic record and financial need",
      deadline: "Annual (Jul-Sep)",
      apply:
        "https://india.miraeasset.org",
    },
    {
      provider: "Foundation for Execllence",
      scholarship: "FFE Scholarship",
      amount: "Up to full tuition fee",
      eligibility: "Engineering, Medical & Law students from low-income families",
      deadline: "Annual (Jul-Sep)",
      apply:
        "https://ffe.org/",
    },
    {
      provider: "OP Jindal Group",
      scholarship: "OP JEMS Scholarship",
      amount: "₹1,50,000",
      eligibility: "Meritorious students from selected Engineering & Management institutes",
      deadline: "Annual (Aug-Sep)",
      apply:
        "https://www.opjems.com/",
    },
    {
      provider: "IET India",
      scholarship: "IET Scholarship",
      amount: "Up to ₹10,00,000",
      eligibility: "CUndergraduate Engineering Students",
      deadline: "Annual (May-Jun)",
      apply:
        "https://scholarships.theietevents.com/",
    },
    {
      provider: "Ericsson India",
      scholarship: "Ericsson Scholarship",
      amount: "Varies (CSR Scholarship)",
      eligibility: "Engineering/STEM students",
      deadline: "Annual",
      apply:
        "https://www.ericsson.com/en/careers",
    },
    {
      provider: "Capgemini India",
      scholarship: "Capgemini Scholarship",
      amount: "Varies",
      eligibility: "Meritorious students under CSR/partner scholarship  initiatives",
      deadline: "Annual",
      apply:
        "https://www.capgemini.com/careers/",
    },
    {
      provider: "Lenovo Foundation",
      scholarship: "Lenovo Scholarship",
      amount: "Varies",
      eligibility: "STEM students under education initiatives",
      deadline: "Annual",
      apply:
        "https://www.lenovo.com/us/en/about/foundation/",
    },
    {
      provider: "Legrand Groups",
      scholarship: "Legrand Scholarship",
      amount: "Up to ₹60,000/Up to ₹1,00,000",
      eligibility: "Indian students pursuing B.E./B.Tech,B.Arch,BBA,B.Com,B.Sc.",
      deadline: "Annual",
      apply:
        "https://www.buddy4study.com/page/legrand-empowering-scholarship-program",
    },
    {
      provider: "Bharti Airtel Foundation",
      scholarship: "Bharti Airtel Scholarship",
      amount: "100% annual tuition fees + hostel & mess fees + laptop",
      eligibility: "First-year undergraduate engineering/technology students at eligible top institutes",
      deadline: "Annual",
      apply:
        "https://www.bhartiairtelfoundation.org/bharti-airtel-scholarship",
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
          🎓 More Scholarship Opportunities
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Explore additional verified scholarship opportunities from trusted organizations.
        </p>

        <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: window.innerWidth <= 768 ? "10px" : "25px",
    alignItems: "stretch",
  }}
>
                      {scholarships.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "15px",
                padding: window.innerWidth <= 768 ? "12px" : "25px",
                boxShadow: "0 5px 15px rgba(0,0,0,.08)",
                minWidth: 0,
  overflow: "hidden",
                transition: "0.3s",
              }}
            >
              <h2
                style={{
                  color: "#2563eb",
                  fontSize: window.innerWidth <= 768 ? "14px" : "28px",
                  wordBreak: "break-word",
    overflowWrap: "anywhere",
                  marginBottom: "10px",
                }}
              >
                {item.scholarship}
              </h2>

              <p>
                <strong>Provider:</strong> {item.provider}
              </p>

              <p>
                <strong>Eligibility:</strong> {item.eligibility}
              </p>

              <p>
                <strong>Amount:</strong> {item.amount}
              </p>

              <p>
                <strong>Deadline:</strong> {item.deadline}
              </p>

              <button
                onClick={() => {
    window.location.href = item.apply;
  }}
                style={{
                  marginTop: "18px",
                  width: "100%",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding: window.innerWidth <= 768 ? "8px" : "12px",
fontSize: window.innerWidth <= 768 ? "12px" : "16px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
              <section
        style={{
          marginTop: "70px",
          background: "#f8fafc",
          padding: "50px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#1e40af",
            fontSize: "34px",
            marginBottom: "20px",
          }}
        >
          Keep Exploring Opportunities 🎯
        </h2>

        <p
          style={{
            color: "#555",
            fontSize: "18px",
            lineHeight: "30px",
            maxWidth: "850px",
            margin: "0 auto 35px",
          }}
        >
          Every year, thousands of scholarships are announced by governments,
          universities, NGOs and top companies. Keep checking OpportunityHub
          regularly so you never miss an important opportunity that could help
          fund your education and shape your future.
        </p>
      </section>
      </div>

      <Footer />
    </>
  );
}