import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const reviews = [
  {
    name: "Sarvesh Gupta",
    college: "Chandigarh University",
    image: "/reviews/review1.jpg",
    rating: 5,
    review:
      "OpportunityHub helped me land my first software internship. The platform is clean, fast and extremely useful.",
  },
  {
    name: "Shubham Kumar",
    college: "IIT Delhi",
    image: "/reviews/review2.jpg",
    rating: 5,
    review:
      "I discovered an international scholarship that I would've never found otherwise. Highly recommended!",
  },
  {
    name: "Rajit Gupta",
    college: "IIT, Bombay",
    image: "/reviews/review3.jpg",
    rating: 5,
    review:
      "The hackathon section is amazing. I participated in multiple competitions and improved my resume.",
  },
  {
    name: "Devina Galot",
    college: "St. Stephen's College",
    image: "/reviews/review4.jpg",
    rating: 5,
    review:
      "Everything is available in one place. I don't have to visit multiple websites anymore.",
  },
  {
    name: "Kalpit Veerwal",
    college: "IIT, Bombay",
    image: "/reviews/review5.jpg",
    rating: 5,
    review:
      "Beautiful UI, verified opportunities and daily updates. One of the best student platforms I've used.",
  }
];

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === reviews.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrent((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  const prevReview = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const review = reviews[current];

  return (
    <section className="review-section">

      <div className="review-header">

        <span className="review-tag">
          ❤️ Student Reviews
        </span>

        <h2>
          Loved By Students
          <br />
          Across India
        </h2>

        <p>
          Thousands of students trust OpportunityHub to discover
          internships, scholarships and hackathons.
        </p>

      </div>

      <motion.div
        key={current}
        className="review-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <img
          src={review.image}
          alt={review.name}
          className="review-image"
        />

        <div className="review-stars">
          {"⭐".repeat(review.rating)}
        </div>

        <p className="review-text">
          "{review.review}"
        </p>

        <h3>{review.name}</h3>

        <span className="review-college">
          {review.college}
        </span>

      </motion.div>

      <div className="review-controls">

        <button
          className="review-btn"
          onClick={prevReview}
        >
          ←
        </button>

        <button
          className="review-btn"
          onClick={nextReview}
        >
          →
        </button>

      </div>

      <div className="review-dots">

        {reviews.map((_, index) => (
          <span
            key={index}
            className={
              current === index
                ? "review-dot active-dot"
                : "review-dot"
            }
            onClick={() => setCurrent(index)}
          />
        ))}

      </div>

    </section>
  );
}