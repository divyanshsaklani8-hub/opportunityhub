import { motion } from "framer-motion";

const deadlines = [
  {
    title: "Summer Data Science Internship 2026",
    category: "Internship",
    company: "IBM",
    deadline: "20 July 2026",
    daysLeft: 16,
    color: "#4285F4",
    emoji: "💼",
    link: "https://careers.ibm.com/",
  },
  {
    title: "Future Leaders Scholarship 2026",
    category: "Scholarship",
    company: "Tata Capital",
    deadline: "31 July 2026",
    daysLeft: 27,
    color: "#00A4EF",
    emoji: "🎓",
    link: "https://www.tatacapital.com/",
  },
  {
    title: "Cloud Hack Challenge 2026",
    category: "Hackathon",
    company: "Google Cloud",
    deadline: "8 August 2026",
    daysLeft: 35,
    color: "#ff6b00",
    emoji: "🏆",
    link: "https://cloud.google.com/",
  },
];
export default function UpcomingDeadlines() {

  return (
    <section className="upcoming-deadlines">

      <div className="deadline-header">

        <span className="deadline-tag">
          ⏳ Don't Miss Out
        </span>

        <h2>
          Upcoming
          <br />
          Application Deadlines
        </h2>

        <p>
          Stay ahead by applying before the deadline.
          These opportunities are closing soon.
        </p>

      </div>

      <div className="deadline-grid">

        {deadlines.map((item, index) => (

          <motion.div
            key={index}
            className="deadline-card"
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
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >

            <div
              className="deadline-top"
              style={{
                background: item.color,
              }}
            >
              <span className="deadline-emoji">
                {item.emoji}
              </span>

              <span className="deadline-category">
                {item.category}
              </span>
            </div>

            <div className="deadline-body">

              <h3>{item.title}</h3>

              <p className="deadline-company">
                🏢 {item.company}
              </p>

              <p className="deadline-date">
                📅 {item.deadline}
              </p>

              <div className="days-left">
                {item.daysLeft} Days Left
              </div>

   <button
  className="deadline-btn"
  onClick={() => window.location.href = item.link}
>
  Apply Now →
</button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}