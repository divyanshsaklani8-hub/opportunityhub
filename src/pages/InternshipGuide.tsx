import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function InternshipGuide() {
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
        src="/guides/guide1.jpg"
        alt="Internship Guide"
        className="blog-hero-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <div className="blog-container">

        <span className="blog-badge">💼 Internship Guide</span>

        <h1>How To Get Your First Internship In 2026</h1>

        <p className="blog-meta">
          ⏱ 5 min read
        </p>

        <p>
          Landing your first internship can feel difficult, especially if you
          don't have previous experience. The good news is that companies are
          looking for students with curiosity, skills, and enthusiasm.
        </p>

        <h2>1. Build Basic Skills</h2>

        <p>
          Learn the fundamentals of your field through online courses,
          YouTube tutorials, and personal projects.
        </p>

        <h2>2. Create an Attractive Resume</h2>

        <p>
          Highlight your projects, certifications, technical skills,
          achievements, and extracurricular activities.
        </p>

        <h2>3. Make Projects</h2>

        <p>
          Practical projects demonstrate your abilities far better than simply
          listing skills.
        </p>

        <h2>4. Apply Consistently</h2>

        <p>
          Apply to multiple internships every week instead of waiting for the
          perfect opportunity.
        </p>

        <div className="blog-tip">
          💡 Tip: Tailor your resume for every internship you apply for.
        </div>

        <h2>Final Thoughts</h2>

        <p>
          Every successful professional started somewhere. Stay consistent,
          keep learning, and don't be discouraged by rejections.
        </p>

      </div>

    </section>
  );
}