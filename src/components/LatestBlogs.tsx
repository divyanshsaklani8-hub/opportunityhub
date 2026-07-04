import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    image: "/blogs/blog1.jpg",
    title: "How To Get Your First Internship In 2026",
    description:
      "A complete roadmap for students to land their first internship even without prior experience.",
    category: "Career",
    readTime: "5 min read",
    route: "/blog/internship-guide",
  },
  {
    image: "/blogs/blog2.jpg",
    title: "Top Scholarships Every Indian Student Should Apply For",
    description:
      "Explore fully funded national and international scholarships for undergraduate and postgraduate students.",
    category: "Scholarship",
    readTime: "6 min read",
    route: "/blog/scholarship-guide",
  },
  {
    image: "/blogs/blog3.jpg",
    title: "Hackathon Preparation Guide For Beginners",
    description:
      "Everything you need to know before participating in your first hackathon.",
    category: "Hackathon",
    readTime: "7 min read",
    route: "/blog/hackathon-guide",
  },
];

export default function LatestBlogs() {
  const navigate = useNavigate();

  return (
    <section className="latest-blogs">

      <div className="blogs-header">

        <span className="blogs-tag">
          📝 Latest Articles
        </span>

        <h2>
          Learn Something New
          <br />
          Every Week
        </h2>

        <p>
          Read career tips, internship guides, scholarship advice and
          hackathon strategies written for students.
        </p>

      </div>

      <div className="blogs-grid">

        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            className="blog-card"
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
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-image"
            />

            <div className="blog-content">

              <span className="blog-category">
                {blog.category}
              </span>

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <div className="blog-footer">

                <span>
                  ⏱ {blog.readTime}
                </span>

                <button
                  className="blog-btn"
                  onClick={() => navigate(blog.route)}
                >
                  Read More →
                </button>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}