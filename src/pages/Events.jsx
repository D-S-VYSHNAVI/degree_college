import React from 'react';
import { motion } from 'framer-motion';
import { HiCalendar, HiLocationMarker, HiClock, HiArrowNarrowRight, HiStar } from 'react-icons/hi';
import { collegeInfo } from '../data/dummyData';
import { Link } from 'react-router-dom';

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Cultural Fest - Tarang 2026',
    date: 'June 05, 2026',
    time: '10:00 AM',
    location: 'College Auditorium',
    img: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg',
    desc: 'A celebration of art, music, and culture featuring performances from students across all departments.',
  },

  {
    id: 2,
    title: 'Tech Innovation Summit',
    date: 'June 12, 2026',
    time: '09:30 AM',
    location: 'Seminar Hall 1',
    img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    desc: 'Explore the latest in technology with guest speakers from top tech companies and student project showcases.',
  },

  {
    id: 3,
    title: 'Inter-College Sports Meet',
    date: 'June 20, 2026',
    time: '08:00 AM',
    location: 'College Ground',
    img: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg',
    desc: 'A competitive sports event featuring athletics, football, basketball, and more.',
  },
];

const pastEvents = [
  {
    id: 4,
    title: 'Convocation Ceremony 2025',
    date: 'Dec 15, 2025',
    location: 'Main Campus',
    img: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
  },

  {
    id: 5,
    title: 'Science Exhibition',
    date: 'Nov 10, 2025',
    location: 'Research Wing',
    img: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
  },

  {
    id: 6,
    title: 'Alumni Meet 2025',
    date: 'Oct 05, 2025',
    location: 'College Garden',
    img: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
  },
];

const Events = () => {
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
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Happening Now</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter italic">
              Events <span className="text-primary-500">& Activities</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
              Experience the pulse of our vibrant college community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-primary-900 italic tracking-tighter">Upcoming <span className="gradient-text">Milestones</span></h2>
            <div className="h-px flex-grow mx-12 bg-slate-200 hidden lg:block"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-20">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row bg-white rounded-[4rem] overflow-hidden shadow-premium border border-slate-100 group hover:shadow-2xl transition-all duration-700"
              >
                <div className="lg:w-2/5 h-96 lg:h-auto overflow-hidden relative">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-10 left-10 bg-white p-6 rounded-3xl shadow-2xl border-4 border-slate-50 text-center min-w-[100px]">
                    <div className="text-primary-900 font-black text-4xl leading-none italic">{event.date.split(' ')[1].replace(',', '')}</div>
                    <div className="text-primary-500 font-black uppercase text-[10px] tracking-widest mt-2">{event.date.split(' ')[0]}</div>
                  </div>
                </div>
                <div className="lg:w-3/5 p-12 md:p-20 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-8 mb-10 text-[10px] font-black uppercase tracking-[0.2em] text-primary-500">
                    <span className="flex items-center gap-3"><HiClock className="text-2xl" /> {event.time}</span>
                    <span className="flex items-center gap-3 text-slate-400"><HiLocationMarker className="text-2xl text-primary-500" /> {event.location}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-primary-900 mb-8 italic group-hover:text-primary-500 transition-colors tracking-tight leading-tight">{event.title}</h3>
                  <p className="text-slate-500 mb-12 text-xl font-medium leading-relaxed italic">{event.desc}</p>
                  <div>
                    <Link to="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-primary-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-500 transition-all shadow-2xl active:scale-95">
                      Register Now <HiArrowNarrowRight />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-primary-900 italic tracking-tighter">Past <span className="gradient-text">Glimpses</span></h2>
            <div className="h-px flex-grow mx-12 bg-slate-100 hidden lg:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pastEvents.map((event, i) => (
              <motion.div
                key={event.id}
                whileHover={{ y: -15 }}
                className="bg-slate-50 rounded-[3rem] overflow-hidden shadow-premium border border-slate-100 group transition-all duration-500"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
                </div>
                <div className="p-10">
                  <div className="text-primary-500 font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-3">
                    <HiCalendar size={18} /> {event.date}
                  </div>
                  <h4 className="text-2xl font-black text-primary-900 mb-6 group-hover:text-primary-500 transition-colors italic tracking-tight leading-tight">{event.title}</h4>
                  <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                    <HiLocationMarker className="mr-3 text-primary-500 text-lg" /> {event.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-24">
            <Link to="/gallery" className="inline-flex items-center gap-3 px-16 py-6 border-2 border-primary-900 text-primary-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-900 hover:text-white transition-all shadow-xl">
              Explore Full Gallery <HiArrowNarrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-primary-900 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-premium border-[12px] border-slate-50 text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Engagement</span>
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-12 leading-none">
                DON'T MISS <span className="text-primary-500 underline decoration-white decoration-4 underline-offset-8">A BEAT</span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                Stay connected with our latest events and activities. Be part of the legacy at Sri Sai Degree College.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link to="/notices" className="px-16 py-6 bg-primary-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all shadow-2xl shadow-primary-500/40 active:scale-95">
                  Notice Board
                </Link>
                <Link to="/contact" className="px-16 py-6 border-2 border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
