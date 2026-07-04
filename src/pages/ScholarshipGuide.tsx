import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function ScholarshipGuide() {
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
        src="/guides/guide2.jpg"
        alt="Scholarship Guide"
        className="blog-hero-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <div className="blog-container">

        <span className="blog-badge">🎓 Scholarship Guide</span>

        <h1>Top Scholarships Every Indian Student Should Apply For</h1>

        <p className="blog-meta">
          ⏱ 6 min read
        </p>

        <p>
          Scholarships reduce financial stress and open opportunities to study
          at top institutions across India and abroad.
        </p>

        <h2>1. Start Early</h2>

        <p>
          Many scholarships have deadlines months before admissions begin.
        </p>

        <h2>2. Prepare Documents</h2>

        <p>
          Keep academic records, ID proof, income certificate, and passport
          photographs ready.
        </p>

        <h2>3. Write a Strong SOP</h2>

        <p>
          A well-written Statement of Purpose can significantly improve your
          chances.
        </p>

        <h2>4. Apply to Multiple Scholarships</h2>

        <p>
          Never rely on just one scholarship opportunity.
        </p>

        <div className="blog-tip">
          💡 Tip: Keep checking new scholarship announcements every month.
        </div>

        <h2>Final Thoughts</h2>

        <p>
          Consistent applications and proper preparation greatly increase your
          chances of receiving financial support.
        </p>

      </div>

    </section>
  );
}