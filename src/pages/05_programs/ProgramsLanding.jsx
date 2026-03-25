import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import otherProgramsData from '../../data/other_programs.json';

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
};

const ProgramsLanding = () => {
    // The main programs landing is isolated as the first structurally mapped element.
    const pageData = otherProgramsData[0]; 
    if (!pageData) return null;

    return (
        <div className="min-h-screen bg-slate-50 pt-40 pb-32 px-6 font-sans">
            <div className="max-w-7xl mx-auto">
                <motion.div className="text-center max-w-4xl mx-auto mb-20" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <span className="text-[var(--brand-blue)] font-bold tracking-widest uppercase text-sm drop-shadow-md mb-6 inline-block bg-blue-100 py-1.5 px-6 rounded-full border border-blue-200">
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

                {/* Sub-Programs Interactive Grid mapping nested content blocks directly from JSON matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pageData["Title"] && pageData["Title"].map((title, index) => (
                        <FadeInWhenVisible key={index} delay={index * 0.1}>
                            <motion.div 
                                whileHover={{ y:-10, scale: 1.02 }} 
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 h-full flex flex-col group cursor-pointer"
                            >
                                <h3 className="text-2xl font-bold text-[var(--brand-dark)] mb-4 leading-tight">{title}</h3>
                                <div className="w-12 h-1 bg-[var(--brand-green)] mb-6 rounded-full group-hover:scale-x-150 transition-transform origin-left"></div>
                                <p className="text-slate-500 leading-relaxed font-light flex-grow">
                                    {pageData["Body"][index]}
                                </p>
                            </motion.div>
                        </FadeInWhenVisible>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramsLanding;
