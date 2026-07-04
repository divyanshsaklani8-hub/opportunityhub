import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "../App.css";

function OpportunityDetails() {
  const { title } = useParams();
  const location = useLocation();

  const [opportunity, setOpportunity] = useState<any>(null);

  useEffect(() => {
  fetchOpportunity();
}, [title]);

 async function fetchOpportunity() {
  const table =
  location.pathname.includes("/platform-opportunity/")
    ? "Platform_opportunity"
    : "opportunities";

  const { data, error } = await supabase
    .from(table)
    .select("*")
    .eq("title", decodeURIComponent(title!))
    .single();

  if (!error) {
    setOpportunity(data);
  }
}

  if (!opportunity) {
    return <h2 style={{ textAlign: "center", marginTop: 80 }}>Loading...</h2>;
  }

  return (
    <div className="details-page">

      <Link className="back-btn" to="/">
        ← Back
      </Link>

      <div className="details-card">

        <img
          src={opportunity.image}
          alt={opportunity.title}
        />

        <div className="details-content">

          <span className="details-category">
            {opportunity.category}
          </span>

          <h1>{opportunity.title}</h1>

          <p>{opportunity.description}</p>

          <div className="details-info">

  <div>🏢 {opportunity.company}</div>

  <div>💰 {opportunity.stipend}</div>

  <div>📍 {opportunity.location}</div>

  <div>🎓 {opportunity.eligibility}</div>

  <div>📅 {opportunity.deadline}</div>

</div>

          <button
  onClick={() => (window.location.href = opportunity.link)}
>
  Apply Now →
</button>

        </div>

      </div>

    </div>
  );
}

export default OpportunityDetails;