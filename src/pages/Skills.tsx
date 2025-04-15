import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code, Layout, Share, Film, PenTool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: 'Branding & Identity',
      skills: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Typography'],
      tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Canva'],
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: 'Web Development',
      skills: ['Frontend Development', 'Backend Development', 'Database Design', 'API Integration'],
      tools: ['Python', 'Django', 'React', 'PostgreSQL', 'REST APIs'],
    },
    {
      icon: <Layout className="w-8 h-8 text-blue-600" />,
      title: 'Graphic Design',
      skills: ['Print Design', 'Digital Design', 'Layout Design', 'Illustration'],
      tools: ['Adobe Creative Suite', 'Sketch', 'InDesign', 'Procreate'],
    },
    {
      icon: <Share className="w-8 h-8 text-blue-600" />,
      title: 'Social Media & Digital Campaigns',
      skills: ['Content Strategy', 'Social Media Management', 'Campaign Planning', 'Analytics'],
      tools: ['HubSpot', 'Buffer', 'Google Analytics', 'Facebook Ads Manager'],
    },
    {
      icon: <Film className="w-8 h-8 text-blue-600" />,
      title: 'Multimedia Production',
      skills: ['Video Editing', 'Motion Graphics', 'Sound Design', 'Color Grading'],
      tools: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Audition'],
    },
    {
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
      title: 'Proposal & Creative Writing',
      skills: ['Copywriting', 'Content Creation', 'Technical Writing', 'Storytelling'],
      tools: ['Microsoft Office', 'Google Workspace', 'Grammarly', 'Hemingway Editor'],
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900">Skills & Expertise</h1>
            <p className="mt-4 text-xl text-gray-600">
              A comprehensive overview of my professional capabilities and tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">SKILLS</h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-600">{skill}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">TOOLS</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
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

export default Skills;