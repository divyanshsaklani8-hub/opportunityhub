import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import OpportunityDetails from "./pages/OpportunityDetails";
import Saved from "./pages/Saved";

import './index.css';

import Home from './pages/Home';
import Internships from './pages/Internships';
import Scholarships from './pages/Scholarships';
import Hackathons from './pages/Hackathons';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Founder from './pages/Founder';
import HomeInternships from "./pages/HomeInternships";
import HomeScholarships from "./pages/HomeScholarships";
import HomeHackathons from "./pages/HomeHackathons";
import InternshipDetails from "./pages/InternshipDetails";
import LiveInternships from "./pages/LiveInternships";
import PlatformInternships from "./pages/PlatformInternships";
import PlatformScholarships from "./pages/PlatformScholarships";
import PlatformHackathons from "./pages/PlatformHackathons";
import ScrollToTop from "./components/ScrollToTop";
import ExploreLiveInternships from "./pages/ExploreLiveInternships";
import VisitLiveInternshipDatabase from "./pages/ViewLiveInternshipDatabase";
import MoreInternships from "./pages/MoreInternships";
import ExploreScholarships from "./pages/ExploreScholarships";
import ViewLiveScholarshipDatabase from "./pages/ViewLiveScholarshipDatabase";
import MoreScholarships from "./pages/MoreScholarships";
import ExploreHackathons from "./pages/ExploreHackathons";
import ViewLiveHackathonDatabase from "./pages/ViewLiveHackathonDatabase";
import MoreHackathons from "./pages/MoreHackathons";
import InternshipGuide from "./pages/InternshipGuide";
import ScholarshipGuide from "./pages/ScholarshipGuide";
import HackathonGuide from "./pages/HackathonGuide";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/internships" element={<Internships />} />
  <Route path="/scholarships" element={<Scholarships />} />
  <Route path="/hackathons" element={<Hackathons />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/admin" element={<Admin />} />
  <Route path="/login" element={<Login />} />
  <Route path="/saved" element={<Saved />} />
  <Route path="/founder" element={<Founder />} />
  <Route path="/home-internships" element={<HomeInternships />} />

<Route path="/home-scholarships" element={<HomeScholarships />} />

<Route path="/home-hackathons" element={<HomeHackathons />} />
  <Route
  path="/internship-details"
  element={<InternshipDetails />}
/>
<Route
path="/live-internships"
element={<LiveInternships />}
/>
<Route
  path="/platform/internships"
  element={<PlatformInternships />}
/>

<Route
  path="/platform/scholarships"
  element={<PlatformScholarships />}
/>

<Route
  path="/platform/hackathons"
  element={<PlatformHackathons />}
/>

 <Route
  path="/opportunity/:title"
  element={<OpportunityDetails />}
/>

<Route
  path="/platform-opportunity/:title"
  element={<OpportunityDetails />}
/>

<Route
  path="/explore-live-internships"
  element={<ExploreLiveInternships />}
/>

<Route
  path="/visit-live-internship-database"
  element={<VisitLiveInternshipDatabase />}
/>

<Route
  path="/more-internships"
  element={<MoreInternships />}
/>

<Route
  path="/explore-scholarships"
  element={<ExploreScholarships />}
/>

<Route
  path="/view-live-scholarship-database"
  element={<ViewLiveScholarshipDatabase />}
/>

<Route
  path="/more-scholarships"
  element={<MoreScholarships />}
/>

<Route
  path="/explore-hackathons"
  element={<ExploreHackathons />}
/>

<Route
  path="/view-live-hackathon-database"
  element={<ViewLiveHackathonDatabase />}
/>

<Route
  path="/more-hackathons"
  element={<MoreHackathons />}
/>

<Route path="/blog/internship-guide" element={<InternshipGuide />} />

<Route path="/blog/scholarship-guide" element={<ScholarshipGuide />} />

<Route path="/blog/hackathon-guide" element={<HackathonGuide />} />

</Routes>
    </BrowserRouter>
  </StrictMode>
);