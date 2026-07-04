import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Founder() {
  const navigate = useNavigate();
  return (
    <div className="founder-page">

      <button
  className="founder-back-btn"
  onClick={() => navigate(-1)}
>
  ← Back
</button>

      <div className="founder-card">

  <div className="founder-images">

  <img
    src="/founderstory.jpg"
    alt="Founder"
    className="founder-image"
  />

  <img
    src="/founderstory2.jpg"
    alt="Founder"
    className="founder-image"
  />

  <img
    src="/founderstory3.jpg"
    alt="Founder"
    className="founder-image"
  />

  <img
    src="/founderstory4.jpg"
    alt="Founder"
    className="founder-image"
  />

  <img
    src="/founderstory5.jpg"
    alt="Founder"
    className="founder-image"
  />

   <img
    src="/founderstory6.jpg"
    alt="Founder"
    className="founder-image"
  />

  <div className="quote-card">
  <h3>💡 My Belief</h3>
  <p>
    "Every student deserves equal access to genuine opportunities,
    regardless of where they come from."
  </p>
</div>

</div>

  <div className="founder-content">

          <span className="founder-tag">
            My Journey 🚀
          </span>

          <h1>From Confused Student to Building OpportunityHub</h1>

          <p>
            Hello👋! I'm <strong>Divyansh Saklani</strong>, an Engineering student
            who once faced the same problem that millions of students experience
            every day—finding genuine internships, scholarships, hackathons and
            career opportunities.
          </p>

          <p>
            During my first year of college, I spent hours searching on Google,
            YouTube, Telegram and LinkedIn. Every website had different
            information, deadlines and eligibility criteria. Sometimes I missed
            amazing opportunities simply because I found them too late.
          </p>

          <p>
            That frustration made me ask myself one question:
            <strong>
              {" "}
              "Why isn't there one simple platform where students can find
              everything in one place?"
            </strong>
          </p>

          <p>
            Instead of waiting for someone else to build it, I decided to learn
            Web Development and create it myself. Every line of code I wrote
            taught me something new. There were bugs, errors and sleepless
            nights, but every challenge helped me become a better developer.
          </p>

          <p>
            OpportunityHub is more than just a website for me. It is a mission
            to help students save time and discover opportunities that can
            change their careers. I want every student to spend less time
            searching and more time achieving their goals.
          </p>

          <p>
            This is only the beginning. In the future, I plan to add AI-based
            recommendations, personalized dashboards, verified opportunities and
            many more features that make student life easier.
          </p>

          <p>
            Thank you for visiting my journey. ❤️ I hope OpportunityHub helps
            thousands of students and inspires others to build solutions for
            real-world problems.
          </p>

          <div className="founder-timeline">

  <div className="timeline-item">
    <span className="timeline-year">2024</span>

    <h3>Started Engineering</h3>

    <p>
      Entered engineering with dreams but had no clear roadmap for
      internships, hackathons or scholarships.
    </p>
  </div>

  <div className="timeline-item">
    <span className="timeline-year">2025</span>

    <h3>Learned Web Development</h3>

    <p>
      Started learning HTML, CSS, JavaScript, React and modern web
      technologies while building real-world projects.
    </p>
  </div>

  <div className="timeline-item">
    <span className="timeline-year">2026</span>

    <h3>Built OpportunityHub</h3>

    <p>
      Created OpportunityHub with the vision of helping students discover
      verified opportunities from one platform instead of searching across
      multiple websites.
    </p>
  </div>

</div>

          <div className="founder-buttons">

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

          {/* Journey Timeline */}

<div className="journey-section">

<h2>📍 My Journey</h2>

<div className="timeline">

<div className="timeline-item">
<div className="timeline-dot"></div>
<div className="timeline-content">
<h3>2025</h3>
<p>Started learning Web Development and React.</p>
</div>
</div>

<div className="timeline-item">
<div className="timeline-dot"></div>
<div className="timeline-content">
<h3>2026</h3>
<p>Built OpportunityHub from scratch using React + TypeScript + Supabase.</p>
</div>
</div>

<div className="timeline-item">
<div className="timeline-dot"></div>
<div className="timeline-content">
<h3>Future</h3>
<p>
Planning AI recommendations, Resume Builder,
Student Dashboard and Campus Community.
</p>
</div>
</div>

</div>

</div>

{/* Skills */}

<div className="skills-section">

<h2>⚡ Skills</h2>

<div className="skills-grid">

<span>React</span>
<span>TypeScript</span>
<span>JavaScript</span>
<span>HTML</span>
<span>CSS</span>
<span>Supabase</span>
<span>GitHub</span>
<span>UI/UX</span>

</div>

</div>

{/* Vision */}

<div className="vision-box">

<h2>🚀 Vision</h2>

<p>

I don't just want to build websites.

I want to build products that solve real problems

for millions of students and make education

opportunities accessible to everyone.

</p>

</div>

        </div>

      </div>

    </div>
  );
}