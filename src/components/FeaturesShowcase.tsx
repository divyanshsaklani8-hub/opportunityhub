import { motion } from "framer-motion";

const features = [
  {
    icon: "💼",
    title: "Verified Internships",
    description:
      "Discover internships from Google, Microsoft, Amazon, startups and many more trusted companies.",
  },
  {
    icon: "🎓",
    title: "Scholarships",
    description:
      "Explore national and international scholarships updated regularly for students.",
  },
  {
    icon: "🏆",
    title: "Hackathons",
    description:
      "Participate in coding competitions and hackathons to showcase your skills.",
  },
  {
    icon: "⚡",
    title: "Daily Updates",
    description:
      "Fresh opportunities are added every day so you never miss important deadlines.",
  },
  {
    icon: "🌍",
    title: "One Platform",
    description:
      "Everything students need—internships, scholarships, hackathons and career resources—in one place.",
  },
  {
    icon: "🚀",
    title: "Career Growth",
    description:
      "Build your resume, gain experience and prepare yourself for your dream career.",
  },
];

export default function FeaturesShowcase() {
  return (
    <section className="features-showcase">

      <div className="features-header">

        <span className="features-tag">
          ✨ Platform Features
        </span>

        <h2>
          Everything You Need
          <br />
          To Grow Your Career
        </h2>

        <p>
          OpportunityHub combines the most important student opportunities
          into one modern platform designed to save your time.
        </p>

      </div>

      <div className="features-grid">

        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-box"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
          >
            <div className="feature-icon">
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