import "../App.css";

export default function DownloadAppBanner() {
  return (
    <section className="download-app-section">

      <div className="download-app-box">

        <div className="download-app-content">

          <span className="download-tag">
            📱 Coming Soon
          </span>

          <h2>
            OpportunityHub Mobile App
          </h2>

          <p>
            Get instant notifications for internships, scholarships,
            hackathons and placements directly on your phone.
            Never miss another opportunity again.
          </p>

          <div className="download-features">

            <div className="download-feature">
              ⚡ Instant Notifications
            </div>

            <div className="download-feature">
              ❤️ Save Opportunities Offline
            </div>

            <div className="download-feature">
              🔍 Smart Search & Filters
            </div>

            <div className="download-feature">
              📅 Deadline Reminders
            </div>

          </div>

          <div className="store-buttons">

            <button
              className="store-btn playstore-btn"
              onClick={() =>
                alert("🚀 OpportunityHub Android app is coming soon. Stay tuned!")
              }
            >
              ▶ Google Play
            </button>

            <button
              className="store-btn appstore-btn"
              onClick={() =>
                alert("🍎 OpportunityHub iOS app is coming soon. Stay tuned!")
              }
            >
               App Store
            </button>

          </div>

        </div>

        <div className="download-app-image">

          <img
            src="/mobile-app.png"
            alt="OpportunityHub Mobile App"
          />

        </div>

      </div>

    </section>
  );
}