import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PlayCircle, CheckCircle } from 'lucide-react';
import contentData from '../../../data/WebsiteContent.json';

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
};

const ChessExtraEd = () => {
  const programData = contentData.programs.find(p => p.slug === '/chess-extraed/');
  
  // Guard condition if JSON mappings are damaged
  if (!programData) {
      return (
          <div className="min-h-screen pt-40 px-6 text-center text-[var(--brand-dark)]">
              <h1 className="text-4xl font-bold mb-4">Content Error</h1>
              <p>The explicit payload for `/chess-extraed/` was not found in the Data Registry.</p>
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans pb-32">
      {/* Hero Section Container */}
      <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-[#1E3A8A] to-[#047857] mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center text-slate-800 opacity-20 z-0">
            <PlayCircle size={160} />
        </div>
        
        <motion.div className="relative z-20 text-center px-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}>
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-600/30 text-blue-200 backdrop-blur-md text-xs font-bold mb-6 tracking-widest uppercase border border-blue-500/50 shadow-lg">
            {programData["Category"]} Program
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight drop-shadow-2xl max-w-5xl mx-auto">
            {programData["Club title"]}
          </h1>
          <p className="mt-8 text-2xl text-blue-100 max-w-3xl mx-auto drop-shadow-lg font-light italic">
            "{programData["Tagline"]}"
          </p>
        </motion.div>
      </section>

      {/* Main Context Grid */}
      <section className="py-20 px-6 relative z-30 -mt-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column (Primary Blurbs) */}
            <div className="lg:col-span-2 space-y-10">
                <div className="bg-white rounded-[2rem] p-10 md:p-14 shadow-2xl border border-slate-100">
                    <FadeInWhenVisible>
                        <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-4">{programData["Blurb 1 title"]}</h2>
                        <div className="w-16 h-1 bg-[var(--brand-blue)] mb-6 rounded-full"></div>
                        <p className="text-lg text-slate-600 leading-relaxed font-light">{programData["Blurb 1"]}</p>
                    </FadeInWhenVisible>
                </div>

                <div className="bg-white rounded-[2rem] p-10 md:p-14 shadow-2xl border border-slate-100">
                    <FadeInWhenVisible>
                        <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-4">{programData["Blurb 2 title"]}</h2>
                        <div className="w-16 h-1 bg-[var(--brand-green)] mb-6 rounded-full"></div>
                        <p className="text-lg text-slate-600 leading-relaxed font-light">{programData["Blurb 2"]}</p>
                    </FadeInWhenVisible>
                </div>
            </div>

            {/* Right Column (Sidebar Information) */}
            <div className="space-y-8">
                <div className="bg-[var(--brand-dark)] text-white rounded-[2rem] p-10 shadow-xl border border-slate-700">
                    <FadeInWhenVisible delay={0.2}>
                        <h3 className="text-2xl font-bold mb-4">{programData["Key info - title"]}</h3>
                        <p className="text-slate-300 leading-relaxed text-sm mb-8">{programData["Key info - body"]}</p>
                        
                        <div className="w-full h-px bg-slate-700 mb-8"></div>

                        <h3 className="text-xl font-bold mb-4 text-[#86efac]">{programData["Key info 2 - title"]}</h3>
                        <p className="text-slate-300 leading-relaxed text-sm">{programData["Key info  2- body"]}</p>
                    </FadeInWhenVisible>
                </div>
            </div>
        </div>
      </section>
      
      {/* Curriculum Section */}
      <section className="py-20 bg-slate-100 px-6">
        <div className="max-w-5xl mx-auto text-center">
            <FadeInWhenVisible>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-600 mb-8 shadow-inner">
                    <CheckCircle size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight mb-6">
                    {programData["Curriculum title"]}
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-16 font-light">
                    {programData["Curriculum intro"]}
                </p>
                
                <div className="bg-white p-10 md:p-16 rounded-[2rem] shadow-xl text-left border border-slate-100">
                    <div className="text-lg text-slate-700 leading-relaxed font-light">
                        {/* Rendering array of curriculum rules natively mapped from JSON parsing */}
                        {Array.isArray(programData["Curriculum body"]) ? (
                            <ul className="space-y-6">
                                {programData["Curriculum body"].map((line, i) => (
                                    <li key={i} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0 flex items-start">
                                        <span className="text-[var(--brand-green)] mr-4 mt-1">▹</span>
                                        <span>{line}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>{programData["Curriculum body"]}</p>
                        )}
                    </div>
                </div>
            </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
};

export default ChessExtraEd;
