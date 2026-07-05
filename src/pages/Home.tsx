import '../App.css';
import {
  FaLaptopCode,
  FaGraduationCap,
  FaTrophy,
  FaArrowUp
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect,} from 'react';
import { supabase } from '../lib/supabase';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import FloatingSocialProof from "../components/FloatingSocialProof";
import ScrollDownIndicator from "../components/ScrollDownIndicator";
import StudentJourney from "../components/StudentJourney";
import StudentVideo from "../components/StudentVideo";
import FeaturesShowcase from "../components/FeaturesShowcase";
import ReviewCarousel from "../components/ReviewCarousel";
import AnimatedCounter from "../components/AnimatedCounter";
import UpcomingDeadlines from "../components/UpcomingDeadlines";
import PlatformFeatures from "../components/PlatformFeatures";
import TrendingOpportunities from "../components/TrendingOpportunities";
import LatestBlogs from "../components/LatestBlogs";
import FAQSection from "../components/FAQSection";
import BackToCommunity from "../components/BackToCommunity";
import Newsletter from "../components/Newsletter";
import DownloadAppBanner from "../components/DownloadAppBanner";

function Home() {
  const [showTop, setShowTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [internshipCount, setInternshipCount] = useState(0);
const [scholarshipCount, setScholarshipCount] = useState(0);
const [hackathonCount, setHackathonCount] = useState(0);
const [loading, setLoading] = useState(true);
const [savedItems, setSavedItems] = useState<number[]>([]);
const [mouse,setMouse]=useState({x:0,y:0});

useEffect(() => {

  if (window.innerWidth <= 768) return;

  const move = (e: MouseEvent) => {
    setMouse({
      x: e.clientX,
      y: e.clientY
    });
  };

  window.addEventListener("mousemove", move);

  return () => window.removeEventListener("mousemove", move);

}, []);

  const [showPlatformModal, setShowPlatformModal] = useState(false);

useEffect(() => {

  const saved = localStorage.getItem("savedOpportunities");

  if (saved) {
    setSavedItems(JSON.parse(saved));
  }

  const handleScroll = () => {
    setShowTop(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

}, []);

const toggleSave = (id: number) => {

  let updated = [...savedItems];

  if (updated.includes(id)) {
    updated = updated.filter(item => item !== id);
  } else {
    updated.push(id);
  }

  setSavedItems(updated);

  localStorage.setItem(
    "savedOpportunities",
    JSON.stringify(updated)
  );
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  const navigate = useNavigate();
  async function increaseView(id: number) {

  const opportunity = opportunities.find(item => item.id === id);

  if (!opportunity) return;

  await supabase
    .from("opportunities")
    .update({
      views: (opportunity.views || 0) + 1,
    })
    .eq("id", id);

  navigate(`/opportunity/${encodeURIComponent(opportunity.title)}`);

}
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    const search = searchTerm.toLowerCase();

    if (
      search.includes("internship") ||
      search.includes("google")
    ) {
      navigate("/internships");
    }
    else if (
      search.includes("scholarship") ||
      search.includes("microsoft")
    ) {
      navigate("/scholarships");
    }
    else if (
      search.includes("hackathon") ||
      search.includes("sih")
    ) {
      navigate("/hackathons");
    }
    else {
      alert("No matching opportunity found!");
    }
  }
};
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");

const [opportunities, setOpportunities] = useState<any[]>([]);

useEffect(() => {
  if (darkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}, [darkMode]);

useEffect(() => {
  fetchOpportunities();
}, []);

async function fetchOpportunities() {
  const { data, error } = await supabase
    .from("opportunities")
    .select("*");

  console.log("DATA =", data);
  console.log("ERROR =", error);
  console.log(JSON.stringify(data, null, 2));

  if (!error && data) {

  setOpportunities(data);

  setInternshipCount(500);
  setScholarshipCount(200);
  setHackathonCount(100);

}

setLoading(false);
}
  return (
   <div className="page-wrapper">
    <Navbar
  darkMode={darkMode}
  setDarkMode={setDarkMode}
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  handleSearch={handleSearch}
/>

<section className="achievement-strip">

  <div className="achievement-track">

    <span>🚀 1000+ Verified Opportunities</span>
    <span>🎓 5000+ Students Helped</span>
    <span>💼 Top MNC Internships</span>
    <span>🏆 National Hackathons</span>
    <span>💰 Scholarships Updated Daily</span>
    <span>🌎 Opportunities Across India</span>

    {/* Duplicate for Infinite Animation */}

    <span>🚀 1000+ Verified Opportunities</span>
    <span>🎓 5000+ Students Helped</span>
    <span>💼 Top MNC Internships</span>
    <span>🏆 National Hackathons</span>
    <span>💰 Scholarships Updated Daily</span>
    <span>🌎 Opportunities Across India</span>

  </div>

</section>

     <section className="hero">
      <div className="hero-overlay"></div>
      <div className="floating-particles">
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
</div>
     <div className="hero-bg">

    <div className="blob blob1"></div>

    <div className="blob blob2"></div>

    <div className="blob blob3"></div>

</div>

<div className="hero-content">
  <FloatingSocialProof />

 <motion.button
  whileHover={{
    scale: 1.08,
    rotate: -2
  }}
  whileTap={{
    scale: .95
  }}
  className="hero-badge"
  onClick={() => setShowPlatformModal(true)}
>
  🚀 India's Student Opportunity Platform
</motion.button>

    <motion.h1
className="hero-title"
initial={{opacity:0,y:50}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

Discover Your

<br/>

<span className="gradient-text">

<TypeAnimation

sequence={[
"Dream Internship 💼",
2000,
"Dream Scholarship 🎓",
2000,
"Dream Hackathon 🏆",
2000,
"Dream Career 🚀",
2000
]}

wrapper="span"

speed={50}

repeat={Infinity}

/>

</span>

</motion.h1>

    <motion.p

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:.6}}

>

India's most beautiful student platform

to discover internships,

scholarships,

hackathons,

placements,

career resources

and much more.

Everything.

One Place.

</motion.p>

    <motion.div

className="hero-buttons"

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

transition={{delay:1}}

>

      <button
        className="explore-btn"
        onClick={() =>
          document
            .getElementById("featured-opportunities")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        🚀 Explore Opportunities
      </button>

      <button
  className="secondary-btn"
  onClick={() => navigate("/internship-details")}
>
  Browse Internships
</button>

    </motion.div>

</div>
  <motion.div

className="hero-video"

initial={{opacity:0,scale:.8}}

animate={{opacity:1,scale:1}}

transition={{delay:1.2}}

>

  <video
    autoPlay
    muted
    loop
    playsInline
    preload="none"
    className="hero-video"
  >
    <source src="/hero-video.mp4" type="video/mp4" />
  </video>

</motion.div>
<ScrollDownIndicator />
</section>
<StudentJourney />
<section className="success-section">

  <div className="success-heading">
    <span>🌟 Student Success Stories</span>

    <h2>
      Thousands Of Students
      <br />
      Started Their Career Here
    </h2>

    <p>
      OpportunityHub helps students discover internships,
      scholarships and hackathons from the world's best companies.
    </p>
  </div>

  <div className="success-grid">

    <div className="success-card">
      <img src="/students/student1.jpg" alt="Student" />
      <h3>Rahul Sharma</h3>
      <p>
        "Got my first internship after applying through OpportunityHub."
      </p>
    </div>

    <div className="success-card">
      <img src="/students/student2.jpg" alt="Student" />
      <h3>Ananya Gupta</h3>
      <p>
        "Received an international scholarship worth ₹5 Lakhs."
      </p>
    </div>

    <div className="success-card">
      <img src="/students/student3.jpg" alt="Student" />
      <h3>Priya Singh</h3>
      <p>
        "Won my first national hackathon with my college team."
      </p>
    </div>

  </div>

</section>
<StudentVideo />

<section className="why-section">

  <div className="why-heading">
    <span>✨ Why OpportunityHub?</span>

    <h2>
      Everything a Student Needs,
      <br />
      In One Beautiful Platform
    </h2>

    <p>
      No more searching across dozens of websites.
      OpportunityHub brings internships, scholarships,
      hackathons and career resources together in one place.
    </p>
  </div>

  <div className="why-grid">

    <div className="why-card">
      <div className="why-icon">🚀</div>

      <h3>Verified Opportunities</h3>

      <p>
        Every internship and scholarship is carefully verified before publishing.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">⚡</div>

      <h3>Updated Daily</h3>

      <p>
        Fresh opportunities are added regularly so you never miss deadlines.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">🎓</div>

      <h3>Built For Students</h3>

      <p>
        Designed to save students time while discovering amazing opportunities.
      </p>
    </div>

  </div>

</section>
<FeaturesShowcase />
<section className="trusted-section fade-up">

  <h2>Trusted Opportunities From</h2>

  <p>
    Explore internships, scholarships and hackathons from the world's leading companies and organizations.
  </p>

  <div className="logo-slider">

    <div className="logo-track">

      <img src="/logos/google.png" alt="Google" />
      <img src="/logos/microsoft.png" alt="Microsoft" />
      <img src="/logos/amazon.png" alt="Amazon" />
      <img src="/logos/meta.png" alt="Meta" />
      <img src="/logos/adobe.png" alt="Adobe" />
      <img src="/logos/apple.png" alt="Apple" />
      <img src="/logos/netflix.png" alt="Netflix" />
      <img src="/logos/openai.png" alt="OpenAI" />
      <img src="/logos/nvidia.png" alt="NVIDIA" />
      <img src="/logos/intel.png" alt="Intel" />

      {/* Duplicate for Infinite Scroll */}

      <img src="/logos/google.png" alt="Google" />
      <img src="/logos/microsoft.png" alt="Microsoft" />
      <img src="/logos/amazon.png" alt="Amazon" />
      <img src="/logos/meta.png" alt="Meta" />
      <img src="/logos/adobe.png" alt="Adobe" />
      <img src="/logos/apple.png" alt="Apple" />
      <img src="/logos/netflix.png" alt="Netflix" />
      <img src="/logos/openai.png" alt="OpenAI" />
      <img src="/logos/nvidia.png" alt="NVIDIA" />
      <img src="/logos/intel.png" alt="Intel" />

    </div>

  </div>

</section>
<ReviewCarousel />
      <section className="stats">
        <div>
          <h2>{internshipCount}+</h2>
          <p>Internships</p>
        </div>

        <div>
          <h2>{scholarshipCount}+</h2>
          <p>Scholarships</p>
        </div>

        <div>
          <h2>{hackathonCount}+</h2>
          <p>Hackathons</p>
        </div>
      </section>
<AnimatedCounter />
      <section className="cards">
    <div
  className="card"
  onClick={() => navigate('/home-internships')}
  style={{ cursor: "pointer" }}
>
  <FaLaptopCode/>
          <h3>Internships</h3>
          <p>Top opportunities from Google, Microsoft and startups.</p>
        </div>

 <div
  className="card"
  onClick={() => navigate('/home-scholarships')}
  style={{ cursor: "pointer" }}
>
  <FaGraduationCap/>
          <h3>Scholarships</h3>
          <p>Funding opportunities for deserving students.</p>
        </div>

   <div
  className="card"
  onClick={() => navigate('/home-hackathons')}
  style={{ cursor: "pointer" }}
>
  <FaTrophy/>
          <h3>Hackathons</h3>
          <p>Compete and showcase your skills nationally.</p>
        </div>
      </section>
<UpcomingDeadlines />
      <section className="about">
        <h2>Why Choose OpportunityHub?</h2>

       <div className="stats-container">
  <div className="stat-card">
    <h2>1000+</h2>
    <p>Verified Opportunities</p>
  </div>

  <div className="stat-card">
    <h2>5000+</h2>
    <p>Students Benefited</p>
  </div>

  <div className="stat-card">
    <h2>50+</h2>
    <p>Partner Organizations</p>
  </div>
</div>
      </section>
<PlatformFeatures />
      <section className="founder-preview">

  <div className="founder-preview-image">
    <img src="/founder.jpg" alt="Founder" />
  </div>

  <div className="founder-preview-content">

    <span className="founder-tag">
      👨‍💻 Meet the Founder
    </span>

    <h2>Hi, I'm Divyansh Saklani 👋</h2>

    <p>
      I am an Engineering student passionate about helping students
            discover the best internships, scholarships, hackathons and
            career opportunities from one platform.
            </p>

      <p>
            While searching opportunities for myself, I realized students
            waste countless hours visiting different websites. That's why I
            decided to build OpportunityHub — a clean platform where every
            student can find quality opportunities easily.
          </p>

          <p>
            This project represents my passion for Web Development,
            Problem Solving and building products that create real impact. My goal is to build technology that simplifies student life and creates meaningful impact.
          </p>

    <Link to="/founder" className="founder-btn">
      Read My Story →
    </Link>

    <div className="founder-stats">

  <div className="stat-card">
    <h3>2026</h3>
    <p>Started OpportunityHub</p>
  </div>

  <div className="stat-card">
    <h3>100+</h3>
    <p>Student Opportunities</p>
  </div>

  <div className="stat-card">
    <h3>1</h3>
    <p>Mission • Help Every Student</p>
  </div>

</div>

  </div>

</section>
<TrendingOpportunities />

      <section
  className="opportunities"
  id="featured-opportunities"
>
  <h2>
  Featured Opportunities
</h2>

<p
  style={{
    marginTop: "10px",
    color: "#64748b",
    fontSize: "18px"
  }}
>
  {opportunities.length} verified opportunities available
</p>
        <div className="category-filters">
          <div className="sort-container">

  <label>Sort By:</label>

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
  >
    <option>Latest</option>
    <option>A-Z</option>
    <option>Trending</option>
  </select>

</div>

  <button
    className={selectedCategory === "All" ? "active-filter" : ""}
    onClick={() => setSelectedCategory("All")}
  >
    All
  </button>

  <button
    className={selectedCategory === "Internship" ? "active-filter" : ""}
    onClick={() => setSelectedCategory("Internship")}
  >
    Internships
  </button>

  <button
    className={selectedCategory === "Scholarship" ? "active-filter" : ""}
    onClick={() => setSelectedCategory("Scholarship")}
  >
    Scholarships
  </button>

  <button
    className={selectedCategory === "Hackathon" ? "active-filter" : ""}
    onClick={() => setSelectedCategory("Hackathon")}
  >
    Hackathons
  </button>

</div>

        <div className="opportunity-cards">
          {loading &&
Array.from({ length: 6 }).map((_, index) => (

<div
className="skeleton-card"
key={index}
>

<div className="skeleton-image"></div>

<div className="skeleton-title"></div>

<div className="skeleton-text"></div>

<div className="skeleton-text short"></div>

</div>

))}
  {opportunities
    .filter((item) => {
  const matchesSearch =
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase());

 const matchesCategory =
  selectedCategory === "All" ||
  item.category.toLowerCase() === selectedCategory.toLowerCase();

return matchesSearch && matchesCategory;
})
    .map((item) => (
  <div
  className="opportunity-card"
  key={item.id}
>

  <div className="image-box">
    <img
      src={item.image}
      alt={item.title}
    />
    <button
  className="save-btn"
  onClick={(e) => {

    e.stopPropagation();

    toggleSave(item.id);

  }}
>

{savedItems.includes(item.id) ? "❤️" : "🤍"}

</button>
  </div>

  <div className="card-content">

    <h3>{item.title}</h3>

    <p>{item.description}</p>

   <div className="details">

  <span>
    🏢 {item.company}
  </span>

  <span>
    💰 {item.stipend}
  </span>

  <span>
    📍 {item.location}
  </span>

  <span>
    🎓 {item.eligibility}
  </span>

  <span
  className={
    new Date(item.deadline) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
      ? "deadline-soon"
      : "deadline-badge"
  }
>
  📅 {item.deadline}
</span>

</div>

<div className="card-badges">
  <p style={{ marginTop: "10px", color: "#666" }}>
  👁 {item.views || 0} Views
</p>

{item.featured && (
  <span className="featured-badge">
    ⭐ Featured
  </span>
)}

<span
  className={
    item.status === "Open"
      ? "open-badge"
      : "closed-badge"
  }
>
  {item.status}
</span>

<span className="hot-badge">
🔥 Trending
</span>

<span className="deadline-badge">
📅 {item.deadline}
</span>

</div>

    <button
  className="details-btn"
  onClick={() => increaseView(item.id)}
>
  View Details →
</button>

  </div>

</div>
    ))}

  {opportunities
  .filter((item) => {

    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;

  })

  .sort((a, b) => {

    if (sortBy === "A-Z") {
      return a.title.localeCompare(b.title);
    }

    if (sortBy === "Trending") {
  return (b.views || 0) - (a.views || 0);
}

    return b.id - a.id;

  })

  .length === 0 && (
    <div className="empty-state">
  <h2>🔍 No Opportunities Found</h2>

  <p>
    Try changing the category or search keyword.
  </p>
</div>
)}
</div>
      </section>
      <LatestBlogs />

      
<section className="featured-companies">

  <div className="section-heading">

    <span>🌍 Trusted Worldwide</span>

    <h2>
      Opportunities From The World's
      <br />
      Best Companies
    </h2>

    <p>
      Discover verified internships, scholarships and hackathons from
      globally recognized organizations.
    </p>

  </div>

  <div className="company-slider">

    <div className="company-track">

      <img src="/logos/google.png" alt="" />
      <img src="/logos/microsoft.png" alt="" />
      <img src="/logos/apple.png" alt="" />
      <img src="/logos/meta.png" alt="" />
      <img src="/logos/netflix.png" alt="" />
      <img src="/logos/openai.png" alt="" />
      <img src="/logos/nvidia.png" alt="" />
      <img src="/logos/intel.png" alt="" />
      <img src="/logos/amazon.png" alt="" />
      <img src="/logos/adobe.png" alt="" />

      {/* Duplicate logos */}

      <img src="/logos/google.png" alt="" />
      <img src="/logos/microsoft.png" alt="" />
      <img src="/logos/apple.png" alt="" />
      <img src="/logos/meta.png" alt="" />
      <img src="/logos/netflix.png" alt="" />
      <img src="/logos/openai.png" alt="" />
      <img src="/logos/nvidia.png" alt="" />
      <img src="/logos/intel.png" alt="" />
      <img src="/logos/amazon.png" alt="" />
      <img src="/logos/adobe.png" alt="" />

    </div>

  </div>

</section>
<FAQSection />
<BackToCommunity />
{window.innerWidth > 768 && (
  <div
    className="mouse-glow"
    style={{
      left: mouse.x,
      top: mouse.y,
    }}
  />
)}

<section className="vision-box">

<h2 className="section-title">
Dream Big. Learn More. Achieve Faster.
</h2>

<p className="section-subtitle">

Thousands of opportunities.

One platform.

Unlimited possibilities.

Your next success story starts today.

</p>

<div className="scroll-indicator">
  <span></span>
</div>

</section>
<Newsletter />
<DownloadAppBanner />
  <Footer />
{showTop && (
  <button
    className="scroll-top-btn"
    onClick={scrollToTop}
  >
    <FaArrowUp />
  </button>
)}

{showPlatformModal && (
  <div
    className="platform-modal-overlay"
    onClick={() => setShowPlatformModal(false)}
  >
    <div
      className="platform-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-platform"
        onClick={() => setShowPlatformModal(false)}
      >
        ✖
      </button>

      <h2>🚀 OpportunityHub</h2>

      <p>
        Welcome to India's Student Opportunity Platform.
      </p>

      <div className="platform-grid">

  <div
  className="platform-item"
  onClick={() => {
    setShowPlatformModal(false);
    navigate("/platform/internships");
  }}
>
          💼
          <h3>Internships</h3>
          <p>Verified internships from top companies.</p>
        </div>

   <div
  className="platform-item"
  onClick={() => {
    setShowPlatformModal(false);
    navigate("/platform/scholarships");
  }}
>
  🎓
  <h3>Scholarships</h3>
  <p>Funding opportunities for students.</p>
</div>

  <div
  className="platform-item"
  onClick={() => {
    setShowPlatformModal(false);
    navigate("/platform/hackathons");
  }}
>
  🏆
  <h3>Hackathons</h3>
  <p>National & International competitions.</p>
</div>

      </div>

      <button
        className="explore-btn"
        onClick={() => {
          setShowPlatformModal(false);
          document
            .getElementById("featured-opportunities")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Explore Opportunities
      </button>

    </div>
  </div>
)}
    </div>
  );
}

export default Home;