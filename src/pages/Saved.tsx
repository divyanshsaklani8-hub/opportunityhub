import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import "../App.css";

function Saved() {

  const navigate = useNavigate();

  const [savedOpportunities, setSavedOpportunities] = useState<any[]>([]);

  useEffect(() => {
    fetchSaved();
  }, []);

  async function fetchSaved() {

    const saved = JSON.parse(
      localStorage.getItem("savedOpportunities") || "[]"
    );

    if (saved.length === 0) {
      setSavedOpportunities([]);
      return;
    }

    const { data, error } = await supabase
      .from("opportunities")
      .select("*")
      .in("id", saved);

    if (!error && data) {
      setSavedOpportunities(data);
    }
  }

  return (

    <div className="saved-page">

      <h1>❤️ Saved Opportunities</h1>

      <p>
        {savedOpportunities.length} Saved Opportunities
      </p>

      <div className="opportunity-cards">

        {savedOpportunities.map((item) => (

          <div
            key={item.id}
            className="opportunity-card"
            onClick={() => navigate(`/opportunity/${item.id}`)}
            style={{ cursor: "pointer" }}
          >

            <div className="image-box">

              <img
                src={item.image}
                alt={item.title}
              />

              <span className="tag">
                ❤️ Saved
              </span>

            </div>

            <div className="card-content">

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="details">

                <span>
                  🏢 {item.company || "Top Company"}
                </span>

                <span>
                  💰 {item.stipend || "Paid"}
                </span>

              </div>

              <button>
                View Details →
              </button>

            </div>

          </div>

        ))}

        {savedOpportunities.length === 0 && (

          <div className="empty-state">

            <h2>❤️ No Saved Opportunities</h2>

            <p>
              Save opportunities from the Home page to see them here.
            </p>

          </div>

        )}

      </div>

    </div>

  );
}

export default Saved;