import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, Star, BookOpen, Heart, Leaf, Target, Users, Layers, Activity } from 'lucide-react';

import IndexVideoHor from '../assets/01_index/index_video_hor.mp4';
import IndexVideoVer from '../assets/01_index/index_video_ver.mp4';
import ImageA from '../assets/01_index/image_a.png';
import ImageB from '../assets/01_index/image_b.png';

const GoogleReviewCard = ({ name, date, rating, review }) => (
  <motion.div 
    whileHover={{ scale: 1.02, y: -5 }}
    className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col h-full min-w-[350px] max-w-[350px] snap-center shrink-0 cursor-grab active:cursor-grabbing"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-[var(--brand-blue)] font-extrabold text-2xl uppercase shadow-inner">
        {name.charAt(0)}
      </div>
      <div>
        <h4 className="font-extrabold text-slate-800 text-lg">{name}</h4>
        <div className="flex items-center gap-1 text-[var(--brand-yellow)] mt-1">
          {[...Array(rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-widest">{date}</p>
      </div>
    </div>
    <p className="text-slate-600 text-base leading-relaxed font-light italic">"{review}"</p>
  </motion.div>
);

const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
};

const SummaryCard = ({ icon: Icon, title, description, link, colorClass }) => (
  <Link to={link || "#"} className={`bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-50 flex flex-col items-start gap-4 cursor-pointer hover:shadow-2xl transition-all h-full group`}>
     <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-inner group-hover:-translate-y-2 ${colorClass}`}>
       <Icon size={36} />
     </div>
     <h4 className="text-2xl font-extrabold text-[var(--brand-dark)] mt-4 group-hover:text-current transition-colors">{title}</h4>
     <p className="text-slate-500 font-light leading-relaxed text-lg">{description}</p>
  </Link>
);

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);

  const scrollContainerRef = useRef(null);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollBy({ left: -390, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) scrollContainerRef.current.scrollBy({ left: 390, behavior: 'smooth' });
  };

  const mockReviews = [
    { name: "Sarah M.", date: "Oct 14, 2025", rating: 5, review: "Extra Ed completely changed my daughter's perspective on STEM. The Robotics club is phenomenal!" },
    { name: "David K.", date: "Sep 22, 2025", rating: 5, review: "Fantastic curriculum and incredibly engaged instructors. My kids can't wait for the after-school programs." },
    { name: "Priya P.", date: "Aug 05, 2025", rating: 5, review: "The Financial Literacy program is a game-changer. I wish I learned these skills when I was in grade school." },
    { name: "Michael T.", date: "Jun 11, 2025", rating: 5, review: "Exceptional chess program. The instructors are masters at keeping young minds focused and entertained." }
  ];

  return (
    <div className="min-h-screen bg-[var(--brand-white)] font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-[var(--brand-dark)] overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0 w-full h-full scale-[1.05]">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[4px] mix-blend-multiply z-10 w-full h-full object-cover pointer-events-none"></div>
          {/* Desktop Horizontal Video */}
          <video autoPlay loop muted playsInline className="hidden md:block absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none">
             <source src={IndexVideoHor} type="video/mp4" />
          </video>
          {/* Mobile Vertical Video */}
          <video autoPlay loop muted playsInline className="block md:hidden absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none">
             <source src={IndexVideoVer} type="video/mp4" />
          </video>
        </motion.div>

        {/* Hero Content */}
        <motion.div style={{ opacity: opacityHero }} className="relative z-20 text-center px-4 max-w-6xl flex flex-col items-center mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-6xl md:text-[7rem] font-extrabold tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] mb-6 leading-[1.1]"
          >
            <span className="text-white">Welcome to</span> <span className="text-[var(--brand-orange)] drop-shadow-[0_5px_15px_rgba(255,132,0,0.6)]">Extra Ed</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-4xl text-slate-100 font-light drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] mb-14 max-w-4xl mx-auto leading-relaxed"
          >
            Igniting curiosity through dynamic, inclusive, and highly impactful educational protocols.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8"
          >
            <a href="#" className="bg-[var(--brand-green)] hover:bg-green-600 text-white px-12 py-5 rounded-full font-extrabold tracking-widest uppercase text-base shadow-[0_15px_30px_rgba(46,162,24,0.5)] hover:-translate-y-2 transition-all">
              Register Now
            </a>
            <Link to="/programs" className="bg-[var(--brand-blue)]/90 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-full font-extrabold tracking-widest uppercase text-base shadow-xl hover:bg-[var(--brand-blue)] hover:-translate-y-2 transition-all">
              Explore Programs
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 15, 0] }} transition={{ delay: 1.5, repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
           className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white drop-shadow-xl p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20"
        >
          <ArrowDown size={32} />
        </motion.div>
      </section>

      {/* Welcome to Extra Ed Section with Column Image Layout */}
      <section className="py-40 px-6 bg-white relative z-30">
         <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-12">
            
            <FadeInSection>
              <img src={ImageA} alt="Welcome Design Element Top" className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover object-center drop-shadow-xl mx-auto mb-10 hover:scale-105 transition-transform duration-700 hover:drop-shadow-2xl" />
              <p className="text-4xl md:text-5xl font-extrabold text-[var(--brand-dark)] mb-10 border-b-[6px] border-[var(--brand-yellow)] inline-block tracking-tight py-2 px-10 bg-yellow-50/50 rounded-t-3xl">We are thrilled to have you here!</p>
            </FadeInSection>
            
            <FadeInSection delay={0.2}>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mb-8 hover:text-slate-900 transition-colors">
                We are a social enterprise that is as well-known for the educational programs we provide inside classrooms as we are for what we do outside of them.
              </p>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mb-8 hover:text-slate-900 transition-colors">
                Inside classrooms, we do it all. From chess clubs to comic book art, and from magic to financial literacy and beyond, we provide thoughtfully developed extracurricular and in-class programs throughout the Greater Toronto Area that are designed to be inspiring, enriching and (most importantly) fun.
              </p>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mb-14 hover:text-slate-900 transition-colors">
                Outside the classroom, we plant trees – many of them ourselves. We simplify and take care of all the administrative work associated with running programs – scheduling, registrations, communications, pick-ups, drop-offs, etc. – so that school administrators or parent volunteers don’t have to. And most importantly, we guarantee that every child is included in our programs, regardless of a family’s financial circumstances.
              </p>
            </FadeInSection>
            
            <FadeInSection delay={0.4}>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-relaxed italic bg-[var(--brand-green)] p-8 rounded-[2rem] shadow-2xl shadow-green-500/20 transform -rotate-1 mx-4 mb-16">
                Join us on our journey towards making our present, and future, truly extraordinary.
              </h3>
              <img src={ImageB} alt="Welcome Design Element Bottom" className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover object-center drop-shadow-xl mx-auto hover:scale-105 transition-transform duration-700 hover:drop-shadow-2xl" />
            </FadeInSection>

         </div>
      </section>

      {/* Structured Icon Lists Section */}
      <section className="py-40 px-6 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
         
         <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-[var(--brand-blue)]/5 blur-[120px] rounded-full pointer-events-none"></div>
         <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-[var(--brand-yellow)]/10 blur-[120px] rounded-full pointer-events-none"></div>

         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 relative z-10">
            
            {/* What We Do */}
            <div className="w-full lg:w-1/2">
              <FadeInSection>
                <h3 className="text-6xl md:text-8xl font-extrabold text-[var(--brand-blue)] mb-6 tracking-tight drop-shadow-sm uppercase">What<br/>We Do</h3>
                <p className="text-xl md:text-2xl text-[var(--brand-dark)] font-bold mb-12 uppercase tracking-widest pl-1 border-l-4 border-[var(--brand-blue)] rounded-l-md ml-1 my-2">An Entire Suite of Modalities</p>
                
                <ul className="space-y-6 mt-8">
                  <li className="flex items-center gap-6 bg-white p-6 rounded-[2rem] shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                     <div className="p-5 bg-blue-50 text-[var(--brand-blue)] rounded-3xl shadow-inner"><BookOpen size={32} /></div>
                     <div>
                       <h4 className="text-2xl font-bold text-slate-800 tracking-tight">Lunch & After-School Clubs</h4>
                       <p className="text-slate-500 font-light mt-1 text-base">Engaging extracurriculars directly inside your school.</p>
                     </div>
                  </li>
                  <li className="flex items-center gap-6 bg-white p-6 rounded-[2rem] shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                     <div className="p-5 bg-blue-50 text-[var(--brand-blue)] rounded-3xl shadow-inner"><Layers size={32} /></div>
                     <div>
                       <h4 className="text-2xl font-bold text-slate-800 tracking-tight">In-Class Enrichment</h4>
                       <p className="text-slate-500 font-light mt-1 text-base">Actionable modules complementing core curriculums.</p>
                     </div>
                  </li>
                  <li className="flex items-center gap-6 bg-white p-6 rounded-[2rem] shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                     <div className="p-5 bg-blue-50 text-[var(--brand-blue)] rounded-3xl shadow-inner"><Activity size={32} /></div>
                     <div>
                       <h4 className="text-2xl font-bold text-slate-800 tracking-tight">Camps & Tutoring</h4>
                       <p className="text-slate-500 font-light mt-1 text-base">Deeply immersive programs tailored for centers nationwide.</p>
                     </div>
                  </li>
                </ul>

                <Link to="/programs" className="text-[var(--brand-blue)] font-extrabold text-xl hover:text-blue-800 transition-colors flex items-center gap-4 mt-12 group bg-blue-50/50 inline-flex px-8 py-4 rounded-full border border-blue-100">
                  Explore our distinct modalities <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform text-[var(--brand-orange)]" />
                </Link>
              </FadeInSection>
            </div>

            {/* Who We Are */}
            <div className="w-full lg:w-1/2">
              <FadeInSection delay={0.2}>
                <h3 className="text-6xl md:text-8xl font-extrabold text-[var(--brand-yellow)] mb-6 tracking-tight drop-shadow-sm uppercase">Who<br/>We Are</h3>
                <p className="text-xl md:text-2xl text-[var(--brand-dark)] font-bold mb-12 uppercase tracking-widest pl-1 border-l-4 border-[var(--brand-yellow)] rounded-l-md ml-1 my-2">Educators Driving Change</p>
                
                <ul className="space-y-6 mt-8">
                  <li className="flex items-center gap-6 bg-white p-6 rounded-[2rem] shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                     <div className="p-5 bg-yellow-50 text-[var(--brand-yellow)] rounded-3xl shadow-inner"><Users size={32} /></div>
                     <div>
                       <h4 className="text-2xl font-bold text-slate-800 tracking-tight">Passionate Instructors</h4>
                       <p className="text-slate-500 font-light mt-1 text-base">We teach vital life skills in uniquely rewarding ways.</p>
                     </div>
                  </li>
                  <li className="flex items-center gap-6 bg-white p-6 rounded-[2rem] shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                     <div className="p-5 bg-yellow-50 text-[var(--brand-yellow)] rounded-3xl shadow-inner"><Heart size={32} /></div>
                     <div>
                       <h4 className="text-2xl font-bold text-slate-800 tracking-tight">Rooted in Inclusivity</h4>
                       <p className="text-slate-500 font-light mt-1 text-base">Making a guaranteed impact across all economic backgrounds.</p>
                     </div>
                  </li>
                  <li className="flex items-center gap-6 bg-white p-6 rounded-[2rem] shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                     <div className="p-5 bg-yellow-50 text-[var(--brand-yellow)] rounded-3xl shadow-inner"><Target size={32} /></div>
                     <div>
                       <h4 className="text-2xl font-bold text-slate-800 tracking-tight">TDSB Educational Partner</h4>
                       <p className="text-slate-500 font-light mt-1 text-base">A trusted board partner delivering strict, high-quality programming.</p>
                     </div>
                  </li>
                </ul>

                <Link to="/about-us" className="text-yellow-600 hover:text-yellow-800 font-extrabold text-xl transition-colors flex items-center gap-4 mt-12 group bg-yellow-50/50 inline-flex px-8 py-4 rounded-full border border-yellow-100">
                  Learn more about our team <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform text-[var(--brand-orange)]" />
                </Link>
              </FadeInSection>
            </div>

         </div>

         {/* Customized Summary Hover Cards Block */}
         <div className="max-w-[90%] mx-auto mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInSection delay={0.1}>
              <SummaryCard 
                icon={Heart} 
                title="Economic Inclusivity" 
                description="Ensuring every single child is included, regardless of family standing." 
                link="/economic-inclusivity" 
                colorClass="bg-blue-50 text-[var(--brand-blue)] group-hover:bg-[var(--brand-blue)] group-hover:text-white"
              />
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <SummaryCard 
                icon={Target} 
                title="TDSB Partner" 
                description="Serving passionately as a designated Toronto District School Board Partner." 
                link="/about-us" 
                colorClass="bg-orange-50 text-[var(--brand-orange)] group-hover:bg-[var(--brand-orange)] group-hover:text-white"
              />
            </FadeInSection>
            <FadeInSection delay={0.3}>
              <SummaryCard 
                icon={Leaf} 
                title="Environmental Activism" 
                description="Deep sustainability efforts defined by massive tree planting drives." 
                link="/sustainability" 
                colorClass="bg-green-50 text-[var(--brand-green)] group-hover:bg-[var(--brand-green)] group-hover:text-white"
              />
            </FadeInSection>
            <FadeInSection delay={0.4}>
              <SummaryCard 
                icon={Star} 
                title="Quality Programming" 
                description="Rigorous instructor training and meticulously engineered curriculums." 
                link="/programs" 
                colorClass="bg-yellow-50 text-[var(--brand-yellow)] group-hover:bg-[var(--brand-yellow)] group-hover:text-[var(--brand-dark)]"
              />
            </FadeInSection>
         </div>
      </section>

      {/* Google Reviews Carousel with high contrast background and navigation buttons */}
      <section className="py-40 px-6 bg-[var(--brand-blue)] overflow-hidden relative border-t-[10px] border-[var(--brand-yellow)]">
        <div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
        
        <div className="max-w-[95%] xl:max-w-[1400px] mx-auto mb-16 relative z-10 flex flex-col md:flex-row items-end justify-between px-2 gap-8">
           <div className="text-left">
             <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md">What Parents Are Saying</h2>
             <p className="text-white/80 text-xl md:text-2xl uppercase tracking-widest font-extrabold">Live Top Google Reviews</p>
           </div>
           
           <div className="flex items-center gap-4">
               <button 
                 onClick={scrollLeft} 
                 className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 hover:-translate-y-1 transition-all border border-white/20 flex items-center justify-center text-white backdrop-blur-md shadow-lg"
                 aria-label="Scroll left"
               >
                 <ChevronLeft size={36} />
               </button>
               <button 
                 onClick={scrollRight} 
                 className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 hover:-translate-y-1 transition-all border border-white/20 flex items-center justify-center text-white backdrop-blur-md shadow-lg"
                 aria-label="Scroll right"
               >
                 <ChevronRight size={36} />
               </button>
           </div>
        </div>

        <div 
          ref={scrollContainerRef} 
          className="flex overflow-x-auto gap-10 pb-16 px-4 snap-x snap-mandatory hide-scrollbar max-w-[95%] xl:max-w-[1400px] mx-auto w-full relative z-10 scroll-smooth cursor-grab active:cursor-grabbing"
        >
          {mockReviews.map((review, idx) => (
             <GoogleReviewCard key={idx} {...review} />
          ))}
          {/* Duplicates for scrolling effect visualization */}
          {mockReviews.map((review, idx) => (
             <GoogleReviewCard key={idx+"_copy"} {...review} />
          ))}
          {mockReviews.map((review, idx) => (
             <GoogleReviewCard key={idx+"_copy2"} {...review} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
