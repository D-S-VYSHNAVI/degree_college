import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  HiAcademicCap,
  HiBriefcase,
  HiTag,
  HiSearch,
  HiBeaker,
  HiArrowNarrowRight,
} from 'react-icons/hi';

import { facultyData } from '../data/dummyData';

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDept, setFilterDept] = useState('All');

  const departments = ['All', ...new Set(facultyData.map((f) => f.dept))];

  const filteredFaculty = facultyData.filter((f) => {
    const matchesSearch =
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDept =
      filterDept === 'All' || f.dept === filterDept;

    return matchesSearch && matchesDept;
  });

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-900 py-28 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-[#0b3b70] to-primary-900 opacity-95"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-sky-400 font-bold uppercase tracking-[5px] text-xs block mb-6">
              Academic Team
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
              Our Distinguished{' '}
              <span className="text-sky-400 italic">
                Faculty
              </span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Meet the experienced educators and academic professionals
              dedicated to shaping future leaders at Sri Sai Degree College.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <HiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />

              <input
                type="text"
                placeholder="Search faculty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-5 py-4 rounded-2xl bg-slate-100 border border-slate-200 outline-none focus:ring-2 focus:ring-sky-400 text-primary-900 font-semibold"
              />
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setFilterDept(dept)}
                  className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-[2px] transition-all duration-300 ${
                    filterDept === dept
                      ? 'bg-primary-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-primary-900 hover:text-white'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Cards */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <AnimatePresence>
              {filteredFaculty.map((faculty) => (
                <motion.div
                  key={faculty.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Top Accent */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-900 via-sky-400 to-primary-900"></div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary-900 text-white flex items-center justify-center mb-8 shadow-lg">
                    {faculty.dept === 'Science' ? (
                      <HiBeaker size={30} />
                    ) : (
                      <HiAcademicCap size={30} />
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-black text-primary-900 leading-tight">
                    {faculty.name}
                  </h3>

                  {/* Role */}
                  <p className="text-sky-500 uppercase tracking-[3px] text-xs font-bold mt-3">
                    {faculty.role}
                  </p>

                  {/* Details */}
                  <div className="mt-8 space-y-5">

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary-900">
                        <HiAcademicCap size={20} />
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[2px] text-slate-400 font-bold">
                          Qualification
                        </p>

                        <p className="font-bold text-primary-900">
                          {faculty.qual}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary-900">
                        <HiTag size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[2px] text-slate-400 font-bold">
                          Department
                        </p>

                        <p className="font-bold text-primary-900 uppercase">
                          {faculty.dept}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-primary-900">
                        <HiBriefcase size={18} />
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[2px] text-slate-400 font-bold">
                          Status
                        </p>

                        <p className="font-bold text-green-600">
                          {faculty.status}
                        </p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

          </div>

          {/* Empty State */}
          {filteredFaculty.length === 0 && (
            <div className="text-center py-24">
              <h3 className="text-3xl font-black text-primary-900">
                No Faculty Found
              </h3>

              <p className="text-slate-500 mt-4">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-[#0d4178] to-primary-900 opacity-95"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Join Our Academic{' '}
              <span className="text-sky-400 italic">
                Excellence
              </span>
            </h2>

            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              Sri Sai Degree College continuously strives to provide
              outstanding education and professional development.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-sky-500 hover:bg-white hover:text-primary-900 transition-all duration-300 rounded-2xl text-white font-bold uppercase tracking-[2px] shadow-xl"
            >
              Contact Us
              <HiArrowNarrowRight />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;