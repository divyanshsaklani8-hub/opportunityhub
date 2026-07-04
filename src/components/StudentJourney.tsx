import { motion } from "framer-motion";

const steps = [
  {
    icon: "🔍",
    title: "Discover",
    description:
      "Browse verified internships, scholarships and hackathons from top companies.",
  },
  {
    icon: "📄",
    title: "Apply",
    description:
      "Read complete details and apply before the deadline with confidence.",
  },
  {
    icon: "🎯",
    title: "Get Selected",
    description:
      "Receive offers, scholarships or hackathon selections and start your journey.",
  },
  {
    icon: "🚀",
    title: "Build Your Career",
    description:
      "Grow your skills, strengthen your resume and unlock amazing opportunities.",
  },
];

export default function StudentJourney() {
  return (
    <section className="student-journey">

      <div className="journey-header">
        <span className="journey-tag">
          🎓 Your Journey Starts Here
        </span>

        <h2>
          Four Simple Steps To
          <br />
          Build Your Dream Career
        </h2>

        <p>
          OpportunityHub makes it easy to discover, apply and succeed with
          verified opportunities from leading organizations.
        </p>
      </div>

      <div className="journey-timeline">

        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="journey-card"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <div className="journey-number">
              {index + 1}
            </div>

            <div className="journey-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

            {index !== steps.length - 1 && (
              <div className="journey-line"></div>
            )}
          </motion.div>
        ))}

      </div>

    </section>
  );
}