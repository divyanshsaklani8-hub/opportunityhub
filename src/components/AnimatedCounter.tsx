import { motion } from "framer-motion";

export default function AnimatedCounter() {
  const stats = [
    {
      number: 1000,
      suffix: "+",
      title: "Verified Opportunities",
      icon: "🚀",
    },
    {
      number: 5000,
      suffix: "+",
      title: "Students Benefited",
      icon: "🎓",
    },
    {
      number: 100,
      suffix: "+",
      title: "Top Companies",
      icon: "🏢",
    },
  ];

  return (
    <section className="animated-counter-section">

      <div className="counter-heading">

        <span className="counter-tag">
          📊 OpportunityHub In Numbers
        </span>

        <h2>
          Helping Students
          <br />
          Every Single Day
        </h2>

        <p>
          Join thousands of students discovering internships,
          scholarships and hackathons from one trusted platform.
        </p>

      </div>

      <div className="counter-grid">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="counter-card"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
          >
            <div className="counter-icon">
              {item.icon}
            </div>

           <h2>
  {item.number}
  {item.suffix}
</h2>

            <p>{item.title}</p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}