import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiDownload, HiSearch, HiBell, HiCalendar, HiArrowNarrowRight } from 'react-icons/hi';
import { notices, collegeInfo } from '../data/dummyData';
import { Link } from 'react-router-dom';

const Notices = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotices = notices.filter(notice => 
    notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notice.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20 bg-white">
      {/* Page Header */}
      <section className="bg-primary-900 py-32 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,165,233,0.15)_0%,transparent_70%)]"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Official Communications</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter italic">
              Notice <span className="text-primary-500">Board</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
              Official Announcements & Academic Circulars
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search */}
      <section className="py-12 border-b border-slate-100 sticky top-16 lg:top-20 z-30 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto relative group">
            <HiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 text-xl group-focus-within:text-primary-500 transition-colors" />
            <input
              type="text"
              placeholder="Search by title or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-8 py-5 rounded-2xl border-none bg-slate-50 focus:ring-2 focus:ring-primary-500 transition-all font-bold text-primary-900 shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section className="section-padding min-h-[600px] bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-10">
            <AnimatePresence mode="popLayout">
              {filteredNotices.map((notice, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  key={notice.id}
                  className="bg-white p-10 md:p-12 rounded-[3rem] shadow-premium border border-slate-100 hover:shadow-2xl hover:border-primary-500/20 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 rounded-bl-[3rem] -z-0"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 relative z-10">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-1 bg-primary-50 text-primary-500 rounded-xl text-[9px] font-black uppercase tracking-widest border border-primary-100">
                          {notice.type}
                        </span>
                        <span className="flex items-center text-slate-400 text-[10px] font-black uppercase tracking-widest">
                          <HiCalendar className="mr-2 text-primary-500 text-lg" /> {notice.date}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-primary-900 mb-6 group-hover:text-primary-500 transition-colors italic tracking-tight">
                        {notice.title}
                      </h3>
                      <p className="text-slate-500 font-medium leading-relaxed italic">{notice.desc}</p>
                    </div>
                    <div className="shrink-0">
                      <button className="flex items-center gap-3 bg-primary-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-500 transition-all shadow-2xl active:scale-95">
                        <HiDownload size={24} />
                        <span>PDF</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredNotices.length === 0 && (
              <div className="text-center py-32 bg-white rounded-[4rem] shadow-premium border-2 border-dashed border-slate-200">
                <div className="w-24 h-24 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-200 mx-auto mb-8">
                  <HiBell size={48} />
                </div>
                <h3 className="text-3xl font-black text-primary-900 italic tracking-tight">No notifications found</h3>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-4">Check back later for new updates.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-primary-900 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-premium border-[12px] border-slate-50 text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Get Enrolled</span>
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-12 leading-none">
                JOIN THE <span className="text-primary-500 underline decoration-white decoration-4 underline-offset-8">NEXT</span> BATCH
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                Stay updated and take the first step towards your future. Admissions for 2026-27 are now open.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link to="/admissions" className="px-16 py-6 bg-primary-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all shadow-2xl shadow-primary-500/40 active:scale-95">
                  Apply Online
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

export default Notices;
