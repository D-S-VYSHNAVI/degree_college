import React from 'react';
import { motion } from 'framer-motion';
import { HiHome, HiQuestionMarkCircle, HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900/5 blur-[120px] rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-primary-500/5 blur-[120px] rounded-full -translate-x-1/2"></div>
      
      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="relative inline-block mb-12"
        >
          <h1 className="text-[180px] md:text-[300px] font-black text-slate-50 leading-none select-none italic tracking-tighter">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                y: [0, -15, 0]
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="w-32 h-32 md:w-56 md:h-56 bg-white rounded-[4rem] shadow-premium flex items-center justify-center border border-slate-100"
            >
              <HiQuestionMarkCircle className="text-primary-500 w-24 h-24 md:w-40 md:h-40" />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-black text-primary-900 mb-8 italic tracking-tighter leading-tight">Lost in <span className="gradient-text">Campus?</span></h2>
          <p className="text-slate-500 text-xl mb-16 font-medium leading-relaxed italic">
            The resource you are looking for has either graduated, relocated, or was never part of our institutional archives.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link to="/" className="px-16 py-6 bg-primary-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-500 transition-all shadow-2xl flex items-center justify-center gap-3">
              <HiHome size={24} /> Back to Home
            </Link>
            <Link to="/contact" className="px-16 py-6 border-2 border-primary-900 text-primary-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-50 transition-all flex items-center justify-center gap-3">
              Contact Office <HiArrowNarrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
