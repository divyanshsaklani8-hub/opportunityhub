import "../App.css";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email.trim()) {
    alert("Please enter your email.");
    return;
  }

  try {
    const response = await fetch("https://formspree.io/f/xojoyprl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });

    if (response.ok) {
      setSubscribed(true);
      setEmail("");
    } else {
      alert("Subscription failed. Please try again.");
    }
  } catch (error) {
    alert("Something went wrong.");
  }
};

  return (
    <section className="newsletter-section">

      <div className="newsletter-box">

        <span className="newsletter-tag">
          📩 Stay Updated
        </span>

        <h2>
          Never Miss An Opportunity
        </h2>

        <p>
          Get internships, scholarships, hackathons and career updates
          delivered directly to your inbox.
        </p>

        {!subscribed ? (

          <form
            className="newsletter-form"
            onSubmit={handleSubscribe}
          >

            <input
  type="email"
  name="email"
  placeholder="Enter your email address..."
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>

            <button type="submit">
              Subscribe
            </button>

          </form>

        ) : (

          <div className="newsletter-success">
            ✅ Thanks for subscribing!
            <br />
            We'll notify you about the latest opportunities.
          </div>

        )}

        <div className="newsletter-stats">

          <div className="newsletter-stat">
            <h3>25K+</h3>
            <p>Subscribers</p>
          </div>

          <div className="newsletter-stat">
            <h3>Daily</h3>
            <p>Opportunity Updates</p>
          </div>

          <div className="newsletter-stat">
            <h3>100%</h3>
            <p>Free Forever</p>
          </div>

        </div>

      </div>

    </section>
  );
}