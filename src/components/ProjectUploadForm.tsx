import React, { useState } from 'react';
import { Widget } from '@uploadcare/react-widget';
import { ProjectCategory } from '../types/Project';

interface ProjectFormData {
  // Common fields
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string;
  imageUrl: string;
  githubUrl: string;
  resultsAchieved: string;

  // Website Projects
  websiteUrl: string;

  // Digital Campaign
  campaignGoal: string;
  strategyOverview: string;
  platformsUsed: string;
  campaignLink: string;

  // Graphic Design
  designType: string;
  clientName: string;
  projectOutcome: string;

  // Video Editing
  videoPurpose: string;
  clientOrganization: string;
  videoLink: string;
  keyResults: string;
}

const API_URL = import.meta.env.DEV 
  ? 'http://localhost:3000/api'
  : '/api';

const ProjectUploadForm = () => {
  const [formData, setFormData] = useState<ProjectFormData>({
    // Common fields
    title: '',
    description: '',
    category: 'Website Projects',
    technologies: '',
    imageUrl: '',
    githubUrl: '',
    resultsAchieved: '',

    // Website Projects
    websiteUrl: '',

    // Digital Campaign
    campaignGoal: '',
    strategyOverview: '',
    platformsUsed: '',
    campaignLink: '',

    // Graphic Design
    designType: '',
    clientName: '',
    projectOutcome: '',

    // Video Editing
    videoPurpose: '',
    clientOrganization: '',
    videoLink: '',
    keyResults: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (fileInfo: any) => {
    setFormData((prev) => ({
      ...prev,
      imageUrl: fileInfo.cdnUrl,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      if (!formData.imageUrl) {
        throw new Error('Please upload an image');
      }

      const projectData = {
        ...formData,
        technologies: formData.technologies.split(',').map(t => t.trim()),
        platformsUsed: formData.platformsUsed ? formData.platformsUsed.split(',').map(p => p.trim()) : [],
        completionDate: new Date().toISOString(),
      };

      console.log('Submitting project data:', projectData);

      const response = await fetch(`${API_URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
        credentials: 'include'
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload project');
      }

      console.log('Project created:', data);
      setMessage('Project uploaded successfully!');
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        category: 'Website Projects',
        technologies: '',
        imageUrl: '',
        githubUrl: '',
        resultsAchieved: '',
        websiteUrl: '',
        campaignGoal: '',
        strategyOverview: '',
        platformsUsed: '',
        campaignLink: '',
        designType: '',
        clientName: '',
        projectOutcome: '',
        videoPurpose: '',
        clientOrganization: '',
        videoLink: '',
        keyResults: ''
      });

    } catch (error) {
      console.error('Upload error:', error);
      setMessage(error instanceof Error ? error.message : 'Error uploading project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-white">Upload New Project</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Common Fields */}
        <div>
          <label className="block text-white mb-2">Project Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
          >
            <option value="Website Projects">Website Projects</option>
            <option value="Digital Campaign">Digital Campaign</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Video Editing">Video Editing</option>
          </select>
        </div>

        <div>
          <label className="block text-white mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
          />
        </div>

        {/* Website Projects Fields */}
        {formData.category === 'Website Projects' && (
          <>
            <div>
              <label className="block text-white mb-2">Website URL</label>
              <input
                type="url"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleInputChange}
                required
                className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
              />
            </div>
          </>
        )}

        {/* Digital Campaign Fields */}
        {formData.category === 'Digital Campaign' && (
          <>
            <div>
              <label className="block text-white mb-2">Campaign Goal</label>
              <textarea
                name="campaignGoal"
                value={formData.campaignGoal}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Strategy Overview</label>
              <textarea
                name="strategyOverview"
                value={formData.strategyOverview}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Platforms Used (comma-separated)</label>
              <input
                type="text"
                name="platformsUsed"
                value={formData.platformsUsed}
                onChange={handleInputChange}
                required
                placeholder="e.g., Instagram, Facebook, YouTube"
                className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Campaign Link (optional)</label>
              <input
                type="url"
                name="campaignLink"
                value={formData.campaignLink}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
              />
            </div>
          </>
        )}

        {/* Graphic Design Fields */}
        {formData.category === 'Graphic Design' && (
          <>
            <div>
              <label className="block text-white mb-2">Design Type</label>
              <input
                type="text"
                name="designType"
                value={formData.designType}
                onChange={handleInputChange}
                required
                placeholder="e.g., Logo, Poster, Banner"
                className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Client Name (optional)</label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Project Outcome</label>
              <textarea
                name="projectOutcome"
                value={formData.projectOutcome}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
              />
            </div>
          </>
        )}

        {/* Video Editing Fields */}
        {formData.category === 'Video Editing' && (
          <>
            <div>
              <label className="block text-white mb-2">Video Purpose</label>
              <input
                type="text"
                name="videoPurpose"
                value={formData.videoPurpose}
                onChange={handleInputChange}
                required
                placeholder="e.g., Event Recap, Advertisement, Social Content"
                className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Client/Organization</label>
              <input
                type="text"
                name="clientOrganization"
                value={formData.clientOrganization}
                onChange={handleInputChange}
                className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Video Link</label>
              <input
                type="url"
                name="videoLink"
                value={formData.videoLink}
                onChange={handleInputChange}
                required
                placeholder="YouTube or Vimeo URL"
                className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Key Results</label>
              <textarea
                name="keyResults"
                value={formData.keyResults}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="e.g., Views, shares, engagement metrics"
                className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
              />
            </div>
          </>
        )}

        {/* Common Fields */}
        <div>
          <label className="block text-white mb-2">Technologies/Tools Used (comma-separated)</label>
          <input
            type="text"
            name="technologies"
            value={formData.technologies}
            onChange={handleInputChange}
            required
            placeholder="e.g., Adobe Photoshop, Figma, React"
            className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Results Achieved</label>
          <textarea
            name="resultsAchieved"
            value={formData.resultsAchieved}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
          />
        </div>

        <div>
          <label className="block text-white mb-2">GitHub URL (optional)</label>
          <input
            type="url"
            name="githubUrl"
            value={formData.githubUrl}
            onChange={handleInputChange}
            className="w-full p-2 rounded bg-white bg-opacity-10 text-white border border-white border-opacity-20"
          />
        </div>

        <div>
          <label className="block text-white mb-2">Project Image/Thumbnail</label>
          <Widget
            publicKey="1600ddd8a792c1969498"
            onChange={handleImageUpload}
            clearable
            tabs="file camera url facebook gdrive gphotos"
            previewStep
          />
          {formData.imageUrl && (
            <div className="mt-2">
              <img 
                src={formData.imageUrl} 
                alt="Project preview" 
                className="max-h-40 rounded"
              />
            </div>
          )}
        </div>

        {message && (
          <div className={`p-4 rounded ${message.includes('Error') ? 'bg-red-500' : 'bg-green-500'} text-white`}>
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-2 px-4 rounded bg-yellow-300 text-gray-900 font-semibold hover:bg-yellow-400 transition-colors ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Uploading...' : 'Upload Project'}
        </button>
      </form>
    </div>
  );
};

export default ProjectUploadForm; 