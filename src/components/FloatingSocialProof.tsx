import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  {
    icon: "🎉",
    title: "Student Selected",
    subtitle: "Google Internship",
  },
  {
    icon: "🏆",
    title: "Hackathon Winner",
    subtitle: "Smart India Hackathon",
  },
  {
    icon: "🎓",
    title: "Scholarship Awarded",
    subtitle: "₹5,00,000 Grant",
  },
  {
    icon: "💼",
    title: "New Internship",
    subtitle: "Microsoft India",
  },
  {
    icon: "🚀",
    title: "5000+ Students",
    subtitle: "Trust OpportunityHub",
  },
];

export default function FloatingSocialProof() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="floating-social-proof"
      initial={{
        opacity: 0,
        x: -50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      key={index}
    >
      <motion.div
        key={index}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <div className="fsp-icon">
          {messages[index].icon}
        </div>

        <div className="fsp-content">
          <h4>{messages[index].title}</h4>

          <p>{messages[index].subtitle}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}