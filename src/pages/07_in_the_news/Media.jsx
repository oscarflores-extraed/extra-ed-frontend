import React from 'react';
import { motion } from 'framer-motion';

const MediaCard = ({ category, title, date, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.01 }}
    className="bg-white rounded-[2rem] p-6 shadow-xl border border-slate-100 cursor-pointer group hover:shadow-2xl transition-all h-full flex flex-col"
  >
    <div className="h-56 bg-slate-200 rounded-3xl mb-8 flex items-center justify-center text-slate-400 overflow-hidden relative shadow-inner">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
      <span className="font-bold text-sm tracking-widest uppercase">IMAGE</span>
    </div>
    
    <div className="flex items-center justify-between mb-6 px-2">
      <span className="text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-4 py-1.5 rounded-full">{category}</span>
      <span className="text-sm text-slate-400 font-semibold">{date}</span>
    </div>
    
    <h3 className="text-2xl font-extrabold text-slate-900 mb-4 px-2 group-hover:text-indigo-600 transition-colors">{title}</h3>
    <p className="text-slate-500 text-base leading-relaxed font-light px-2 pb-2 block flex-grow">A brief conceptual excerpt describing the content of the article, blog insight, or official press release goes here for preview.</p>
  </motion.div>
);

const Media = () => {
  const dummyArticles = [
    { category: 'Press', title: 'Extra Ed Expands to 50 New School Districts', date: 'Oct 12' },
    { category: 'Blog', title: 'Why Sequential Learning Matters in STEM', date: 'Sep 28' },
    { category: 'News', title: 'Annual Community Scholarship Winners Announced', date: 'Aug 15' },
    { category: 'Blog', title: 'The Importance of Financial Literacy Early On', date: 'Jul 04' },
    { category: 'Press', title: 'Awarded Regional Innovator in Education 2026', date: 'Jun 19' },
    { category: 'Profile', title: 'Teacher Spotlight: Sarah Jenkins (Robotics)', date: 'May 02' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-32 px-6 relative">
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/20 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center mb-24 relative z-10">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="inline-block py-1 px-5 rounded-full bg-indigo-100 text-indigo-700 font-bold tracking-widest text-xs uppercase mb-8 shadow-sm"
        >
          Publications
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tight mb-8"
        >
          Media Hub
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Stay updated with the latest news, thoughtful insights, and official announcements from the team at Extra Ed.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dummyArticles.map((article, idx) => (
            <MediaCard key={idx} {...article} index={idx} />
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <button className="bg-white border text-center border-slate-200 text-slate-700 font-bold px-10 py-5 rounded-full hover:border-indigo-500 hover:text-indigo-600 transition-all shadow-md hover:shadow-xl hover:-translate-y-1">
            Load More Publications
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Media;
