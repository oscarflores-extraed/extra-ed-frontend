/**
 * @file OurTeam.jsx
 * @description Generates the "Meet the Team" interactive profile grid highlighting directors and staff.
 * 
 * **KEY ARCHITECTURAL NOTE:**
 * This component utilizes native CSS 3D transforms (`preserve-3d`, `rotate-y-180`) strictly mapped
 * inside Tailwind's absolute positioning wrappers to generate ultra-smooth, hardware-accelerated 
 * Flip-Cards without relying on bulky Javascript physics engines.
 * 
 * **Dependencies:** Local `teamData` JSON database providing the text matrices.
 */

import React from 'react';
import { motion } from 'framer-motion';

import teamData from '../../data/team.json';

// Static Vite compiler imports. Images must be mapped explicitly so the Vite bundler attaches them natively.
import yakosImg from '../../assets/03_our_team/yakos.png';
import katyaImg from '../../assets/03_our_team/katya.png';
import annaImg from '../../assets/03_our_team/anna.png';
import blissImg from '../../assets/03_our_team/bliss.png';
import adamImg from '../../assets/03_our_team/adam.png';
import sophyaImg from '../../assets/03_our_team/sophya.png';
import piotrImg from '../../assets/03_our_team/piotr.png';
import oscarImg from '../../assets/03_our_team/oscar.png';

// Fallback logic map binding strings to compiled module paths
const imageMap = {
  yakos: yakosImg,
  katya: katyaImg,
  anna: annaImg,
  bliss: blissImg,
  adam: adamImg,
  sophya: sophyaImg,
  piotr: piotrImg,
  oscar: oscarImg
};

/**
 * Functional component constructing an individual interactive profile flip card.
 * Triggers full 180-degree block rotation exclusively on CSS `group-hover`.
 * @param {Object} member - Individual dictionary payload matching the teamData array shape.
 */
const ProfileFlipCard = ({ member }) => {
  return (
    <div className="perspective-1000 w-full h-[450px] group cursor-pointer block">
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-700 group-hover:rotate-y-180"
      >
        {/* 
            Front Face (Director Image and Name) 
            Contains the new circular framing layout design
         */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-[2rem] shadow-xl border border-slate-100 flex flex-col items-center justify-center p-8 overflow-hidden">
            
            {/* Subtle background glow aesthetic */}
            <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-blue-50 to-transparent"></div>

            {/* Circular Aesthetic Frame wrapper for the transparent PNGs */}
            <div className="relative w-48 h-48 mb-8 group-hover:scale-105 transition-transform duration-500 z-10">
                {/* Under-glow Drop Shadow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-blue)] to-[var(--brand-green)] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                {/* Structural Outer Ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-[var(--brand-blue)] to-[var(--brand-yellow)] rounded-full overflow-hidden shadow-sm"></div>
                {/* The embedded image locked into a perfect circle with a thick white border */}
                <img 
                    src={imageMap[member.id]} 
                    alt={member.name} 
                    className="relative w-full h-full object-cover rounded-full border-[6px] border-white shadow-inner bg-slate-50" 
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200?text=Profile";
                      // Fallback prevents the UI from shattering if the physical image is missing from the local /assets/ directory
                    }}
                />
            </div>
            
            <h3 className="text-2xl font-extrabold text-[var(--brand-dark)] mb-2 text-center relative z-10">{member.name}</h3>
            <p className="text-[var(--brand-blue)] font-bold uppercase tracking-widest text-[11px] text-center relative z-10">{member.role}</p>
        </div>

        {/* Back Face (Bio and Quotes) - Explicitly hidden by default via backface-hidden */}
        <div className="absolute inset-0 backface-hidden bg-[var(--brand-dark)] rounded-[2rem] shadow-xl flex flex-col items-center justify-center p-8 text-center text-white rotate-y-180">
            <p className="text-lg italic leading-relaxed text-slate-300 font-light drop-shadow-sm">"{member.flipQuote}"</p>
            
            {/* Visual aesthetic horizontal break mapping brand styling */}
            <div className="w-16 h-1 bg-[var(--brand-green)] mt-6 rounded-full shadow-[0_0_15px_rgba(46,162,24,0.8)] shrink-0"></div>
            
            <p className="mt-6 font-medium text-slate-400 text-[14px] leading-relaxed line-clamp-6">{member.bio}</p>
        </div>
      </motion.div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Isolated staggered load-in text header container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-28"
        >
          <span className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm drop-shadow-md mb-6 inline-block bg-blue-100 py-1.5 px-6 rounded-full">Statement Intro</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--brand-dark)] tracking-tight mb-8">Meet the Team</h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            Our incredible staff of educators, coordinators, and directors are fiercely passionate about unlocking the potential inside every single student. Let's meet the people making it happen.
          </p>
        </motion.div>

        {/* CSS Grid generating the responsive profile layout constraints */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamData.map((member) => (
             <ProfileFlipCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurTeam;
