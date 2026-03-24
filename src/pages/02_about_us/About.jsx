import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlipCard = ({ front, back, colorClass }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div 
      className="perspective-1000 w-full h-[350px] group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 220, damping: 20 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-[2.5rem] shadow-xl flex items-center justify-center p-8 border border-slate-100 text-center">
           <h3 className={`text-4xl font-extrabold ${colorClass}`}>{front}</h3>
        </div>
        {/* Back */}
        <div className={`absolute inset-0 backface-hidden rounded-[2.5rem] shadow-xl flex items-center justify-center p-10 text-center text-white rotate-y-180 ${colorClass.replace('text-', 'bg-')}`}>
           <p className="text-xl font-medium leading-relaxed drop-shadow-sm">{back}</p>
        </div>
      </motion.div>
    </div>
  );
};

const TimelineItem = ({ year, title, description, side="left" }) => (
  <motion.div 
    initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className={`flex w-full mb-16 relative ${side === "left" ? "justify-start" : "justify-end"}`}
  >
    <div className={`w-[45%] ${side === "left" ? "text-right pr-12" : "text-left pl-12"}`}>
       <div className="text-[var(--brand-orange)] font-extrabold text-3xl mb-3 tracking-widest">{year}</div>
       <h4 className="text-2xl font-bold text-slate-800 mb-4">{title}</h4>
       <p className="text-slate-600 leading-relaxed font-light text-lg">{description}</p>
    </div>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--brand-green)] border-4 border-white shadow-xl z-10 flex items-center justify-center">
      <div className="w-2 h-2 bg-white rounded-full"></div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-24 font-sans overflow-x-hidden">
      
      {/* Hero Video Summary */}
      <section className="relative h-[65vh] w-full flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-800">
           <span className="font-bold tracking-widest text-lg">[ SHORTER VIDEO SUMMARY BACKGROUND ]</span>
        </div>
        <div className="relative z-20 text-center">
           <span className="text-[var(--brand-yellow)] font-bold tracking-widest uppercase text-sm drop-shadow-md mb-6 inline-block">Our Mission</span>
           <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight drop-shadow-xl">Who We Are</h1>
        </div>
      </section>

      {/* Flip Cards (Values) */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-b border-slate-100">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[var(--brand-dark)] tracking-tight">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           <FlipCard colorClass="text-[var(--brand-blue)]" front="Innovation" back="We constantly redesign curriculums integrating cutting-edge practices to keep learners engaged." />
           <FlipCard colorClass="text-[var(--brand-green)]" front="Inclusivity" back="Delivering exceptional extracurricular programs accessible to students of all economic backgrounds." />
           <FlipCard colorClass="text-[var(--brand-orange)]" front="Excellence" back="Striving for the highest quality educational engagement scaling from JK to Grade 8." />
        </div>
      </section>

      {/* Animated Timeline */}
      <section className="py-32 px-6 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[var(--brand-dark)] tracking-tight">Our Journey</h2>
          </div>
          
          <div className="relative pb-10">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-slate-200"></div>
            
            <TimelineItem year="2015" title="The extraEd Foundation" description="Founded as a passionate initiative to bridge educational gaps through powerful after-school programs." side="left" />
            <TimelineItem year="2018" title="Robotics & Coding Launch" description="Integrated dynamic STEM labs utilizing LEGO and Minecraft Education across GTA schools." side="right" />
            <TimelineItem year="2020" title="Virtual Shift" description="Adapted heavily during the pandemic to deliver incredible virtual tutoring and class enrichment without skipping a beat." side="left" />
            <TimelineItem year="2022" title="TDSB Educational Partner" description="Proudly cemented our status as a trusted board partner delivering deeply integrated, life-changing curriculums." side="right" />
            <TimelineItem year="2025" title="Nationwide Expansion" description="Scaling our specialized services and foundational camps to childcare centers throughout the entire country." side="left" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
