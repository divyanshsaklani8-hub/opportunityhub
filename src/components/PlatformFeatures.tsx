import { motion } from "framer-motion";

const features = [
  {
    icon: "💼",
    title: "Verified Internships",
    description:
      "Explore internships from Google, Microsoft, Amazon, Adobe, Meta and hundreds of startups.",
  },
  {
    icon: "🎓",
    title: "Scholarships",
    description:
      "Discover national and international scholarships updated regularly for students.",
  },
  {
    icon: "🏆",
    title: "Hackathons",
    description:
      "Participate in coding competitions and innovation challenges from top organizations.",
  },
  {
    icon: "📅",
    title: "Deadline Alerts",
    description:
      "Never miss an application deadline with upcoming opportunity reminders.",
  },
  {
    icon: "⚡",
    title: "Daily Updates",
    description:
      "Fresh opportunities are added every day so you always stay ahead.",
  },
  {
    icon: "❤️",
    title: "Save Opportunities",
    description:
      "Bookmark your favourite internships, scholarships and hackathons for later.",
  },
  {
    icon: "🔍",
    title: "Smart Search",
    description:
      "Quickly search opportunities by company, category or keywords.",
  },
  {
    icon: "🌍",
    title: "One Platform",
    description:
      "Everything students need in one modern platform built for career growth.",
  },
  {
  icon: "📜",
  title: "Free Certifications",
  description:
    "Access free certification courses from top platforms to boost your skills and strengthen your resume.",
},
];

export default function PlatformFeatures() {
  return (
    <section className="platform-features">

      <div className="platform-features-header">

        <span className="platform-tag">
          🚀 Platform Features
        </span>

        <h2>
          Why Students Love
          <br />
          OpportunityHub
        </h2>

        <p>
          A powerful student platform designed to make discovering
          opportunities simple, fast and enjoyable.
        </p>

      </div>

      <div className="platform-features-grid">

        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="platform-feature-card"
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
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
          >
            <div className="platform-feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}