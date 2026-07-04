import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function HackathonGuide() {
  const navigate = useNavigate();

  return (
    <section className="blog-page">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <motion.img
        src="/guides/guide3.jpg"
        alt="Hackathon Guide"
        className="blog-hero-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <div className="blog-container">

        <span className="blog-badge">🏆 Hackathon Guide</span>

        <h1>Hackathon Preparation Guide For Beginners</h1>

        <p className="blog-meta">
          ⏱ 7 min read
        </p>

        <p>
          Hackathons are one of the best ways to improve your technical skills,
          network with developers, and build real-world projects.
        </p>

        <h2>1. Learn the Basics</h2>

        <p>
          Understand programming fundamentals before joining your first
          hackathon.
        </p>

        <h2>2. Build a Team</h2>

        <p>
          Work with teammates who have different skills like design,
          development, and presentation.
        </p>

        <h2>3. Focus on Solving Problems</h2>

        <p>
          Judges appreciate useful solutions more than overly complex ideas.
        </p>

        <h2>4. Practice Pitching</h2>

        <p>
          A clear presentation can make a huge difference during judging.
        </p>

        <div className="blog-tip">
          💡 Tip: Build an MVP first, then add extra features if time allows.
        </div>

        <h2>Final Thoughts</h2>

        <p>
          Winning is great, but the learning experience and networking
          opportunities are even more valuable.
        </p>

      </div>

    </section>
  );
}