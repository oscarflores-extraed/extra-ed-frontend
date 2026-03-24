/**
 * @file Programs.jsx
 * @description Master Directory mapping across the comprehensive Extra Ed dynamic catalog.
 * 
 * **React State Logic Breakdown:**
 * This component runs an isolated internal React state bound precisely to the `searchTerm` input text box.
 * The internal `.filter()` logic is intentionally highly-aggressive: It recursively scans a program's native Title, 
 * its static description, AND drops entirely into its `features` array mapping inside `programs.json` to 
 * detect keyword overlap ensuring powerful global searching behavior without an SQL connection block.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';

// Fixed deep-level path resolving the nested `05_programs` root migration restructure
import programsData from '../../data/programs.json';

const ProgramCard = ({ program }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white/70 backdrop-blur-xl border border-white shadow-xl hover:shadow-2xl rounded-[2rem] overflow-hidden cursor-pointer group flex flex-col h-full"
    >
      {/* 
        Image Thumbnail Placeholder Block
        Dynamically generates background gradient hues triggering pure Tailwind group-hover interactions
      */}
      <div className="h-56 bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent group-hover:from-blue-600/30 transition-colors z-10 duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 bg-slate-100">
           <span className="font-bold text-sm tracking-widest uppercase">IMAGE: {program.id}</span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow relative z-20">
        <h3 className="text-2xl font-extrabold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{program.title}</h3>
        <p className="text-slate-600 mb-8 flex-grow leading-relaxed font-light">{program.shortDescription}</p>
        
        {/* 
          CRITICAL ROUTING NOTE: 
          This currently strictly links to `/programs/:id`. However, in the updated Static SEO mapping, 
          these router endpoints might be specifically hardcoded directly against `.ca/slugs`. Look carefully here.
        */}
        <Link 
          to={`/programs/${program.id}`}
          className="mt-auto flex items-center gap-2 text-blue-600 font-bold group-hover:text-blue-800 transition-colors"
        >
          View Details <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

const Programs = () => {
  // Initiating the real-time keystroke intercept mapping for the Master input search field
  const [searchTerm, setSearchTerm] = useState('');

  // Execution layer filtering the internal imported Data block string array checks
  const filteredPrograms = programsData.filter((program) => 
    program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    program.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
    program.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-40 pb-24 px-6 bg-slate-50 relative">
      {/* Visual Background Decorative Blobs executing pure CSS Glassmorphism aesthetic Context rendering */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-blue-300/20 blur-[120px]"></div>
        <div className="absolute top-[30%] -left-[10%] w-[30%] h-[30%] rounded-full bg-indigo-300/20 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-700 font-bold tracking-widest text-xs uppercase mb-6 shadow-sm">
            Curriculum
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">Programs Repository</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
            Browse through our extensive catalog of specialized educational services. From coding to arts, we have something to ignite every passion.
          </p>
        </motion.div>

        {/* Dynamic Search Interceptor Block mapping React form inputs state hooks execution routines natively */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16 relative"
        >
          <div className="relative group shadow-2xl rounded-full">
            <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
              <Search size={24} />
            </div>
            <input
              type="text"
              placeholder="Search programs by title, description, or feature..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-8 py-6 bg-white rounded-full border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all text-lg text-slate-700 placeholder:text-slate-400"
            />
          </div>
        </motion.div>

        {/* Display rendering block evaluating strict internal lengths filtering the array count numbers output */}
        <div className="mb-12">
          <p className="text-slate-500 font-medium mb-8 pl-2">
            Showing {filteredPrograms.length} {filteredPrograms.length === 1 ? 'program' : 'programs'}
          </p>
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence>
              {filteredPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredPrograms.length === 0 && (
             <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }}
               className="text-center py-24 bg-white/50 backdrop-blur-md rounded-[3rem] shadow-sm border border-slate-100"
             >
               <h3 className="text-3xl font-extrabold text-slate-800 mb-4">No programs found</h3>
               <p className="text-slate-500 text-lg">Try adjusting your search terminology.</p>
             </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programs;
