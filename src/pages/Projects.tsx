import React from 'react';

const projects = [
  {
    title: 'Modern Branding Suite',
    description: 'A full branding package for a tech startup, including logo, color palette, and brand guidelines.',
    type: 'Branding',
  },
  {
    title: 'E-commerce Website',
    description: 'Designed and developed a responsive online store for a local retailer.',
    type: 'Websites',
  },
  {
    title: 'Social Media Ad Campaign',
    description: 'Created a series of engaging graphics and copy for a successful Facebook/Instagram ad campaign.',
    type: 'Ads Campaigns',
  },
  {
    title: 'Event Poster Series',
    description: 'A set of eye-catching posters for a city-wide music festival.',
    type: 'Graphic design',
  },
];

const Projects = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: '#970d0d' }}
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center">
        <div>
          <div className="text-white text-xl mb-2">Project Portfolio</div>
          <h1 className="text-white font-extrabold text-6xl md:text-7xl leading-tight mb-8">
            HIGHLIGHTED<br />PROJECTS
          </h1>
        </div>
        <ul className="text-white text-2xl font-light list-disc ml-8">
          <li>Graphic design</li>
          <li>Websites</li>
          <li>Branding</li>
          <li>Ads Campaigns</li>
        </ul>
      </div>
      <div className="w-full max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl p-6 text-white shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <div className="text-yellow-300 font-semibold mb-2">{project.type}</div>
            <p className="text-lg">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <span
          className="flex justify-center items-center rounded-full"
          style={{
            backgroundColor: '#ffe23f',
            width: 48,
            height: 48,
          }}
        >
          <svg width="24" height="24" fill="none" stroke="#970d0d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8v8M8 16l4 4 4-4" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Projects;