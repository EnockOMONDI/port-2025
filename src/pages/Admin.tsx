import React from 'react';
import ProjectUploadForm from '../components/ProjectUploadForm';

const Admin = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#970d0d' }}>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Admin Dashboard</h1>
        <ProjectUploadForm />
      </div>
    </div>
  );
};

export default Admin; 