import { motion } from "framer-motion";

export default function StudentVideo() {
  return (
    <section className="student-video-section">

      <div className="student-video-container">

        <motion.div
          className="student-video-content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="video-tag">
            🎥 Student Success
          </span>

          <h2>
            Watch How Students
            <br />
            Can Building Their Future
          </h2>

          <p>
            Discover how OpportunityHub helps thousands of students
            find internships, scholarships, hackathons and career
            opportunities from one beautiful platform.
          </p>

          <div className="video-features">

            <div className="video-feature">
              <span>✅</span>
              <p>Verified Opportunities</p>
            </div>

            <div className="video-feature">
              <span>🚀</span>
              <p>Daily Updated Listings</p>
            </div>

            <div className="video-feature">
              <span>🎓</span>
              <p>Trusted By Students</p>
            </div>

            <div className="video-feature">
              <span>💼</span>
              <p>Top Company Internships</p>
            </div>

          </div>

        </motion.div>

        <motion.div
          className="student-video-box"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <video
            className="student-video"
            controls
            autoPlay
            muted
            loop
            playsInline
            poster="/students/video-thumbnail.jpg"
          >
            <source src="/students/student-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </motion.div>

      </div>

    </section>
  );
}