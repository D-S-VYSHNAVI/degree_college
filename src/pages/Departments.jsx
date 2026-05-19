import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiBeaker, HiLibrary, HiBriefcase, HiChatAlt2, HiCalculator, HiArrowNarrowRight, HiAcademicCap, HiUsers, HiLightningBolt } from 'react-icons/hi';
import { collegeInfo } from '../data/dummyData';
import { Link } from 'react-router-dom';

const departments = [
  { name: 'Computer Science', icon: HiCode, students: '400+', faculty: '15', labs: '4', color: 'bg-primary-900', desc: 'Masters of logic and technology, focusing on software development and AI.' },
  { name: 'Commerce', icon: HiBriefcase, students: '600+', faculty: '20', labs: '1', color: 'bg-primary-500', desc: 'Nurturing future business leaders with foundation in finance and management.' },
  { name: 'Science', icon: HiBeaker, students: '300+', faculty: '10', labs: '3', color: 'bg-primary-900', desc: 'Exploring the laws of nature and chemical wonders through research.' },
  { name: 'Languages', icon: HiLibrary, students: '200+', faculty: '5', labs: '1', color: 'bg-primary-500', desc: 'Developing communication skills and appreciation for literature and culture.' },
];

const Departments = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Page Header */}
      <section className="bg-primary-900 py-32 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,165,233,0.15)_0%,transparent_70%)]"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Academic Wings</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter italic">
              Our <span className="text-primary-500">Departments</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
              Specialized departments at {collegeInfo.name} committed to deep learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {departments.map((dept, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-12 md:p-16 rounded-[4rem] bg-white border border-slate-100 hover:shadow-premium transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-bl-full -z-0"></div>
                <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
                  <div className={`w-24 h-24 ${dept.color} rounded-[2rem] flex items-center justify-center text-white shrink-0 shadow-2xl transition-all duration-500 group-hover:rotate-6 border-4 border-white/20`}>
                    <dept.icon size={48} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-3xl md:text-4xl font-black text-primary-900 mb-6 italic tracking-tighter leading-none">{dept.name}</h3>
                    <p className="text-slate-500 text-lg mb-10 leading-relaxed italic">
                      {dept.desc}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-50">
                      <div>
                        <div className="flex items-center gap-2 text-primary-900">
                          <HiUsers className="text-primary-500" />
                          <span className="text-2xl font-black italic">{dept.students}</span>
                        </div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2">Students</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-primary-900">
                          <HiAcademicCap className="text-primary-500" />
                          <span className="text-2xl font-black italic">{dept.faculty}</span>
                        </div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2">Faculty</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-primary-900">
                          <HiLightningBolt className="text-primary-500" />
                          <span className="text-2xl font-black italic">{dept.labs}</span>
                        </div>
                        <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2">Labs</div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <Link to="/courses" className="inline-flex items-center gap-3 text-primary-900 font-black text-[10px] uppercase tracking-[0.2em] hover:text-primary-500 transition-colors">
                        View Departmental Courses <HiArrowNarrowRight className="text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Innovation Hub</span>
            <h2 className="text-4xl md:text-7xl font-black text-primary-900 tracking-tighter italic">Focus <span className="gradient-text">Research Areas</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Digital Literacy & Society", icon: HiCode },
              { title: "Advanced Chemical Analysis", icon: HiBeaker },
              { title: "Modern Accounting Systems", icon: HiBriefcase },
              { title: "Cloud Computing & AI", icon: HiCode },
              { title: "Literature & Communication", icon: HiLibrary },
              { title: "E-commerce Dynamics", icon: HiBriefcase }
            ].map((area, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-50 p-10 rounded-[2.5rem] shadow-sm flex items-center gap-8 border border-slate-100 group hover:bg-white hover:shadow-premium transition-all duration-500"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-500 shadow-sm group-hover:bg-primary-900 group-hover:text-white transition-all duration-500">
                  <area.icon size={28} />
                </div>
                <span className="text-primary-900 font-black italic text-xl tracking-tight leading-tight">{area.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-primary-900 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-premium border-[12px] border-slate-50 text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Career Excellence</span>
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-12 leading-none">
                BUILD YOUR <span className="text-primary-500 underline decoration-white decoration-4 underline-offset-8">EXPERTISE</span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                Our departments are dedicated to your holistic development. Join the community of experts.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link to="/admissions" className="px-16 py-6 bg-primary-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all shadow-2xl shadow-primary-500/40 active:scale-95">
                  Apply Now
                </Link>
                <Link to="/faculty" className="px-16 py-6 border-2 border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all">
                  Meet Our Faculty
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
