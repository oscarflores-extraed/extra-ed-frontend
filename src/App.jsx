import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import OurTeam from './pages/OurTeam';
import EconomicInclusivity from './pages/EconomicInclusivity';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import InTheNews from './pages/InTheNews';
import Contact from './pages/Contact';
import Sustainability from './pages/Sustainability';
import Donate from './pages/Donate';

const Layout = () => (
  <div className="flex flex-col min-h-screen font-sans">
    <Navbar />
    <main className="flex-grow pt-8">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="economic-inclusivity" element={<EconomicInclusivity />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/:id" element={<ProgramDetail />} />
          <Route path="in-the-news" element={<InTheNews />} />
          <Route path="contact-us-extraed-were-here-to-help" element={<Contact />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="donate" element={<Donate />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
