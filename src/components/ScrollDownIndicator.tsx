import { motion } from "framer-motion";

export default function ScrollDownIndicator() {
  const scrollToNext = () => {
    const nextSection = document.querySelector(".success-section");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      className="scroll-down-indicator"
      onClick={scrollToNext}
      initial={{ opacity: 0, y: -15 }}
      animate={{
        opacity: 1,
        y: [0, 12, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="scroll-text">
        Scroll Down
      </span>

      <div className="mouse-icon">
        <div className="mouse-wheel"></div>
      </div>

      <span className="down-arrow">
        ↓
      </span>
    </motion.div>
  );
}

