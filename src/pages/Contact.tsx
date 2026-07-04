import '../App.css';
import {NavLink, Link} from 'react-router-dom';
import { FaEnvelope, FaClock, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from "react";

function Contact() {
  const [darkMode, setDarkMode] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return (
    <>
      <nav>
  <h2 className="logo-box">
    <Link to="/">OpportunityHub</Link>
  </h2>

  <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/internships">Internships</NavLink></li>
    <li><NavLink to="/scholarships">Scholarships</NavLink></li>
    <li><NavLink to="/hackathons">Hackathons</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    <li><NavLink to="/admin">Admin</NavLink></li>
  </ul>

  <div className="nav-right">
  <button
    className="theme-btn"
    onClick={() => setDarkMode(!darkMode)}
  >
    {darkMode ? "☀ Light" : "🌙 Dark"}
  </button>
</div>

</nav>

      <div className="page">
        <h1>📩 Contact Us</h1>

        <p className="contact-subtitle">
  Have questions, suggestions, or opportunities to share? We'd love to hear from you.
</p>

        <form
  className="contact-box"
  action="https://formspree.io/f/xreweqpw"
  method="POST"
  onSubmit={() => setSubmitted(true)}
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
  />

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number (Optional)"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    required
  ></textarea>

  <button type="submit">
    Send Message 🚀
  </button>
</form>

{submitted && (
  <div className="success-message">
    ✅ Your message has been sent successfully!

    <br />

    Thank you for contacting OpportunityHub.

    <br />

    I'll reply within 24 hours.
  </div>
)}

 <div className="contact-info">
  <div className="info-item">
    <FaEnvelope />
    <div>
      <h3>Email</h3>
      <p>divyanshsaklani8@gmail.com</p>
    </div>
  </div>

  <div className="info-item">
  <FaGithub />

  <div>
    <h3>GitHub</h3>

    <a
  href="https://github.com/divyanshsaklani8-hub"
  target="_blank"
  rel="noreferrer"
>
   github.com/divyanshsaklani8-hub
</a>
  </div>
</div>

  <div className="info-item">
  <FaClock />

  <div>
    <h3>Response Time</h3>
    <p>Within 24 Hours</p>
  </div>
</div>

<div className="info-item">
  <FaLinkedin />

  <div>
    <h3>LinkedIn</h3>

    <a
      href="https://www.linkedin.com/in/divyansh-saklani-a0982b365?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      target="_blank"
      rel="noreferrer"
    >
      linkedin.com/in/divyansh-saklani-a0982b365?utm_source=share_via&utm_content=profile&utm_medium=member_android
    </a>
  </div>
</div>

</div>
      </div>
    </>
  );
}

export default Contact;