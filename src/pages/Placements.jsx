import React from 'react';
import { motion } from 'framer-motion';
import { recruiters, collegeInfo } from '../data/dummyData';
import { HiTrendingUp, HiOfficeBuilding, HiUserGroup, HiCurrencyDollar, HiCheckCircle, HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Placements = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Page Header */}
      <section className="bg-primary-900 py-32 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,165,233,0.15)_0%,transparent_70%)]"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Career Excellence</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter italic">
              Placements <span className="text-primary-500">& Success</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
              Empowering our graduates to lead in the global marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Highest Package', value: '12 LPA', icon: HiCurrencyDollar },
              { label: 'Average Package', value: '4.5 LPA', icon: HiTrendingUp },
              { label: 'Recruiters', value: '50+', icon: HiOfficeBuilding },
              { label: 'Success Rate', value: '90%', icon: HiUserGroup },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="text-center p-12 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-premium group transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-500 mx-auto mb-8 shadow-2xl group-hover:bg-primary-900 group-hover:text-white transition-all">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl md:text-5xl font-black text-primary-900 mb-2 italic tracking-tighter">{stat.value}</div>
                <div className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-500 opacity-[0.03] skew-x-12 translate-x-1/2"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div>
                <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Preparation</span>
                <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight tracking-tighter italic">Industry <span className="text-primary-500">Readiness</span></h2>
                <p className="text-slate-400 text-xl font-medium leading-relaxed italic">
                  Our comprehensive training ecosystem bridges the gap between academics and corporate demands.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  { title: 'Communication Mastery', desc: 'Expert-led workshops on corporate communication and soft skills.' },
                  { title: 'Technical Bootcamps', desc: 'Intensive coding marathons and domain-specific technical training.' },
                  { title: 'Simulation Labs', desc: 'Real-world mock interviews and aptitude assessment sessions.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 p-10 rounded-[3rem] bg-white/5 border border-white/10 group hover:bg-white/10 transition-all duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-primary-500 text-white flex items-center justify-center shrink-0 shadow-2xl group-hover:rotate-12 transition-transform">
                      <HiCheckCircle size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-2 italic tracking-tight">{item.title}</h4>
                      <p className="text-slate-400 font-medium leading-relaxed italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white/5 relative z-10">
                <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=80" alt="Placement" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary-500 p-12 rounded-[3rem] shadow-2xl z-20 hidden md:block border-4 border-white/10">
                <div className="text-white font-black text-5xl mb-2 italic tracking-tighter">100%</div>
                <p className="text-white font-black uppercase tracking-widest text-[10px]">Placement <br />Support System</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Logos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Our Ecosystem</span>
            <h2 className="text-4xl md:text-7xl font-black text-primary-900 tracking-tighter italic">Top <span className="gradient-text">Recruiters</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 items-center justify-items-center opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            {recruiters.map((logo, i) => (
              <div key={i} className="flex justify-center p-10 bg-slate-50 rounded-3xl border border-slate-100 w-full group hover:shadow-premium transition-all">
                <img src={logo} alt="Recruiter" className="h-10 object-contain group-hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="bg-primary-900 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-premium border-[12px] border-slate-50 text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Empower Your Career</span>
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-12 leading-none">
                LAUNCH YOUR <span className="text-primary-500 underline decoration-white decoration-4 underline-offset-8">SUCCESS</span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                Join a legacy of professional excellence. At {collegeInfo.name}, we don't just educate; we build careers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link to="/admissions" className="px-16 py-6 bg-primary-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all shadow-2xl shadow-primary-500/40 active:scale-95">
                  Apply Online Now
                </Link>
                <Link to="/contact" className="px-16 py-6 border-2 border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all">
                  Connect With Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;
