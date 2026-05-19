import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle, HiAcademicCap, HiUsers, HiTrendingUp, HiBookOpen, HiLightningBolt, HiLocationMarker, HiBell, HiCalendar, HiArrowNarrowRight, HiBriefcase, HiStar, HiShieldCheck } from 'react-icons/hi';
import { collegeInfo, courses, statistics, notices, testimonials, management, campusVisuals, recruiters } from '../data/dummyData';
import Button from '../components/common/Button';
import SectionHeading from '../components/common/SectionHeading';
import collegeImage from '../assets/images/image.png';
const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="overflow-hidden bg-white text-slate-800">
      {/* Premium Hero Section */}
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-32">
        <motion.div
  style={{ scale }}
  className="absolute inset-0 z-0"
>
  <img
    src={collegeImage}
    alt="Sri Sai Degree College"
    className="w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-primary-900/75"></div>
</motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center space-x-2 px-6 py-2 bg-primary-500/20 backdrop-blur-xl text-primary-500 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-8 border border-primary-500/30 shadow-2xl">
                <HiStar className="animate-pulse" />
                <span>Excellence in Education</span>
              </span>
             <h1 className="font-black text-white mb-10 tracking-tight leading-tight text-center">
  
  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
    SHAPING
  </span>

  <span className="block text-primary-400 italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[8rem]">
    LEADERS
  </span>

  <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
    OF TOMORROW
  </span>

