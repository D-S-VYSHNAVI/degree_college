import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown, HiChevronUp, HiQuestionMarkCircle, HiArrowNarrowRight } from 'react-icons/hi';
import { collegeInfo } from '../data/dummyData';
import { Link } from 'react-router-dom';

const faqs = [
  { 
    q: "What courses are offered at Sri Sai Degree College?", 
    a: "We offer specialized BSc Computer Science, BSc Chemistry, BCom Computers, and BCom General programs. All our degrees are affiliated with recognized universities and follow a modern, industry-aligned curriculum." 
  },
  { 
    q: "How can I apply for admission?", 
    a: "You can apply through our digital admission portal on the website or visit our campus in Karempudi for personalized guidance. Our administrative office is open from 9:00 AM to 5:00 PM for offline registrations." 
  },
  { 
    q: "Is there any entrance exam for BSc Computer Science?", 
    a: "Admissions are primarily based on your 10+2 merit scores. However, we conduct a brief interactive session or a foundational aptitude test for certain specialized programs to assess student alignment." 
  },
  { 
    q: "What is the fee structure for BCom Computers?", 
    a: "Our fee structure is competitive and transparent. For the detailed breakdown of the 2026-27 session, please download the official fee chart from our 'Downloads' page or connect with our financial office." 
  },
  { 
    q: "Does the college provide placement support?", 
    a: "Absolutely. We have a robust career excellence cell that provides soft skills training, technical bootcamps, and connects students with top recruiters for campus placement drives." 
  },
  { 
    q: "Are there any scholarship opportunities?", 
    a: "Yes, we actively facilitate state and central government scholarships. Additionally, Sri Sai Degree College offers exclusive merit-based institutional scholarships for high-achieving students." 
  },
];

const FAQItem = ({ faq, isOpen, toggle }) => (
  <div className="border-b border-slate-100 last:border-0 overflow-hidden">
    <button
      onClick={toggle}
      className="w-full py-10 flex items-center justify-between text-left group"
    >
      <span className={`text-xl md:text-2xl font-black transition-colors italic tracking-tight ${isOpen ? 'text-primary-500' : 'text-primary-900 group-hover:text-primary-500'}`}>
        {faq.q}
      </span>
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 ${isOpen ? 'bg-primary-900 text-white rotate-180 shadow-xl' : 'bg-slate-50 text-slate-400 group-hover:bg-primary-50 group-hover:text-primary-500'}`}>
        <HiChevronDown size={28} />
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
        >
          <p className="pb-10 text-slate-500 font-medium leading-relaxed text-lg italic border-l-4 border-primary-500 pl-8 ml-2">
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Academic Support</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter italic">
              Common <span className="text-primary-500">Queries</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
              Find answers to all your questions about Sri Sai Degree College.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-[4rem] shadow-premium border border-slate-100 p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-bl-full -z-0"></div>
              <div className="flex items-center gap-6 mb-16 relative z-10">
                <div className="w-16 h-16 bg-primary-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <HiQuestionMarkCircle size={32} />
                </div>
                <h3 className="text-3xl font-black text-primary-900 italic tracking-tight">Institutional FAQ</h3>
              </div>
              <div className="divide-y divide-slate-100 relative z-10">
                {faqs.map((faq, index) => (
                  <FAQItem 
                    key={index} 
                    faq={faq} 
                    isOpen={openIndex === index} 
                    toggle={() => setOpenIndex(openIndex === index ? -1 : index)} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Still have questions? */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="bg-primary-900 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-premium border-[12px] border-slate-50 text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Still Curious?</span>
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-12 leading-none">
                NEED MORE <span className="text-primary-500 underline decoration-white decoration-4 underline-offset-8">CLARITY?</span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                Our support team is always ready to assist you. Reach out to us for any specific queries or campus visits.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link to="/contact" className="px-16 py-6 bg-primary-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all shadow-2xl shadow-primary-500/40 active:scale-95 flex items-center justify-center gap-3">
                  Connect With Us <HiArrowNarrowRight />
                </Link>
                <Link to="/about" className="px-16 py-6 border-2 border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all">
                  About Our Vision
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
