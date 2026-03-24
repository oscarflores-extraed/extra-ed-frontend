/**
 * @file ProgramDetail.jsx
 * @description BASE PROGRAM TEMPLATE (Static Blueprint Architecture Reference File)
 * 
 * **CRITICAL ARCHITECTURAL NOTE FOR FUTURE DEVELOPERS OR AI AGENTS:**
 * This file originally acted as a dynamic React Router interceptor mapping explicitly to `/programs/:id`. 
 * However, the strategic deployment design was officially shifted to **STATIC ROUTE GENERATION** seamlessly designed
 * to strictly preserve legacy GoDaddy WordPress SEO slug dependencies resolving 404 block drops.
 * 
 * **ACTION REQUIRED FOR PRODUCTION:**
 * Moving forward, this file serves solely as the structural **Blueprint/Template Wrapper** for generating individual static files.
 * Example Generation Sequence:
 * 1. To create a designated distinct page mapping to legacy URL structure format for "Chess", 
 * 2. Copy this entire layout code block structure directly into an explicitly named `ChessExtraEd.jsx` inside the appropriate sub-folder (e.g., `01_stem`).
 * 3. Strip out the `useParams()` dynamic router react hooks entirely.
 * 4. Hardcode the explicit literal string text paragraphs, title elements, and asset paths mapped explicitly for SEO indexability.
 * 5. Update `/src/App.jsx` adding an explicit interceptor `<Route path="/chess-extraed" element={<ChessExtraEd />} />`.
 */

import React, { useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

// Fixed deep-level path resolving the nested `05_programs` root migration restructure schema
import programsData from '../../data/programs.json';
import { PlayCircle, CheckCircle } from 'lucide-react';

/**
 * Reusable intersection observer wrapper establishing scroll-fade animations natively.
 */
const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const ProgramDetail = () => {
  // NOTE: This programmatic parameter retrieval is slated for deprecation under strictly applied Static Routing structures.
  const { id } = useParams();
  const program = programsData.find(p => p.id === id);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      
      {/* 
        Hero Section Header Banner 
        Executed with absolute positioning layers enabling transparent CSS mix-blend multipliers natively mimicking image gradients
      */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        {/* Placeholder for real responsive structural video interceptor background elements */}
        <div className="absolute inset-0 bg-slate-900">
           {/* In reality, an HTML5 video tag goes here specifically hardcoded per static file */}
           <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-blue-900 to-slate-900 mix-blend-multiply"></div>
           <div className="absolute inset-0 flex items-center justify-center text-slate-800 opacity-20">
             <PlayCircle size={120} />
           </div>
        </div>
        
        {/* Overlay Title */}
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 text-blue-300 backdrop-blur-sm text-sm font-semibold mb-4 tracking-wider uppercase border border-blue-500/30">
            Extra Ed Programs
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-xl max-w-4xl mx-auto">
            {program.title}
          </h1>
          <p className="mt-6 text-xl text-slate-200 max-w-2xl mx-auto drop-shadow-md">
            {program.shortDescription}
          </p>
        </motion.div>
        
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* 
        Content Section (Scroll-Triggered) Context blocks heavily mapped establishing standard 3-tier structures
        NOTE: Future static page derivations should explicitly hardcode the physical strings natively replacing dynamic `{program.shortDescription}` properties.
      */}
      <section className="py-24 px-6 relative z-20 -mt-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-slate-100">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 tracking-tight">About the Program</h2>
            <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              {program.fullDescription}
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Features Section Matrix Mapping iterating natively establishing Grid logic constraint columns rendering specifically */}
      <section className="py-20 bg-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Key Features</h2>
              <p className="text-slate-500 mt-4 text-lg">What students experience in {program.title}</p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {program.features.map((feature, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1}>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center cursor-pointer group"
                >
                  <div className="h-16 w-16 bg-[#eef2ff] text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                     <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{feature}</h3>
                  <p className="text-slate-500 mt-3 text-sm leading-relaxed">Experience dynamic and engaging interactive lessons tailored for modern, enthusiastic learners.</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section Grid Image Placeholder rendering structures mapped exclusively against string length execution arrays */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 tracking-tight text-center">Program Gallery</h2>
          </FadeInWhenVisible>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[300px]">
             {/* 
               CRITICAL FIX NEEDED ON STATIC EXPORT GENERATION IMPLEMENTATION: 
               Replace this mapping hook array logic evaluating dummy images dynamically explicitly with strictly required <img> blocks
               evaluating and embedding perfectly pathed specific programmatic programmatic strings locating literal files manually stored on physical legacy GoDaddy backend deployments. 
             */}
            {program.galleryImages.map((img, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.2}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-3xl overflow-hidden shadow-lg bg-slate-200 h-full relative group cursor-pointer ${index === 0 ? 'md:row-span-2' : ''}`}
                >
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500 bg-slate-300">
                    <span className="font-medium text-lg tracking-wider">IMAGE: {img.split('/').pop()}</span>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProgramDetail;
