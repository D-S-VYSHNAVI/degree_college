import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { HiCheckCircle, HiLightBulb, HiOutlineBadgeCheck, HiOutlineLibrary, HiUserGroup, HiArrowRight, HiAcademicCap, HiLightningBolt, HiBookOpen, HiCode, HiBeaker } from 'react-icons/hi';
import { collegeInfo, management, campusVisuals } from '../data/dummyData';

const About = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Page Header */}
      <section className="bg-primary-900 py-32 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_30%_30%,rgba(0,168,232,0.15)_0%,transparent_70%)]"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-secondary-400 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">About our Institution</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              Legacy of <span className="text-secondary-400">Academic Excellence</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium leading-relaxed">
              Founded with a commitment to empower students with knowledge and discipline, {collegeInfo.name} has been a leading educational hub in {collegeInfo.location}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-slate-50 relative z-10 group">
                <img src={campusVisuals.campus} alt="History" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-primary-900 p-12 rounded-[2rem] shadow-2xl z-20 hidden md:block border border-white/10 group hover:-translate-y-2 transition-transform duration-500">
                <div className="text-secondary-400 font-black text-5xl italic mb-4">25+</div>
                <p className="text-white font-bold uppercase tracking-[0.2em] text-[10px] leading-relaxed">Years of Academic <br />Innovation & Leadership</p>
              </div>
            </div>
            <div className="lg:w-1/2 space-y-8">
              <span className="text-secondary-500 font-black uppercase tracking-[0.3em] text-xs block italic">Our Roots</span>
              <h2 className="text-4xl md:text-6xl font-black text-primary-900 tracking-tighter">Established with <br /><span className="gradient-text italic">a Noble Purpose</span></h2>
              <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
                <p>
                  Sri Sai Degree College, Karempudi, was founded to provide quality higher education that combines traditional values with modern scientific temper. Over the past two decades, we have evolved into a multi-disciplinary institution known for rigorous academics.
                </p>
                <p>
                  Our campus is designed to foster a culture of inquiry and creativity. We believe in nurturing not just students, but future leaders who carry the values of integrity, discipline, and service.
                </p>
                <div className="pt-10 grid grid-cols-2 gap-10">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                    <h4 className="text-4xl font-black text-primary-900 mb-2 italic">1500+</h4>
                    <p className="text-secondary-500 font-black uppercase tracking-widest text-[10px]">Active Students</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                    <h4 className="text-4xl font-black text-primary-900 mb-2 italic">5000+</h4>
                    <p className="text-secondary-500 font-black uppercase tracking-widest text-[10px]">Global Alumni</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Management - REAL DATA */}
      <section id="management" className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900/5 skew-x-12 translate-x-1/2"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-24">
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Our Leadership</span>
            <h2 className="text-4xl md:text-7xl font-black text-primary-900 tracking-tighter italic">Message from <span className="gradient-text">Management</span></h2>
          </div>
          
          <div className="space-y-20">
            {/* Chairman */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-16 bg-white p-12 md:p-20 rounded-[4rem] shadow-premium border border-slate-100"
            >
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="w-48 h-48 bg-slate-100 rounded-[3rem] mx-auto lg:mx-0 mb-8 flex items-center justify-center text-primary-900/10 text-9xl font-black overflow-hidden border-8 border-slate-50 shadow-inner">
                  P
                </div>
                <h4 className="text-3xl font-black text-primary-900 mb-2 italic tracking-tight">{management.chairman.name}</h4>
                <p className="text-primary-500 font-black uppercase tracking-[0.2em] text-xs">{management.chairman.designation}</p>
              </div>
              <div className="lg:w-2/3 relative">
                <div className="absolute -top-10 -left-10 text-[150px] font-black text-slate-50 select-none -z-10">"</div>
                <p className="text-xl md:text-2xl text-slate-600 font-medium italic leading-relaxed relative z-10 border-l-8 border-primary-500 pl-12 py-4">
                  "{management.chairman.message}"
                </p>
              </div>
            </motion.div>

            
           
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-12 md:p-16 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-xl group"
            >
              <div className="w-20 h-20 bg-primary-900 rounded-[1.5rem] flex items-center justify-center text-white mb-10 shadow-2xl group-hover:rotate-6 transition-transform">
                <HiLightBulb size={40} />
              </div>
              <h3 className="text-4xl font-black text-primary-900 mb-8 italic tracking-tight">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                To be a globally recognized institution that empowers students with cutting-edge knowledge, professional skills, and strong ethical values to lead and succeed in a dynamic world.
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-12 md:p-16 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-xl group"
            >
              <div className="w-20 h-20 bg-secondary-500 rounded-[1.5rem] flex items-center justify-center text-white mb-10 shadow-2xl group-hover:rotate-6 transition-transform">
                <HiOutlineBadgeCheck size={40} />
              </div>
              <h3 className="text-4xl font-black text-primary-900 mb-8 italic tracking-tight">Our Mission</h3>
              <ul className="space-y-6">
                {[
                  "Delivering industry-aligned academic programs with a focus on practical skills.",
                  "Nurturing a disciplined and competitive environment for student growth.",
                  "Encouraging innovation, research, and critical thinking.",
                  "Creating strong career pathways through placement support and partnerships."
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4 text-slate-600 font-bold">
                    <HiCheckCircle className="text-secondary-500 text-2xl shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure - Visual Rich */}
      <section id="infrastructure" className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="text-primary-900 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Our Campus</span>
            <h2 className="text-4xl md:text-7xl font-black text-primary-900 tracking-tighter">Modern <span className="gradient-text italic">Infrastructure</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Advanced IT Labs", icon: HiCode, img: campusVisuals.lab, desc: "High-speed internet and latest software suites for BSc Computer Science students." },
              { title: "Science Facilities", icon: HiBeaker, img: campusVisuals.lab, desc: "Well-equipped Chemistry and Physics labs for hands-on research and experiments." },
              { title: "Digital Library", icon: HiBookOpen, img: campusVisuals.library, desc: "Access to thousands of physical books and vast digital research repositories." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-[3rem] overflow-hidden bg-white border border-slate-100 shadow-2xl transition-all duration-500"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-12 relative">
                  <div className="w-16 h-16 bg-primary-900 rounded-2xl flex items-center justify-center text-white mb-8 shadow-2xl -mt-20 relative z-10 group-hover:bg-secondary-500 transition-colors duration-500">
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-2xl font-black text-primary-900 mb-4 italic tracking-tight">{item.title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
