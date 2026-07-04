import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function ExploreScholarships() {
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
      name: "Larsen & Tourbo Scholarship",
      provider: "L&T Construction",
      amount: "₹13,400/month+Full M.Tech sponsorship",
      eligibility: "Civil Students",
      deadline: "Usually Dec-Mar cycle",
      link: "https://www.buddy4study.com/scholarship/l-t-build-india-scholarship",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-B-EbNN3Iy2vbbhP366Vk5Zk-9HGXKZS0J20PnAz-xzKJ6by0eidb0I&s=10"
    },

    {
      name: "DXC Technology Scholarship",
      provider: "DXC Technology",
      amount: "₹50,000",
      eligibility: "Women/transgender STEM students",
      deadline: "Sept(varies yearly cycle)",
      link: "https://www.buddy4study.com/page/dxc-progressing-minds-scholarship",
      logo: "https://media.cdn.gradconnection.com/uploads/9394b6f3-0f18-44bd-97da-64a8db055e57-DXC_Technology-banner_ET6DwLm.png"
    },

    {
      name: "Santoor Scholarship",
      provider: "Wipro + Santoor Foundation",
      amount: "₹24,000/year",
      eligibility: "Girls from low-income families",
      deadline: "Usually Sept-Oct cycle",
      link: "https://www.santoorscholarships.com/",
      logo: "https://etimg.etb2bimg.com/thumb/msid-111606394,width-1200,height-900,resizemode-4/.jpg"
    },

    {
      name: "Cummins India Scholarship",
      provider: "Cummins India Foundation",
      amount: "Tuition support",
      eligibility: "Engineering/diploma students, merit + need based",
      deadline: "Varies yearly",
      link: "https://www.cummins.com/careers",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Cummins_logo.svg/960px-Cummins_logo.svg.png?_=20250322002852"
    },

    {
      name: "Infosys Foundation Scholarship",
      provider: "Infosys",
      amount: "₹50,000",
      eligibility: "UG Students",
      deadline: "15 Oct 2026",
      link: "https://www.infosys.com/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
    },

    {
      name: "Tata Capital Pankh Scholarship",
      provider: "Tata Capital",
      amount: "₹12,000 - ₹50,000",
      eligibility: "School & College Students",
      deadline: "20 Sept 2026",
      link: "https://www.buddy4study.com/",
      logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3BqPqVy22HxSoDTJOsNJdyd0WDjsorcrRI7qadlXUbLt-lm94K6d91jhyphenhyphene6H5NvvfRjPfqP1NdhzKbz_EcA2hkQSJYnc2XUwq2GgP6Tx9RPJ-jPdkNAI2ooRY4MZ6-ke9ZEwt58Sa-mqlIWfM3pGhs7uLyLOoT-giMKH6uH87yW-xaqf_Ip_6jksPQLI/s573/TATA_CAPITAL.png"
    },

    {
      name: "HDFC Bank Parivartan Scholarship",
      provider: "HDFC Bank",
      amount: "₹75,000",
      eligibility: "Meritorious Students",
      deadline: "05 Oct 2026",
      link: "https://www.buddy4study.com/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg"
    },

    {
      name: "Reliance Foundation Scholarship",
      provider: "Reliance Foundation",
      amount: "₹2,00,000",
      eligibility: "Undergraduate Students",
      deadline: "10 Oct 2026",
      link: "https://scholarships.reliancefoundation.org/",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8yNmWwVpOSC5Se-ctMjrX1jHDQIunFhCyNbrDosokN8mgKVEEBVm23Ks&s=10"
    },

    {
      name: "SBI Foundation Scholarship",
      provider: "SBI Foundation",
      amount: "Up to ₹20 lakh",
      eligibility: "Class 9 to PG students, merit + income criteria",
      deadline: "Usually mid-year cycle",
      link: "https://www.sbiashascholarship.co.in",
      logo: "https://pimwp.s3-accelerate.amazonaws.com/2024/07/SvVpDWja-Untitled-design-19.jpg"
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
            fontSize: "17px",
            fontWeight: "600",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ← Back
        </button>

        <h1
          style={{
            textAlign: "center",
            fontSize: "42px",
            color: "#1e40af",
            marginBottom: "15px",
          }}
        >
          🎓 Explore Scholarships
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Browse verified scholarship opportunities from top companies,
          universities and organizations.
        </p>

       <div className="live-internships-grid">
                      {scholarships.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "25px",
                boxShadow: "0 8px 20px rgba(0,0,0,.08)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={item.logo}
                  alt={item.provider}
                  style={{
                    width: "55px",
                    height: "55px",
                    objectFit: "contain",
                  }}
                />

                <div>
                  <h2
                    style={{
                      color: "#1e40af",
                      margin: 0,
                      fontSize: "22px",
                    }}
                  >
                    {item.name}
                  </h2>

                  <p
                    style={{
                      color: "#666",
                      marginTop: "5px",
                    }}
                  >
                    {item.provider}
                  </p>
                </div>
              </div>

              <p>
                <strong>💰 Scholarship Amount:</strong> {item.amount}
              </p>

              <p>
                <strong>🎯 Eligibility:</strong> {item.eligibility}
              </p>

              <p>
                <strong>📅 Deadline:</strong> {item.deadline}
              </p>

              <button
                onClick={() => window.location.href = item.link}
                style={{
                  width: "100%",
                  marginTop: "18px",
                  padding: "14px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Apply Now →
              </button>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#1e40af",
              marginBottom: "15px",
            }}
          >
            🎓 Keep Exploring More Scholarships
          </h2>

          <p
            style={{
              color: "#666",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "30px",
              fontSize: "17px",
            }}
          >
            New scholarships are announced regularly by top companies,
            universities, governments and NGOs. Keep visiting OpportunityHub
            to stay updated with the latest verified opportunities that can
            help fund your education and achieve your career goals.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}