</h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto font-semibold leading-relaxed uppercase tracking-[4px]">
                {collegeInfo.name}, {collegeInfo.location}
              </p>
             <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                <Link
                  to="/admissions"
                  className="w-full sm:w-auto px-12 py-5 bg-primary-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all shadow-2xl shadow-primary-500/40 active:scale-95 flex items-center justify-center gap-3"
                >
                  Apply Now 2026 <HiArrowRight />
                </Link>
                <Link
                  to="/courses"
                  className="w-full sm:w-auto px-12 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all flex items-center justify-center gap-3"
                >
                  Explore Programs
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white to-transparent pt-32 pb-12 hidden lg:block">
          <div className="container-custom">
            <div className="grid grid-cols-4 gap-12 border-t border-slate-200/50 pt-12">
              {statistics.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-4xl font-black text-primary-900 tracking-tighter">{stat.value}{stat.suffix}</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notice Board - Professional Sidebar Style */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <div className="inline-flex items-center space-x-2 text-primary-500 mb-4">
                <HiBell className="animate-bounce" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Campus Updates</span>
              </div>
              <h2 className="text-4xl font-black text-primary-900 mb-6 tracking-tighter italic">Notice <span className="text-primary-500">Board</span></h2>
              <p className="text-slate-500 font-medium mb-8">Stay updated with the latest announcements, examination schedules, and event details from the college administration.</p>
              <Link to="/notices" className="inline-flex items-center gap-2 text-primary-900 font-black text-xs uppercase tracking-widest hover:text-primary-500 transition-colors">
                View All Announcements <HiArrowNarrowRight />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[2rem] shadow-premium p-4 border border-slate-100 divide-y divide-slate-50">
                {notices.map((notice, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="p-6 flex items-start gap-6 group transition-all"
                  >
                    <div className="shrink-0 w-16 h-16 bg-slate-50 rounded-2xl flex flex-col items-center justify-center text-primary-900 border border-slate-100 group-hover:bg-primary-900 group-hover:text-white transition-all">
                      <span className="text-lg font-black leading-none">{notice.date.split(' ')[1].replace(',', '')}</span>
                      <span className="text-[8px] font-black uppercase tracking-widest mt-1">{notice.date.split(' ')[0]}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-0.5 bg-primary-100 text-primary-700 rounded-md text-[8px] font-black uppercase tracking-wider">{notice.type}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{notice.date}</span>
                      </div>
                      <h4 className="font-black text-primary-900 text-lg group-hover:text-primary-500 transition-colors">{notice.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Features */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Our Identity</span>
            <h2 className="heading-lg italic tracking-tighter">Why Choose <span className="gradient-text">Sri Sai College?</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                title: 'Academic Excellence', 
                desc: 'Consistently delivering top-tier results with a curriculum focused on deep conceptual understanding and practical application.',
                icon: HiAcademicCap 
              },
              { 
                title: 'Professional Faculty', 
                desc: 'Learn from highly qualified educators dedicated to mentoring students and shaping their professional journey.',
                icon: HiUsers 
              },
              { 
                title: 'Modern Infrastructure', 
                desc: 'Equipped with digital classrooms, advanced laboratories, and a resourceful library for a complete learning experience.',
                icon: HiLightningBolt 
              },
              { 
                title: 'Holistic Development', 
                desc: 'Beyond academics, we focus on character building, discipline, and extracurricular activities to nurture responsible citizens.',
                icon: HiShieldCheck 
              },
              { 
                title: 'Placement Support', 
                desc: 'Dedicated career guidance and placement cell to help students transition smoothly from academics to professional careers.',
                icon: HiBriefcase 
              },
              { 
                title: 'Safe Campus', 
                desc: 'A disciplined and secure environment for students, ensuring focus and peace of mind for both students and parents.',
                icon: HiLocationMarker 
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-premium group hover:border-primary-500/20 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary-900 mb-8 group-hover:bg-primary-900 group-hover:text-white transition-all duration-500 border border-slate-100">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-primary-900 mb-4 italic tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Highlight - Rich Layout */}
      <section className="section-padding bg-primary-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-500 opacity-[0.03] skew-x-12 translate-x-1/2"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Academic Wings</span>
              <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">Undergraduate <span className="text-primary-500">Programs</span></h2>
            </div>
            <Link to="/courses" className="px-10 py-4 border-2 border-white/20 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all">
              View All Courses
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                whileHover={{ scale: 1.02 }}
                className="group relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-4 py-1 bg-primary-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest">{course.dept}</span>
                    <span className="text-white/60 font-bold text-[10px] uppercase tracking-widest">{course.duration}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4 italic tracking-tight">{course.title}</h3>
                  <Link to={`/courses/${course.id}`} className="inline-flex items-center gap-2 text-primary-500 font-black text-xs uppercase tracking-widest group-hover:text-white transition-colors">
                    Course Details <HiArrowNarrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Messages - Real Messages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Chairman Message */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 text-[200px] font-black text-slate-50 select-none">"</div>
              <div className="relative z-10 space-y-8">
                <div>
                  <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Message From Management</span>
                  <h2 className="text-4xl md:text-5xl font-black text-primary-900 italic tracking-tighter mb-2">{management.chairman.name}</h2>
                  <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">{management.chairman.designation}</p>
                </div>
                <p className="text-xl md:text-2xl text-slate-600 font-medium italic leading-relaxed border-l-8 border-primary-500 pl-10 py-4 bg-slate-50 rounded-r-3xl pr-10">
                  "{management.chairman.message}"
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Placement Section - Real Feel */}
      <section className="section-padding bg-slate-50 border-y border-slate-200">
        <div className="container-custom text-center">
          <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Career Excellence</span>
          <h2 className="heading-lg italic tracking-tighter mb-16">Leading Recruiters <span className="gradient-text">& Partners</span></h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {recruiters.map((logo, i) => (
             <div
  key={i}
  className="flex justify-center items-center p-8 bg-white rounded-3xl shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300"
>
               <img
  src={logo}
  alt="Recruiter"
  loading="lazy"
  className="h-12 w-auto object-contain mx-auto brightness-100 opacity-100"
/>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-12 bg-primary-900 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-left">
              <div>
                <h4 className="text-3xl font-black text-white italic tracking-tight mb-2">90% Placement Success Rate</h4>
                <p className="text-white/60 font-medium max-w-xl">Our dedicated placement cell works tirelessly to bridge the gap between academic learning and industry requirements.</p>
              </div>
              <Link to="/placements" className="px-10 py-5 bg-white text-primary-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-500 hover:text-white transition-all shadow-2xl">
                Placement Reports
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Vibrant Campus</span>
            <h2 className="heading-lg italic tracking-tighter">Student Life <span className="gradient-text">& Beyond</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Digital Labs', img: campusVisuals.lab, label: 'Scientific Innovation' },
              { title: 'Rich Library', img: campusVisuals.library, label: 'World of Knowledge' },
              { title: 'Sports Arena', img: campusVisuals.sports, label: 'Physical Excellence' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden border-[12px] border-slate-50"
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-10 left-10">
                  <span className="text-primary-500 font-black uppercase tracking-widest text-[10px] mb-2 block">{item.label}</span>
                  <h4 className="text-3xl font-black text-white italic tracking-tighter">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="bg-primary-900 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-premium border-[12px] border-slate-50">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter mb-12 leading-none">
                BUILD YOUR <span className="text-primary-500 underline decoration-white decoration-4 underline-offset-8">LEGACY</span> <br /> WITH US
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                Admissions for the 2026-27 session are now open. Take the first step toward a bright professional future.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link to="/admissions" className="px-16 py-6 bg-primary-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all shadow-2xl shadow-primary-500/40 active:scale-95">
                  Start Application
                </Link>
                <Link to="/contact" className="px-16 py-6 border-2 border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all">
                  Contact Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
