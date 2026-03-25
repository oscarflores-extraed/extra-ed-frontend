import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, ChevronDown, Clock, Smile, BookOpen, 
  Building, Tent, Users, Gift, ExternalLink 
} from 'lucide-react';

import otherProgramsData from '../../data/other_programs.json';
import contentData from '../../data/WebsiteContent.json';

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
};

// Dynamic visual icon mapper for the 7 primary static categories
const getCategoryIcon = (index) => {
    const icons = [
        <Clock size={36} />,      // Lunch
        <Smile size={36} />,      // Kindergarten
        <BookOpen size={36} />,   // In-Class
        <Building size={36} />,   // TDSB
        <Tent size={36} />,       // Camps
        <Users size={36} />,      // Tutoring
        <Gift size={36} />,       // Birthdays
    ];
    return icons[index] || <ExternalLink size={36} />;
};

const getCategoryColors = (index) => {
    const colors = [
        "text-orange-500 bg-orange-100 border-orange-200", // Lunch
        "text-pink-500 bg-pink-100 border-pink-200",       // Kindergarten
        "text-blue-500 bg-blue-100 border-blue-200",       // In-Class
        "text-emerald-500 bg-emerald-100 border-emerald-200", // TDSB
        "text-green-600 bg-green-100 border-green-200",    // Camps
        "text-purple-500 bg-purple-100 border-purple-200", // Tutoring
        "text-red-500 bg-red-100 border-red-200",          // Birthdays
    ];
    return colors[index % colors.length];
};

const AccordionItem = ({ category, programs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
      >
        <h3 className="text-2xl font-bold text-[var(--brand-dark)]">{category} <span className="text-sm font-medium text-slate-400 ml-3 bg-slate-100 px-3 py-1 rounded-full">{programs.length} Clubs</span></h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={24} className="text-slate-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 bg-slate-50 border-t border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {programs.map((prog, idx) => (
                        <Link key={idx} to={prog.slug} className="group block h-full">
                            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all h-full flex flex-col items-start relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                                    <ExternalLink size={20} className="text-[var(--brand-green)]" />
                                </div>
                                <h4 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-[var(--brand-blue)] transition-colors">{prog["Club title"]}</h4>
                                <p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-2">"{prog["Tagline"]}"</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProgramsLanding = () => {
    const pageData = otherProgramsData[0]; 
    const [searchQuery, setSearchQuery] = useState("");

    if (!pageData) return null;

    // Filter dynamic repository logic mapping search bounds exclusively matching "Club title" or "Tagline"
    const filteredPrograms = contentData.programs.filter(prog => {
        const titleMatch = prog["Club title"]?.toLowerCase().includes(searchQuery.toLowerCase());
        const tagMatch = prog["Tagline"]?.toLowerCase().includes(searchQuery.toLowerCase());
        return titleMatch || tagMatch;
    });

    // Reduce specific filtered subset structurally into Dictionary keys bounding Category parameters
    const categorizedPrograms = filteredPrograms.reduce((acc, prog) => {
        const cat = prog["Category"] || "Other";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(prog);
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-32 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Global Header */}
                <motion.div className="text-center max-w-4xl mx-auto mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <span className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-xs drop-shadow-md mb-6 inline-block bg-blue-100 py-1 px-4 rounded-full border border-blue-200">
                        Explore
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--brand-dark)] tracking-tight mb-8">
                        {pageData["Main Title"]}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-6">
                        {pageData["Body 1"]}
                    </p>
                    <p className="text-lg text-[var(--brand-blue)] font-bold">
                        {pageData["Body 2"]}
                    </p>
                </motion.div>

                {/* Primary Category Type Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
                    {pageData["Title"] && pageData["Title"].map((title, index) => {
                        // Clean legacy specific "Learn more>" artifacts dynamically mapped from the CSV string copy
                        const cleanBody = pageData["Body"][index].replace(/Learn more>(\s*\[link.*?\])?/g, '').trim();
                        
                        return (
                            <FadeInWhenVisible key={index} delay={index * 0.1}>
                                <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 h-full flex flex-col group relative overflow-hidden">
                                    {/* Hover interaction visual structural gradient */}
                                    <div className="absolute inset-0 bg-blue-900/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm cursor-pointer">
                                        <ExternalLink size={48} className="mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-500" />
                                        <span className="font-bold text-xl tracking-wider">Explore {title.replace('.', '')}</span>
                                    </div>

                                    {/* Static Face */}
                                    <div className="relative z-0 h-full flex flex-col">
                                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border ${getCategoryColors(index)}`}>
                                            {getCategoryIcon(index)}
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-4 leading-tight">{title}</h3>
                                        <p className="text-slate-500 leading-relaxed font-light text-sm flex-grow">
                                            {cleanBody}
                                        </p>
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        );
                    })}
                </div>

                {/* Database Interactive Search Accordion Block */}
                <div className="max-w-5xl mx-auto">
                    <FadeInWhenVisible>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--brand-dark)] tracking-tight mb-4">Our Individual Clubs</h2>
                            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">Discover the perfect interactive program. Find exactly what you're looking for spanning dozens of unique disciplines.</p>
                        </div>
                        
                        {/* Custom Search Field Component capturing mapping bindings natively */}
                        <div className="relative mb-12 shadow-2xl rounded-2xl overflow-hidden group">
                            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                                <Search size={28} className="text-slate-400 group-focus-within:text-[var(--brand-blue)] transition-colors" />
                            </div>
                            <input 
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search clubs (e.g., 'Robotics', 'Chess', 'Minecraft')..."
                                className="w-full pl-20 pr-8 py-8 text-xl text-slate-700 bg-white border-none focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:font-light"
                            />
                        </div>

                        {/* Accordion List mapping dynamic dictionary rendering boundaries */}
                        <div className="space-y-4">
                            {Object.keys(categorizedPrograms).length === 0 ? (
                                <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
                                    <p className="text-2xl text-slate-400 font-light">No programs found mapping to "{searchQuery}"</p>
                                </div>
                            ) : (
                                Object.keys(categorizedPrograms).map((category, idx) => (
                                    <AccordionItem key={idx} category={category} programs={categorizedPrograms[category]} />
                                ))
                            )}
                        </div>
                    </FadeInWhenVisible>
                </div>

            </div>
        </div>
    );
};

export default ProgramsLanding;
