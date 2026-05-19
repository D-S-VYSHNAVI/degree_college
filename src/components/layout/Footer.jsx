import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { collegeInfo } from '../../data/dummyData';

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-slate-300 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-900/20 skew-x-12 translate-x-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* College Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center font-black text-3xl text-primary-900 shadow-2xl group-hover:rotate-6 transition-all duration-500 border-2 border-primary-500">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter text-white leading-none">
                  SRI SAI
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-500">
                  Degree College
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              {collegeInfo.tagline}. Dedicated to academic excellence, discipline, and holistic student development in Karempudi.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-primary-500 hover:text-white transition-all duration-500 border border-white/10 group">
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Academic Links */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-10 relative">
              Academics
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-primary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {['BSc Computer Science', 'BSc Chemistry', 'BCom Computers', 'BCom General', 'Departments', 'Faculty'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-slate-400 hover:text-primary-500 transition-all flex items-center space-x-3 group font-bold text-xs uppercase tracking-widest">
                    <FaArrowRight className="w-3 h-3 text-primary-500/50 group-hover:translate-x-1 transition-transform" />
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-10 relative">
              Useful Links
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-primary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {['About Us', 'Admissions', 'Notice Board', 'Gallery', 'Downloads', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-slate-400 hover:text-primary-500 transition-all flex items-center space-x-3 group font-bold text-xs uppercase tracking-widest">
                    <FaArrowRight className="w-3 h-3 text-primary-500/50 group-hover:translate-x-1 transition-transform" />
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-10 relative">
              Get In Touch
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-primary-500 rounded-full"></span>
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0 border border-primary-500/20">
                  <FaMapMarkerAlt size={16} />
                </div>
                <span className="text-slate-400 font-bold text-sm leading-relaxed uppercase tracking-wider">{collegeInfo.address}</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0 border border-primary-500/20">
                  <FaPhone size={16} />
                </div>
                <span className="text-slate-400 font-bold text-sm tracking-widest">{collegeInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500 shrink-0 border border-primary-500/20">
                  <FaEnvelope size={16} />
                </div>
                <span className="text-slate-400 font-bold text-sm tracking-widest">{collegeInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-slate-500 font-black text-[10px] uppercase tracking-[0.3em]">
              © 2026 {collegeInfo.name}
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-slate-800"></span>
            <p className="text-slate-600 font-bold text-[10px] uppercase tracking-widest">
              Built for Academic Excellence
            </p>
          </div>
          <div className="flex space-x-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <Link to="#" className="hover:text-primary-500 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary-500 transition-colors">Terms of Use</Link>
            <Link to="#" className="hover:text-primary-500 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
