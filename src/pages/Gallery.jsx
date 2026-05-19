import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiPlus, HiZoomIn, HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const galleryImages = [
  {
    id: 1,
    title: 'College Main Entrance',
    category: 'Campus',
    url: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg',
  },

  {
    id: 2,
    title: 'Annual Cultural Fest',
    category: 'Events',
    url: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg',
  },

  {
    id: 3,
    title: 'Computer Science Lab',
    category: 'Facilities',
    url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
  },

  {
    id: 4,
    title: 'Basketball Tournament',
    category: 'Sports',
    url: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg',
  },

  {
    id: 5,
    title: 'Digital Library',
    category: 'Facilities',
    url: 'https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg',
  },

  {
    id: 6,
    title: 'Science Exhibition',
    category: 'Events',
    url: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg',
  },

  {
    id: 7,
    title: 'Graduation Ceremony',
    category: 'Events',
    url: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
  },

  {
    id: 8,
    title: 'Student Cafeteria',
    category: 'Facilities',
    url: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
  },

  {
    id: 9,
    title: 'Cricket Ground',
    category: 'Sports',
    url: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg',
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

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
            <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Visual Archives</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter italic">
              Campus <span className="text-primary-500">Gallery</span>
            </h1>
            <p className="text-xl text-slate-300 font-medium max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
              Witness the vibrant journey of Sri Sai Degree College.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 border-b border-slate-100 sticky top-16 lg:top-20 z-30 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border ${
                  filter === cat 
                  ? 'bg-primary-900 text-white border-primary-900 shadow-xl shadow-primary-900/20' 
                  : 'bg-white text-slate-400 border-slate-100 hover:border-primary-500 hover:text-primary-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <motion.div 
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10"
          >
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={img.id}
                  onClick={() => setSelectedImage(img)}
                  className="relative group cursor-pointer rounded-[3rem] overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-700 break-inside-avoid border-[12px] border-white"
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-primary-900/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col items-center justify-center p-10 text-center">
                    <div className="w-20 h-20 rounded-[2rem] bg-white/10 backdrop-blur-xl flex items-center justify-center text-white mb-6 scale-0 group-hover:scale-100 transition-transform duration-500 border border-white/20">
                      <HiZoomIn size={40} />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-3 italic tracking-tight">{img.title}</h4>
                    <span className="px-4 py-1.5 bg-primary-500 text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-2xl">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary-950/95 backdrop-blur-2xl flex items-center justify-center p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white/30 hover:text-white transition-all duration-500">
              <HiX size={64} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[75vh] object-contain rounded-[4rem] shadow-premium border-[16px] border-white/5" 
              />
              <div className="mt-12 text-center">
                <h3 className="text-4xl font-black text-white mb-4 italic tracking-tighter">{selectedImage.title}</h3>
                <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs italic">{selectedImage.category} Archive</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-primary-900 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden shadow-premium border-[12px] border-slate-50 text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <span className="text-primary-500 font-black uppercase tracking-[0.4em] text-xs mb-8 block italic">Experience Campus Life</span>
              <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter mb-12 leading-none">
                BE PART OF <span className="text-primary-500 underline decoration-white decoration-4 underline-offset-8">OUR STORY</span>
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                Join our vibrant community and create your own unforgettable memories at Sri Sai Degree College.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link to="/admissions" className="px-16 py-6 bg-primary-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all shadow-2xl shadow-primary-500/40 active:scale-95">
                  Start Application
                </Link>
                <Link to="/contact" className="px-16 py-6 border-2 border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-primary-900 transition-all">
                  Visit Campus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
