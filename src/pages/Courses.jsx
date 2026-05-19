import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  HiClock,
  HiAcademicCap,
  HiLightningBolt,
  HiArrowNarrowRight,
  HiCheckCircle,
} from 'react-icons/hi';

import { courses } from '../data/dummyData';

const Courses = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">

      {/* Hero Section */}
      <section className="bg-primary-900 py-28 relative overflow-hidden text-white">
        
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg"
            alt="Courses"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-900"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-sky-400 font-bold uppercase tracking-[5px] text-xs block mb-6">
              Academic Programs
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
              Empowering{' '}
              <span className="text-sky-400 italic">
                Your Future
              </span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed">
              Industry-focused undergraduate programs at Sri Sai Degree College.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-28">

            {courses.map((course, i) => (

              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col lg:flex-row gap-14 items-center ${
                  i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >

                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">

                    <img
                      src={course.image}
                      alt={course.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg';
                      }}
                      className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                    />

                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">

                  <div className="flex flex-wrap items-center gap-4 mb-6">

                    <span className="px-5 py-2 rounded-xl bg-primary-900 text-white text-xs font-bold uppercase tracking-[2px]">
                      {course.dept}
                    </span>

                    <span className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white border border-slate-200 text-primary-900 text-xs font-bold uppercase tracking-[2px] shadow-sm">
                      <HiClock />
                      {course.duration}
                    </span>

                  </div>

                  <h2 className="text-4xl md:text-5xl font-black text-primary-900 leading-tight mb-6">
                    {course.title}
                  </h2>

                  <p className="text-slate-600 text-lg leading-relaxed mb-10">
                    {course.desc || 'Professional undergraduate degree program designed to build strong academic and career foundations.'}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Career Opportunities */}
                    <div>

                      <h4 className="flex items-center gap-3 text-primary-900 font-black uppercase tracking-[3px] text-xs mb-6">
                        <HiAcademicCap className="text-sky-500 text-2xl" />
                        Career Opportunities
                      </h4>

                      <ul className="space-y-4">

                        {(course.opportunities || []).map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-slate-600 font-semibold"
                          >
                            <HiCheckCircle className="text-sky-500 text-xl" />
                            {item}
                          </li>
                        ))}

                      </ul>
                    </div>

                    {/* Highlights */}
                    <div>

                      <h4 className="flex items-center gap-3 text-primary-900 font-black uppercase tracking-[3px] text-xs mb-6">
                        <HiLightningBolt className="text-sky-500 text-2xl" />
                        Highlights
                      </h4>

                      <ul className="space-y-4">

                        {(course.highlights || []).map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-slate-600 font-semibold"
                          >
                            <HiCheckCircle className="text-sky-500 text-xl" />
                            {item}
                          </li>
                        ))}

                      </ul>
                    </div>

                  </div>

                  {/* Buttons */}
                  <div className="mt-12 flex flex-col sm:flex-row gap-5">

                    <Link
                      to="/admissions"
                      className="px-10 py-5 bg-primary-900 hover:bg-sky-500 transition-all duration-300 rounded-2xl text-white font-bold uppercase tracking-[2px] flex items-center justify-center gap-3 shadow-xl"
                    >
                      Apply Now
                      <HiArrowNarrowRight />
                    </Link>

                    <Link
                      to="/contact"
                      className="px-10 py-5 border-2 border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white transition-all duration-300 rounded-2xl font-bold uppercase tracking-[2px] text-center"
                    >
                      Contact Office
                    </Link>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Courses;