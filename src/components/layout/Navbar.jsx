import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown, HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { collegeInfo } from '../../data/dummyData';

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'About', 
    path: '/about',
    dropdown: [
      { name: 'Our History', path: '/about#history' },
      { name: 'Management', path: '/about#management' },
      { name: 'Infrastructure', path: '/about#infrastructure' },
    ]
  },
  { 
    name: 'Academics', 
    path: '#',
    dropdown: [
      { name: 'All Courses', path: '/courses' },
      { name: 'Departments', path: '/departments' },
      { name: 'Faculty Profiles', path: '/faculty' },
    ]
  },
  { 
    name: 'Campus Life', 
    path: '/student-life',
    dropdown: [
      { name: 'Student Life', path: '/student-life' },
      { name: 'Photo Gallery', path: '/gallery' },
      { name: 'Events', path: '/events' },
    ]
  },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      {/* Top Bar */}
      <div className={`bg-primary-950 text-white/80 py-2 hidden lg:block border-b border-white/5 transition-all duration-500 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="container-custom flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
          <div className="flex items-center space-x-6">
            <a href={`tel:${collegeInfo.phone}`} className="flex items-center space-x-2 hover:text-primary-500 transition-colors">
              <HiPhone className="text-primary-500" size={14} />
              <span>{collegeInfo.phone}</span>
            </a>
            <a href={`mailto:${collegeInfo.email}`} className="flex items-center space-x-2 hover:text-primary-500 transition-colors">
              <HiMail className="text-primary-500" size={14} />
              <span>{collegeInfo.email}</span>
            </a>
            <div className="flex items-center space-x-2">
              <HiLocationMarker className="text-primary-500" size={14} />
              <span>Karempudi, AP</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 border-r border-white/10 pr-4">
              <a href="#" className="hover:text-primary-500 transition-colors"><FaFacebook size={12} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><FaTwitter size={12} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><FaInstagram size={12} /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><FaLinkedin size={12} /></a>
            </div>
            <Link to="/notices" className="hover:text-primary-500 transition-colors">Notice Board</Link>
            <Link to="/downloads" className="hover:text-primary-500 transition-colors">Downloads</Link>
          </div>
        </div>
      </div>

      <nav 
        className={`transition-all duration-500 ${
          scrolled 
            ? 'bg-primary-900 shadow-2xl py-2' 
            : isHome ? 'bg-transparent py-6' : 'bg-primary-900 py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-black text-2xl text-primary-900 shadow-2xl group-hover:rotate-6 transition-all duration-500 border-2 border-primary-500">
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

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center space-x-1 text-white/90 hover:text-white hover:bg-white/10`}
                  >
                    <span>{link.name}</span>
                    {link.dropdown && <HiChevronDown className={`w-4 h-4 transition-transform duration-500 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-premium py-4 border border-slate-100 overflow-hidden"
                        >
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-6 py-3 text-xs font-black uppercase tracking-wider text-primary-900 hover:bg-primary-50 hover:text-primary-500 transition-all border-l-4 border-transparent hover:border-primary-500"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <div className="pl-4 border-l border-white/10 ml-4">
                <Link
                  to="/admissions"
                  className="px-8 py-3 bg-primary-500 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all shadow-xl shadow-primary-500/20 active:scale-95"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 text-white bg-white/10 rounded-xl hover:bg-white/20 transition-all"
              >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 lg:hidden bg-primary-900 z-[60] overflow-y-auto"
            >
              <div className="container-custom py-8">
                <div className="flex justify-between items-center mb-12">
                  <Link to="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-black text-2xl text-primary-900">
                      S
                    </div>
                    <div className="flex flex-col">
                      <span className="font-black text-2xl text-white leading-none">SRI SAI</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary-500">Degree College</span>
                    </div>
                  </Link>
                  <button onClick={() => setIsOpen(false)} className="p-3 text-white bg-white/10 rounded-xl">
                    <HiX size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.name} className="border-b border-white/5 pb-4">
                      <Link
                        to={link.path}
                        className="block text-2xl font-black text-white uppercase tracking-tighter hover:text-primary-500"
                        onClick={() => !link.dropdown && setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <div className="mt-4 grid grid-cols-1 gap-3 pl-4">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="text-white/60 font-bold text-sm hover:text-white uppercase tracking-widest"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-12 space-y-6">
                  <Link
                    to="/admissions"
                    className="block w-full text-center bg-primary-500 text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-2xl"
                    onClick={() => setIsOpen(false)}
                  >
                    Admissions 2026
                  </Link>
                  <div className="flex justify-center space-x-6 text-white/50">
                    <FaFacebook size={24} />
                    <FaTwitter size={24} />
                    <FaInstagram size={24} />
                    <FaLinkedin size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
