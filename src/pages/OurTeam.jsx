import React from 'react';
import { motion } from 'framer-motion';
import teamData from '../data/team.json';

const ProfileFlipCard = ({ member }) => {
  return (
    <div className="perspective-1000 w-full h-[450px] group cursor-pointer block">
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-700 group-hover:rotate-y-180"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 flex flex-col items-center">
            <div className="w-full h-3/5 bg-slate-200 flex items-center justify-center text-slate-400 relative overflow-hidden">
               <div className="absolute inset-0 bg-blue-900/10"></div>
               <span className="font-bold tracking-widest text-xs uppercase relative z-10">IMAGE PROFILE</span>
            </div>
            <div className="h-2/5 w-full flex flex-col items-center justify-center bg-white p-6">
               <h3 className="text-2xl font-extrabold text-[var(--brand-dark)] mb-1">{member.name}</h3>
               <p className="text-[var(--brand-blue)] font-bold uppercase tracking-widest text-xs mt-2">{member.role}</p>
            </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 backface-hidden bg-[var(--brand-dark)] rounded-[2rem] shadow-xl flex flex-col items-center justify-center p-10 text-center text-white rotate-y-180">
            <p className="text-xl italic leading-relaxed text-slate-300 font-light drop-shadow-sm">"{member.flipQuote}"</p>
            <div className="w-16 h-1 bg-[var(--brand-green)] mt-10 rounded-full shadow-[0_0_15px_rgba(46,162,24,0.8)]"></div>
            <p className="mt-8 font-medium text-slate-400 text-base leading-relaxed">{member.bio}</p>
        </div>
      </motion.div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamData.map((member) => (
             <ProfileFlipCard key={member.id} member={member} />
          ))}
          {/* Display Duplicates for UI layout visualization */}
          {teamData.map((member) => (
             <ProfileFlipCard key={member.id+"_copy"} member={{...member, name: member.name + " (Copy)"}} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurTeam;
