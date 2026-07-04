import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function BackToCommunity() {
  const navigate = useNavigate();

  return (
    <section className="community-section">

      <motion.div
        className="community-card"
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
      >

        <div className="community-left">

          <span className="community-tag">
            🌍 Join Our Community
          </span>

          <h2>
            You're Not Alone
            <br />
            On Your Career Journey
          </h2>

          <p>
            Connect with thousands of students who are preparing for
            internships, scholarships, hackathons and placements.
            Learn together, grow together and achieve your goals faster.
          </p>

          <div className="community-stats">

            <div className="community-stat">
              <h3>10K+</h3>
              <p>Students</p>
            </div>

            <div className="community-stat">
              <h3>1000+</h3>
              <p>Opportunities</p>
            </div>

            <div className="community-stat">
              <h3>24/7</h3>
              <p>Support</p>
            </div>

          </div>

        </div>

        <div className="community-right">

          <motion.div
            className="community-circle"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            🚀
          </motion.div>

          <motion.div
            className="community-icons"

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              delay: 0.3,
            }}
          >

            <div>💼</div>
            <div>🎓</div>
            <div>🏆</div>
            <div>🌍</div>

          </motion.div>

          <button
            className="community-btn"
            onClick={() => navigate("/contact")}
          >
            Join Our Community →
          </button>

        </div>

      </motion.div>

    </section>
  );
}