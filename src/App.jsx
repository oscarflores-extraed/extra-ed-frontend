/**
 * @file App.jsx
 * @description Master Application Router. 
 * This file coordinates the entire React Single Page Application (SPA).
 * It mounts the Global Layout (Navbar/Footer) and intercepts URL paths to render specific components.
 * 
 * NOTE FOR FUTURE AGENTS/DEVELOPERS:
 * We have abandoned dynamic JSON routing (`/programs/:id`) for SEO safety.
 * All future legacy endpoints must be hardcoded here mapping to a specific file in `src/pages/05_programs/...`.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Global Shell Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ------------------------------------------------------------------
// COMPONENT IMPORTS
// Pages are strictly ordered by numeric folder schema (`01_index`, etc.)
// ------------------------------------------------------------------
import Home from './pages/01_index/Home';
import About from './pages/02_about_us/About';
import OurTeam from './pages/03_our_team/OurTeam';
import EconomicInclusivity from './pages/04_economic_inclusivity/EconomicInclusivity';

// 05_programs: Represents the Master Repository.
import Programs from './pages/05_programs/Programs';
// ProgramDetail acts as the structural wrapper template for all future bespoke static routes.
import ProgramDetail from './pages/05_programs/ProgramDetail'; 

import InTheNews from './pages/07_in_the_news/InTheNews';
import Contact from './pages/08_contact_us/Contact';
import Sustainability from './pages/09_sustainability/Sustainability';
import Donate from './pages/10_donate/Donate';

/**
 * Global application shell container.
 * Injects Navbar and Footer seamlessly across all nested <Outlet /> interceptors.
 */
const Layout = () => (
  <div className="flex flex-col min-h-screen font-sans">
    <Navbar />
    {/* Page Content loads inside this main tag */}
    <main className="flex-grow pt-8">
      <Outlet />
    </main>
    <Footer />
  </div>
);

/**
 * Component Matrix Router.
 * Matches specific legacy paths to their static component files.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Layout Wrapper catches all paths nested underneath it */}
        <Route path="/" element={<Layout />}>
          
          {/* Default Index Route '/' */}
          <Route index element={<Home />} />
          
          {/* Foundational Endpoints */}
          <Route path="about-us" element={<About />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="economic-inclusivity" element={<EconomicInclusivity />} />
          <Route path="in-the-news" element={<InTheNews />} />
          <Route path="contact-us-extraed-were-here-to-help" element={<Contact />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="donate" element={<Donate />} />

          {/* Master Program Index */}
          <Route path="programs" element={<Programs />} />
          
          {/* Placeholder Dynamic Catch-all / Base Template Demo */}
          <Route path="programs/:id" element={<ProgramDetail />} />

          {/* 
            TODO: Agent/Human -> Create explicit <Route> definitions below for every specific program.
            Example: <Route path="/chess-extraed" element={<ChessExtraEd />} />
            Example: <Route path="/financial-literacy-program" element={<FinancialLiteracy />} />
          */}

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
