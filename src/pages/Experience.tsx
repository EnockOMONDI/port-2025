import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: 'Creative and Tech Officer',
      company: 'Novustell Travel',
      period: '2021–Present',
      description: 'Leading the creative and technical direction of the company, managing brand identity, developing web solutions, and implementing digital marketing strategies. Increased online presence by 200% through strategic digital campaigns.',
      responsibilities: [
        'Developed and maintained company website using Django and React',
        'Created and executed digital marketing campaigns',
        'Managed brand identity and visual communications',
        'Led technical implementation of booking systems',
      ],
    },
    {
      title: 'Creative Lead',
      company: 'Kipekee Designs',
      period: '2024–Present',
      description: 'Spearheading creative projects and managing client relationships. Responsible for delivering high-quality design solutions across various platforms and media.',
      responsibilities: [
        'Led brand identity projects for major clients',
        'Managed team of designers and developers',
        'Developed creative strategies and presentations',
        'Oversaw quality control of all deliverables',
      ],
    },
    {
      title: 'Founder',
      company: 'Juice Wave Radio',
      period: '2019–2021',
      description: 'Founded and managed an online radio platform, creating engaging content and building a community of listeners. Developed the technical infrastructure and managed all aspects of the business.',
      responsibilities: [
        'Developed and maintained streaming platform',
        'Created and managed content strategy',
        'Built and engaged community of listeners',
        'Managed technical operations and infrastructure',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-16">
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Experience</h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div 
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                          <p className="text-blue-600">{experience.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{experience.period}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-600 mb-4">{experience.description}</p>
                          <div className="space-y-2">
                            {experience.responsibilities.map((responsibility, respIndex) => (
                              <motion.p
                                key={respIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: respIndex * 0.1 }}
                                className="text-gray-600 flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                {responsibility}
                              </motion.p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;