import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiOutlineDocumentDownload, HiOutlineClipboardList, HiOutlineAcademicCap, HiOutlineSpeakerphone, HiArrowNarrowRight } from 'react-icons/hi';
import { collegeInfo } from '../data/dummyData';
import { Link } from 'react-router-dom';

const downloadCategories = [
  {
    title: 'Admission Forms',
    icon: HiOutlineDocumentDownload,
    items: [
      { name: 'UG Application Form 2026-27', size: '1.2 MB', date: 'May 2026' },
      { name: 'Hostel Registration Form', size: '850 KB', date: 'May 2026' },
      { name: 'Scholarship Application', size: '1.1 MB', date: 'May 2026' },
    ]
  },
  {
    title: 'Academic Resources',
    icon: HiOutlineAcademicCap,
    items: [
      { name: 'College Prospectus 2026', size: '15.2 MB', date: 'Jan 2026' },
      { name: 'Academic Calendar 2026-27', size: '2.4 MB', date: 'Apr 2026' },
      { name: 'Course Syllabus - All Streams', size: '4.8 MB', date: 'Mar 2026' },
    ]
  },
  {
    title: 'Exam & Timetables',
    icon: HiOutlineClipboardList,
    items: [
      { name: 'Semester Exam Timetable June 2026', size: '1.8 MB', date: 'May 2026' },
      { name: 'Internal Assessment Schedule', size: '950 KB', date: 'Apr 2026' },
    ]
  },
  {
    title: 'Notices & Guidelines',
    icon: HiOutlineSpeakerphone,
    items: [
      { name: 'Student Code of Conduct', size: '2.1 MB', date: 'Aug 2025' },
      { name: 'Anti-Ragging Regulations', size: '1.6 MB', date: 'Aug 2025' },
    ]
  }
];

const Downloads = () => {
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
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Academic Assets</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter italic">
              Official <span className="text-primary-500">Downloads</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
              Access essential documents, forms, and institutional resources.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {downloadCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[4rem] p-12 md:p-16 border border-slate-100 shadow-premium group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-bl-full -z-0"></div>
                <div className="flex items-center gap-8 mb-12 relative z-10">
                  <div className="w-16 h-16 bg-primary-900 rounded-2xl flex items-center justify-center text-white shadow-2xl group-hover:rotate-6 transition-all duration-500">
                    <cat.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-primary-900 italic tracking-tight">{cat.title}</h3>
                </div>
                
                <div className="space-y-6 relative z-10">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-8 rounded-[2.5rem] flex items-center justify-between group/item hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary-100">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-white text-slate-300 rounded-2xl flex items-center justify-center group-hover/item:bg-primary-900 group-hover/item:text-white transition-all duration-500 shadow-sm">
                          <HiDownload size={28} />
                        </div>
                        <div>
                          <h4 className="text-lg font-black text-primary-900 group-hover/item:text-primary-500 transition-colors italic tracking-tight leading-none">{item.name}</h4>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">{item.size} • {item.date}</p>
                        </div>
                      </div>
                      <button className="hidden sm:block text-primary-500 font-black text-[10px] uppercase tracking-widest hover:text-primary-900 transition-colors">
                        Download PDF
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-primary-900 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-premium border-[12px] border-slate-50 text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Support Desk</span>
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-12 leading-none">
                MISSING A <span className="text-primary-500 underline decoration-white decoration-4 underline-offset-8">DOCUMENT?</span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                If you cannot find the specific resource you are looking for, please contact our administrative office directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link to="/contact" className="px-16 py-6 bg-primary-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all shadow-2xl shadow-primary-500/40 active:scale-95 flex items-center justify-center gap-3">
                  Contact Office <HiArrowNarrowRight />
                </Link>
                <Link to="/" className="px-16 py-6 border-2 border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;
