import { motion } from "framer-motion";

const trending = [
  {
    emoji: "💼",
    title: "PayPal Software Engineering Internship",
    company: "PayPal",
    location: "Chennai",
    category: "Internship",
    badge: "🔥 Trending",
    link: "https://careers.pypl.com/",
    color: "#003087",
  },
  {
    emoji: "🎓",
    title: "Infosys Foundation Scholarship",
    company: "Infosys Foundation",
    location: "India",
    category: "Scholarship",
    badge: "📚 Open",
    link: "https://www.infosys.com/infosys-foundation.html",
    color: "#00A4EF",
  },
  {
    emoji: "🏆",
    title: "MLH Global Hack Week",
    company: "Major League Hacking",
    location: "Online",
    category: "Hackathon",
    badge: "🌍 Worldwide",
    link: "https://ghw.mlh.com",
    color: "#265A88",
  },
  {
    emoji: "💼",
    title: "Intel Graduate Internship",
    company: "Intel",
    location: "Bengaluru",
    category: "Internship",
    badge: "⭐ Featured",
    link: "https://www.intel.com/content/www/us/en/support/articles/000021775/programs/jobs-at-intel.html",
    color: "#FF9900",
  },
  {
    emoji: "🎓",
    title: "Reliance Foundation Scholarship",
    company: "Reliance Foundation",
    location: "India",
    category: "Scholarship",
    badge: "🔥 Trending",
    link: "https://www.scholarships.reliancefoundation.org/UG_Scholarship.aspx",
    color: "#E53935",
  },
  {
    emoji: "🏆",
    title: "TechGig Code Gladiators",
    company: "TechGig",
    location: "India",
    category: "Hackathon",
    badge: "💻 Coding",
    link: "https://techgig.com/events",
    color: "#6C63FF",
  },
];

export default function TrendingOpportunities() {

  return (
    <section className="trending-opportunities">

      <div className="trending-header">

        <span className="trending-tag">
          🔥 Trending Now
        </span>

        <h2>
          Students Are Applying
          <br />
          To These Opportunities
        </h2>

        <p>
          Don't miss the most popular internships,
          scholarships and hackathons currently trending
          on OpportunityHub.
        </p>

      </div>

      <div className="trending-grid">

        {trending.map((item, index) => (

          <motion.div
            key={index}
            className="trending-card"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >

            <div
              className="trending-top"
              style={{
                background: item.color,
              }}
            >
              <span className="trending-emoji">
                {item.emoji}
              </span>

              <span className="trending-badge">
                {item.badge}
              </span>
            </div>

            <div className="trending-body">

              <span className="trending-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>

              <p>
                🏢 {item.company}
              </p>

              <p>
                📍 {item.location}
              </p>

              <button
                className="trending-btn"
                onClick={() => window.location.href = item.link}
              >
                View Opportunity →
              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}