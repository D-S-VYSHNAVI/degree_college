import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { collegeInfo } from '../data/dummyData';

const Contact = () => {
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
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Connect With Us</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter italic">
              Reach <span className="text-primary-500">Out</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
              We are here to assist you in your academic journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-premium border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-bl-full -z-0"></div>
                <h3 className="text-3xl font-black text-primary-900 mb-12 italic tracking-tight">Send a Message</h3>
                <form className="space-y-10 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-8 py-5 rounded-2xl border-none bg-slate-50 focus:ring-2 focus:ring-primary-500 transition-all font-bold text-primary-900 shadow-inner" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-8 py-5 rounded-2xl border-none bg-slate-50 focus:ring-2 focus:ring-primary-500 transition-all font-bold text-primary-900 shadow-inner" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Subject</label>
                    <input type="text" placeholder="Admission Query" className="w-full px-8 py-5 rounded-2xl border-none bg-slate-50 focus:ring-2 focus:ring-primary-500 transition-all font-bold text-primary-900 shadow-inner" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Your Message</label>
                    <textarea rows="5" placeholder="How can we help you today?" className="w-full px-8 py-5 rounded-2xl border-none bg-slate-50 focus:ring-2 focus:ring-primary-500 transition-all font-bold text-primary-900 shadow-inner resize-none"></textarea>
                  </div>
                  <button className="w-full md:w-auto px-16 py-6 bg-primary-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-500 transition-all shadow-2xl active:scale-95">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/3">
              <div className="space-y-16">
                <div>
                  <h3 className="text-3xl font-black text-primary-900 mb-12 italic tracking-tight">Information</h3>
                  <div className="space-y-10">
                    <div className="flex gap-8 group">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-500 shrink-0 group-hover:bg-primary-900 group-hover:text-white transition-all duration-500 shadow-premium border border-slate-100">
                        <FaMapMarkerAlt size={28} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Campus Address</h4>
                        <p className="text-primary-900 font-bold leading-relaxed italic">{collegeInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex gap-8 group">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-500 shrink-0 group-hover:bg-primary-900 group-hover:text-white transition-all duration-500 shadow-premium border border-slate-100">
                        <FaPhone size={28} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Direct Contact</h4>
                        <p className="text-primary-900 font-bold tracking-widest">{collegeInfo.phone}</p>
                      </div>
                    </div>
                    <div className="flex gap-8 group">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary-500 shrink-0 group-hover:bg-primary-900 group-hover:text-white transition-all duration-500 shadow-premium border border-slate-100">
                        <FaEnvelope size={28} />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Email Inquiry</h4>
                        <p className="text-primary-900 font-bold tracking-widest">{collegeInfo.email}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-16 border-t border-slate-200">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 ml-2">Digital Presence</h4>
                  <div className="flex space-x-5">
                    {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                      <a key={i} href="#" className="w-16 h-16 rounded-2xl bg-white shadow-premium flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-white hover:-translate-y-2 transition-all duration-500 border border-slate-100 group">
                        <Icon size={24} className="group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[600px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 border-t-8 border-white">
        <iframe 
          title="College Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.4574343826!2d79.7144!3d16.2238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDEzJzI1LjciTiA3OcKwNDInNTEuOCJF!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin" 
          className="w-full h-full border-none"
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
