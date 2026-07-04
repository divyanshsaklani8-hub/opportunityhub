import { Navigate, NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

function Admin() {
  const isAdmin = localStorage.getItem("admin");
  const [totalOpportunities, setTotalOpportunities] = useState(0);
const [internships, setInternships] = useState(0);
const [scholarships, setScholarships] = useState(0);
const [hackathons, setHackathons] = useState(0);

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  const [opportunities, setOpportunities] = useState<any[]>([]);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [showModal, setShowModal] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [uploading, setUploading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Internship");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [link, setLink] = useState("");
  const [company, setCompany] = useState("");
const [stipend, setStipend] = useState("");
const [location, setLocation] = useState("");
const [eligibility, setEligibility] = useState("");
const [deadline, setDeadline] = useState("");
const [featured, setFeatured] = useState(false);
const [status, setStatus] = useState("Open");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    fetchOpportunities();
  }, []);
  useEffect(() => {
  fetchDashboardStats();
}, []);

async function fetchDashboardStats() {

  const { data, error } = await supabase
    .from("opportunities")
    .select("*");

  if (error || !data) return;

  setTotalOpportunities(data.length);

  setInternships(
    data.filter(item => item.category === "Internship").length
  );

  setScholarships(
    data.filter(item => item.category === "Scholarship").length
  );

  setHackathons(
    data.filter(item => item.category === "Hackathon").length
  );

}

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  async function fetchOpportunities() {
    const { data, error } = await supabase
      .from("opportunities")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.log(error);
      return;
    }

    setOpportunities(data || []);
    fetchDashboardStats();
  }

  function clearForm() {
  setTitle("");
  setDescription("");
  setCategory("Internship");
  setImage("");
  setImageFile(null);
  setLink("");

  setCompany("");
  setStipend("");
  setLocation("");
  setEligibility("");
  setDeadline("");
  setFeatured(false);
  setStatus("Open");

  setEditingId(null);
}

  async function uploadImage() {
    if (!imageFile) return image;

    setUploading(true);

    const fileName = `${uuidv4()}-${imageFile.name}`;

    const { error } = await supabase.storage
      .from("opportunity-images")
      .upload(fileName, imageFile);

    if (error) {
      setUploading(false);
      alert(error.message);
      return "";
    }

    const { data } = supabase.storage
      .from("opportunity-images")
      .getPublicUrl(fileName);

    setUploading(false);

    return data.publicUrl;
  }

  async function addOpportunity() {
  if (!title || !description || !link) {
    alert("Please fill all required fields");
    return;
  }

  let imageUrl = image;

  if (imageFile) {
    imageUrl = await uploadImage();

    if (!imageUrl) return;
  }

  const { error } = await supabase
    .from("opportunities")
    .insert([
      {
  title,
  description,
  category,
  image: imageUrl,
  link,

  company,
  stipend,
  location,
  eligibility,
  deadline,
  featured,
  status,
}
    ]);

  if (error) {
    alert(error.message);
    return;
  }

  await fetchOpportunities();

  clearForm();

  alert("Opportunity Added Successfully!");
}

  async function deleteOpportunity(id: number) {
    const { error } = await supabase
      .from("opportunities")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    await fetchOpportunities();
  }

  async function updateOpportunity() {
    if (editingId === null) return;

    let imageUrl = image;

    if (imageFile) {
      imageUrl = await uploadImage();

      if (!imageUrl) return;
    }

    const { error } = await supabase
      .from("opportunities")
      .update({
  title,
  description,
  category,
  image: imageUrl,
  link,

  company,
  stipend,
  location,
  eligibility,
  deadline,
  featured,
  status,
})
      .eq("id", editingId);

    if (error) {
      alert(error.message);
      return;
    }

    await fetchOpportunities();

    clearForm();

    setShowModal(false);

    alert("Opportunity Updated Successfully!");
  }

  return (
    <div className="admin-page">

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

          <input
            className="search-bar"
            type="text"
            placeholder="Search.................."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>

      </nav>

      <div className="page">
        <div className="dashboard-stats">

  <div className="dashboard-card">
    <h2>{totalOpportunities}</h2>
    <p>Total Opportunities</p>
  </div>

  <div className="dashboard-card">
    <h2>{internships}</h2>
    <p>Internships</p>
  </div>

  <div className="dashboard-card">
    <h2>{scholarships}</h2>
    <p>Scholarships</p>
  </div>

  <div className="dashboard-card">
    <h2>{hackathons}</h2>
    <p>Hackathons</p>
  </div>

</div>

  <div className="admin-header">

    <h1>Admin Dashboard</h1>

    <button
      className="logout-btn"
      onClick={() => {
        localStorage.removeItem("admin");
        window.location.href = "/login";
      }}
    >
      Logout
    </button>

  </div>

  <div className="admin-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Internship</option>
            <option>Scholarship</option>
            <option>Hackathon</option>
          </select>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.length) {
                setImageFile(e.target.files[0]);
              }
            }}
          />

          <input
            type="text"
            placeholder="Apply Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <input
  type="text"
  placeholder="Company"
  value={company}
  onChange={(e) => setCompany(e.target.value)}
