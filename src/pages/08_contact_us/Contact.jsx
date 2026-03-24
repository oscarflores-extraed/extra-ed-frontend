import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, MessageCircle, HelpCircle } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, description, action, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, type: 'spring' }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 text-center flex flex-col items-center group cursor-pointer hover:shadow-2xl transition-all h-full"
  >
    <div className="w-20 h-20 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 rounded-full flex items-center justify-center mb-8 shadow-inner">
      <Icon size={36} />
    </div>
    <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 mb-8 leading-relaxed flex-grow font-light">{description}</p>
    <a href="#" className="font-bold text-blue-600 group-hover:text-blue-800 transition-colors tracking-wide">
      {action}
    </a>
  </motion.div>
);

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24 px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-slate-900 z-0">
         <div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-24 text-white">
          <motion.span 
             initial={{ opacity: 0 }} animate={{ opacity: 1 }}
             className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md text-blue-100 font-bold tracking-widest text-xs uppercase mb-6"
          >
            We Are Here
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Whether you are a parent, educator, or potential partner, our dedicated team is incredibly excited to assist you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactCard 
            icon={MessageCircle} 
            title="General Inquiries" 
            description="Have a specific question about our core programs or enrollment process? Drop us a line anytime." 
            action="hello@extraed.ca" 
            delay={0.1} 
          />
          <ContactCard 
            icon={HelpCircle} 
            title="School Support" 
            description="Administrators and teachers seeking to construct robust STEM programs in their district." 
            action="schools@extraed.ca" 
            delay={0.2} 
          />
          <ContactCard 
            icon={Phone} 
            title="Direct Line" 
            description="Prefer speaking directly with an educational coordinator? Call us during business hours." 
            action="+1 (555) 123-4567" 
            delay={0.3} 
          />
        </div>

        {/* Global HQ styling */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-32 bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full pointer-events-none"></div>

          <div className="w-full md:w-1/2 relative z-10">
            <h2 className="text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Our Headquarters</h2>
            <p className="text-slate-600 text-xl mb-10 leading-relaxed font-light">
              Extra Ed is proudly based out of Ontario, Canada, but our reach and active educational community extends far beyond borders.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6 text-slate-800 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="p-3 bg-white shadow-sm rounded-xl">
                  <MapPin size={24} className="text-blue-600" />
                </div>
                <span className="font-bold text-lg">123 Learning Lane, Toronto, ON</span>
              </div>
              <div className="flex items-center gap-6 text-slate-800 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="p-3 bg-white shadow-sm rounded-xl">
                  <Globe size={24} className="text-indigo-600" />
                </div>
                <span className="font-bold text-lg">Serving Communities Nationwide</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-96 relative z-10">
             <div className="w-full h-full bg-slate-200 rounded-[3rem] shadow-inner flex items-center justify-center text-slate-400 overflow-hidden relative">
               <div className="absolute inset-0 bg-blue-900/5 hover:bg-transparent transition-colors duration-500 cursor-crosshair"></div>
               <span className="font-bold tracking-widest uppercase text-sm">IMAGE: MAP SATELLITE VIEW</span>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
