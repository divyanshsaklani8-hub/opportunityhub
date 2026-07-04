import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is OpportunityHub completely free to use?",
    answer:
      "Yes. OpportunityHub is completely free for students. You can browse internships, scholarships and hackathons without any subscription.",
  },
  {
    question: "Are all opportunities verified?",
    answer:
      "Yes. Every opportunity is checked before publishing to ensure students receive authentic and reliable information.",
  },
  {
    question: "How often are new opportunities added?",
    answer:
      "New internships, scholarships and hackathons are added regularly, so you always have access to the latest opportunities.",
  },
  {
    question: "Can I save opportunities for later?",
    answer:
      "Yes. You can bookmark your favourite opportunities and access them anytime from your saved list.",
  },
  {
    question: "Do I apply through OpportunityHub?",
    answer:
      "OpportunityHub provides complete details and redirects you to the official application page whenever required.",
  },
  {
    question: "Who can use OpportunityHub?",
    answer:
      "Any student looking for internships, scholarships, hackathons or career opportunities can use the platform.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      <div className="faq-header">

        <span className="faq-tag">
          ❓ Frequently Asked Questions
        </span>

        <h2>
          Got Questions?
          <br />
          We've Got Answers
        </h2>

        <p>
          Everything you need to know about OpportunityHub.
        </p>

      </div>

      <div className="faq-container">

        {faqs.map((faq, index) => (

          <motion.div
            key={index}
            className={
              activeIndex === index
                ? "faq-card active"
                : "faq-card"
            }
            layout
          >

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <span>{faq.question}</span>

              <motion.span
                animate={{
                  rotate: activeIndex === index ? 180 : 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="faq-icon"
              >
                ▼
              </motion.span>

            </button>

            <AnimatePresence>

              {activeIndex === index && (

                <motion.div
                  className="faq-answer"
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <p>{faq.answer}</p>
                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        ))}

      </div>

    </section>
  );
}