/>

<input
  type="text"
  placeholder="Stipend"
  value={stipend}
  onChange={(e) => setStipend(e.target.value)}
/>

<input
  type="text"
  placeholder="Location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
/>

<input
  type="text"
  placeholder="Eligibility"
  value={eligibility}
  onChange={(e) => setEligibility(e.target.value)}
/>

<input
  type="date"
  value={deadline}
  onChange={(e) => setDeadline(e.target.value)}
/>

<select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
>
  <option>Open</option>
  <option>Closed</option>
</select>

<label style={{ display: "flex", gap: "10px", alignItems: "center" }}>
  <input
    type="checkbox"
    checked={featured}
    onChange={(e) => setFeatured(e.target.checked)}
  />
  Featured Opportunity
</label>

          <button
            onClick={addOpportunity}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Add Opportunity"}
          </button>

        </div>

        <h2>All Opportunities</h2>

        <div className="admin-list">

          {opportunities
            .filter(
              (item) =>
                item.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                item.category
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
            )
            .map((item) => (

              <div
                key={item.id}
                className="admin-card"
              >

                <h3>{item.title}</h3>

                <p>{item.category}</p>

                <button
                  onClick={() => {
  setEditingId(item.id);

  setTitle(item.title);
  setDescription(item.description);
  setCategory(item.category);
  setImage(item.image);
  setImageFile(null);
  setLink(item.link);

  setCompany(item.company);
setStipend(item.stipend);
setLocation(item.location);
setEligibility(item.eligibility);
setDeadline(item.deadline);
setFeatured(item.featured);
setStatus(item.status);

  setShowModal(true);
}}
                >
                  Edit
                </button>

                <button
  onClick={() => {
    setDeleteId(item.id);
    setShowDeleteModal(true);
  }}
>
  Delete
</button>

              </div>

            ))}

        </div>

        {showModal && (

          <div className="modal-overlay">

            <div className="modal-box">

              <h2>Edit Opportunity</h2>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Internship</option>
                <option>Scholarship</option>
                <option>Hackathon</option>
              </select>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files?.length) {
                    setImageFile(e.target.files[0]);
                  }
                }}
              />

              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />

              <input
  type="text"
  placeholder="Company"
  value={company}
  onChange={(e) => setCompany(e.target.value)}
/>

<input
  type="text"
  placeholder="Stipend"
  value={stipend}
  onChange={(e) => setStipend(e.target.value)}
/>

<input
  type="text"
  placeholder="Location"
  value={location}
  onChange={(e) => setLocation(e.target.value)}
/>

<input
  type="text"
  placeholder="Eligibility"
  value={eligibility}
  onChange={(e) => setEligibility(e.target.value)}
/>

<input
  type="date"
  value={deadline}
  onChange={(e) => setDeadline(e.target.value)}
/>

<select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
>
  <option>Open</option>
  <option>Closed</option>
</select>

<label style={{ display: "flex", gap: "10px", alignItems: "center" }}>
  <input
    type="checkbox"
    checked={featured}
    onChange={(e) => setFeatured(e.target.checked)}
  />
  Featured Opportunity
</label>

              <div className="modal-buttons">
                <button
                  onClick={async () => {
                    await updateOpportunity();
                  }}
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "Update"}
                </button>

                <button
                  onClick={() => {
                    clearForm();
                    setShowModal(false);
                  }}
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        )}
                 {showDeleteModal && (
  <div className="modal-overlay">
    <div className="modal-box">

      <h2>Delete Opportunity</h2>

      <p style={{ margin: "20px 0" }}>
        Are you sure you want to delete this opportunity?
      </p>

      <div className="modal-buttons">

        <button
          style={{ background: "#dc3545" }}
          onClick={async () => {
            if (deleteId !== null) {
              await deleteOpportunity(deleteId);
            }

            setShowDeleteModal(false);
            setDeleteId(null);
          }}
        >
          Yes
        </button>

        <button
          onClick={() => {
            setShowDeleteModal(false);
            setDeleteId(null);
          }}
        >
          No
        </button>

      </div>

    </div>
  </div>
)}

      </div>

    </div>

  );
}

export default Admin;