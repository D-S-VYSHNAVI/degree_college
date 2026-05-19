import React from 'react';
import { motion } from 'framer-motion';
import { HiUserGroup, HiFire, HiLibrary, HiHome, HiHeart, HiLightBulb, HiBeaker, HiAcademicCap, HiStar, HiArrowNarrowRight, HiCheckCircle } from 'react-icons/hi';
import { collegeInfo, campusVisuals } from '../data/dummyData';
import { Link } from 'react-router-dom';

const StudentLife = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Page Header */}
      <section className="bg-primary-900 py-32 relative overflow-hidden text-white text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,165,233,0.15)_0%,transparent_50%)]"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Campus Experience</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter italic">
              Vibrant <span className="text-primary-500">Campus Life</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto uppercase tracking-widest">
              Beyond Academics, Shaping Personalities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid - Visual Rich */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Our Ecosystem</span>
            <h2 className="text-4xl md:text-7xl font-black text-primary-900 tracking-tighter italic">World-Class <span className="gradient-text">Facilities</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: 'Digital Laboratories', icon: HiBeaker, desc: 'Advanced computational and scientific equipment for practical research.', img: campusVisuals.lab, label: 'Scientific Excellence' },
              { title: 'Knowledge Center', icon: HiLibrary, desc: 'A vast repository of physical books and international digital journals.', img: campusVisuals.library, label: 'Intellectual Growth' },
              { title: 'Sports Arena', icon: HiHeart, desc: 'Comprehensive facilities for athletics, indoor games, and outdoor sports.', img: campusVisuals.sports, label: 'Physical Vigor' },
              { title: 'Smart Classrooms', icon: HiAcademicCap, desc: 'Interactive learning spaces with modern audio-visual integration.', img: campusVisuals.campus, label: 'Modern Pedagogy' },
              { title: 'Cultural Hub', icon: HiFire, desc: 'A dedicated space for performing arts, music, and traditional celebrations.', img: campusVisuals.cultural, label: 'Artistic Expression' },
              { title: 'Student Lounge', icon: HiUserGroup, desc: 'Collaborative spaces for group discussions and peer learning.', img: campusVisuals.campus, label: 'Peer Collaboration' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-premium border border-slate-100 group transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                    <span className="text-primary-500 font-black uppercase tracking-widest text-[9px] mb-1 block">{item.label}</span>
                    <h3 className="text-2xl font-black text-white italic tracking-tighter leading-none">{item.title}</h3>
                  </div>
                </div>
                <div className="p-10">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-primary-900 mb-8 group-hover:bg-primary-900 group-hover:text-white transition-all border border-slate-100 shadow-sm">
                    <item.icon size={28} />
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed italic">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Culture - Dark High Contrast */}
      <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-500 opacity-[0.03] skew-x-12 translate-x-1/2"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div>
                <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Student Empowerment</span>
                <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight tracking-tighter italic">Dynamic <span className="text-primary-500">Clubs</span></h2>
                <p className="text-slate-400 text-xl font-medium leading-relaxed italic">
                  Join a community of like-minded peers and explore your interests beyond the syllabus.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  { title: 'Cultural Society', desc: 'Promoting local heritage through arts, music, and seasonal festivals.', icon: HiFire },
                  { title: 'Tech Innovators', desc: 'Fostering a culture of coding, problem-solving, and digital creation.', icon: HiLightBulb },
                  { title: 'NSS Social Wing', desc: 'Building leadership character through selfless community service.', icon: HiUserGroup }
                ].map((club, i) => (
                  <div key={i} className="flex gap-8 p-10 rounded-[3rem] bg-white/5 border border-white/10 group hover:bg-white/10 transition-all duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-primary-500 text-white flex items-center justify-center shrink-0 shadow-2xl group-hover:rotate-12 transition-transform">
                      <club.icon size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-3 italic tracking-tight">{club.title}</h4>
                      <p className="text-slate-400 font-medium leading-relaxed italic">{club.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-8 pt-20">
                  <motion.img whileHover={{ scale: 1.05 }} src={campusVisuals.cultural} alt="Culture" className="rounded-[4rem] h-[500px] w-full object-cover shadow-2xl border-[12px] border-white/5" />
                </div>
                <div className="space-y-8">
                  <motion.img whileHover={{ scale: 1.05 }} src={campusVisuals.sports} alt="Sports" className="rounded-[4rem] h-[350px] w-full object-cover shadow-2xl border-[12px] border-white/5" />
                  <motion.img whileHover={{ scale: 1.05 }} src={campusVisuals.campus} alt="Campus" className="rounded-[4rem] h-[300px] w-full object-cover shadow-2xl border-[12px] border-white/5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel & Accommodation */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row-reverse gap-24 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div>
                <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Residential Excellence</span>
                <h2 className="text-4xl md:text-7xl font-black text-primary-900 tracking-tighter italic leading-tight">Home Away <br /><span className="gradient-text">From Home</span></h2>
              </div>
              <p className="text-slate-500 text-xl font-medium leading-relaxed italic">
                Our residential facilities are designed to provide a secure, disciplined, and nurturing environment for outstation students.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {[
                  'Elite Security & Surveillance',
                  'Gourmet Nutritional Mess',
                  'Blazing Fast Campus Wi-Fi',
                  'Silent Study Chambers'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:shadow-premium transition-all">
                    <HiCheckCircle className="text-primary-500 text-2xl" />
                    <span className="text-slate-700 font-black text-[10px] uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-8">
                <Link to="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-primary-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-500 transition-all shadow-2xl active:scale-95">
                  Request Hostel Tour <HiArrowNarrowRight />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-premium border-[12px] border-slate-50 relative z-10">
                <img src={campusVisuals.hostel} alt="Hostel" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary-500/10 rounded-full blur-[100px] -z-0 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
