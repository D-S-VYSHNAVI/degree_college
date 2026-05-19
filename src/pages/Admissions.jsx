import React from 'react';
import { motion } from 'framer-motion';
import {
  HiCheckCircle,
  HiDocumentText,
  HiCreditCard,
  HiQuestionMarkCircle,
  HiArrowNarrowRight,
} from 'react-icons/hi';

import { Link } from 'react-router-dom';

const Admissions = () => {
  const steps = [
    {
      title: 'Digital Application',
      desc:
        'Complete the online admission form with your academic and personal details.',
    },

    {
      title: 'Document Verification',
      desc:
        'Submit academic certificates and required documents for verification.',
    },

    {
      title: 'Career Counselling',
      desc:
        'Interact with our academic mentors and choose the right course for your future.',
    },

    {
      title: 'Admission Confirmation',
      desc:
        'Complete fee payment and secure your seat at Sri Sai Degree College.',
    },
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-primary-900 text-white relative overflow-hidden py-28">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 via-[#0b3b70] to-primary-900"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto text-center"
          >

            <span className="text-sky-400 font-bold uppercase tracking-[5px] text-xs block mb-6">
              Join Our Legacy
            </span>

            <h1 className="font-black leading-tight tracking-tight">

              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Admissions
              </span>

              <span className="block text-sky-400 italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
                2026-27
              </span>

            </h1>

            <p className="mt-8 text-base sm:text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed uppercase tracking-[3px]">
              Shape Your Professional Journey with Sri Sai Degree College
            </p>

          </motion.div>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="py-24 bg-white">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-20">

            <span className="text-sky-500 font-bold uppercase tracking-[5px] text-xs block mb-4">
              Admission Process
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-primary-900">
              Simple & Transparent{' '}
              <span className="text-sky-500 italic">
                Procedure
              </span>
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-slate-200 rounded-[2rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-primary-900 text-white flex items-center justify-center text-2xl font-black mb-8">
                  {i + 1}
                </div>

                <h3 className="text-2xl font-black text-primary-900 mb-5 leading-tight">
                  {step.title}
                </h3>

                <p className="text-slate-600 leading-relaxed font-medium">
                  {step.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-slate-200"
            >

              <div className="flex items-center gap-5 mb-10">

                <div className="w-16 h-16 bg-primary-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <HiDocumentText size={30} />
                </div>

                <h3 className="text-3xl font-black text-primary-900">
                  Required Documents
                </h3>

              </div>

              <ul className="space-y-5">

                {[
                  '10th & Intermediate Marks Memo',
                  'Transfer Certificate',
                  'Passport Size Photographs',
                  'Aadhar Card Copy',
                  'Caste & Income Certificates',
                  'Migration Certificate (if required)',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-slate-700 font-semibold"
                  >
                    <HiCheckCircle className="text-sky-500 text-2xl" />
                    {item}
                  </li>
                ))}

              </ul>
            </motion.div>

            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary-900 rounded-[2.5rem] p-10 md:p-14 shadow-2xl text-white"
            >

              <div className="flex items-center gap-5 mb-10">

                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-sky-400 border border-white/10">
                  <HiCreditCard size={30} />
                </div>

                <h3 className="text-3xl font-black">
                  Eligibility Criteria
                </h3>

              </div>

              <div className="space-y-10">

                <div>

                  <h4 className="text-sky-400 uppercase tracking-[3px] text-xs font-bold mb-4">
                    BSc Courses
                  </h4>

                  <p className="text-slate-300 text-lg leading-relaxed">
                    Minimum 50% marks in Intermediate with Science subjects.
                  </p>

                </div>

                <div>

                  <h4 className="text-sky-400 uppercase tracking-[3px] text-xs font-bold mb-4">
                    BCom Courses
                  </h4>

                  <p className="text-slate-300 text-lg leading-relaxed">
                    Minimum 45% marks in Intermediate from recognized board.
                  </p>

                </div>

                <div className="pt-8 border-t border-white/10">

                  <p className="text-slate-400 text-sm uppercase tracking-[2px] font-bold">
                    Admissions are based on merit and document verification.
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-20">

            <span className="text-sky-500 font-bold uppercase tracking-[5px] text-xs block mb-4">
              Frequently Asked
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-primary-900">
              Common{' '}
              <span className="text-sky-500 italic">
                Questions
              </span>
            </h2>

          </div>

          <div className="max-w-4xl mx-auto space-y-8">

            {[
              {
                q: 'What is the last date for admissions?',
                a: 'Admissions for 2026-27 are open until June 30, 2026.',
              },

              {
                q: 'Is there any entrance exam?',
                a: 'No entrance exam. Admissions are based on Intermediate marks.',
              },

              {
                q: 'Are scholarships available?',
                a: 'Yes, merit-based scholarships are available for eligible students.',
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-200 rounded-[2rem] p-10 hover:shadow-xl transition-all duration-300"
              >

                <h3 className="flex items-start gap-4 text-primary-900 text-2xl font-black mb-5">
                  <HiQuestionMarkCircle className="text-sky-500 text-3xl shrink-0" />
                  {faq.q}
                </h3>

                <p className="text-slate-600 leading-relaxed pl-10 text-lg">
                  {faq.a}
                </p>

              </motion.div>
            ))}

          </div>

          {/* CTA */}
          <div className="text-center mt-20">

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-12 py-5 bg-primary-900 hover:bg-sky-500 transition-all duration-300 rounded-2xl text-white font-bold uppercase tracking-[2px] shadow-xl"
            >
              Apply Now
              <HiArrowNarrowRight />
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Admissions;