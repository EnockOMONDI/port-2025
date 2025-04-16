export type ProjectCategory = 'Website Projects' | 'Digital Campaign' | 'Graphic Design' | 'Video Editing';

interface BaseProject {
  id?: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  imageUrl: string;
  resultsAchieved?: string;
  githubUrl?: string;
  completionDate: Date;
}

export interface WebsiteProject extends BaseProject {
  category: 'Website Projects';
  websiteUrl: string;
}

export interface DigitalCampaignProject extends BaseProject {
  category: 'Digital Campaign';
  campaignGoal: string;
  strategyOverview: string;
  platformsUsed: string[];
  campaignLink?: string;
}

export interface GraphicDesignProject extends BaseProject {
  category: 'Graphic Design';
  designType: string;
  clientName?: string;
  projectOutcome: string;
}

export interface VideoEditingProject extends BaseProject {
  category: 'Video Editing';
  videoPurpose: string;
  clientOrganization?: string;
  videoLink: string;
  keyResults: string;
}

export type Project = WebsiteProject | DigitalCampaignProject | GraphicDesignProject | VideoEditingProject;

export const projects: Project[] = [
  {
    id: 'gd-1',
    title: 'Brand Identity Package',
    description: 'Complete brand identity design including logo, business cards, and brand guidelines.',
    category: 'Graphic Design',
    imageUrl: '/projects/brand-identity.jpg',
    technologies: ['Adobe Illustrator', 'Adobe Photoshop'],
    completionDate: new Date('2024-02-15'),
  },
  {
    id: 'web-1',
    title: 'E-commerce Platform',
    description: 'Modern e-commerce website with full shopping cart functionality and payment integration.',
    category: 'Website Projects',
    imageUrl: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    completionDate: new Date('2024-01-20'),
  },
  {
    id: 'dc-1',
    title: 'Social Media Campaign',
    description: 'Multi-platform digital marketing campaign that increased engagement by 150%.',
    category: 'Digital Campaign',
    imageUrl: '/projects/social-campaign.jpg',
    technologies: ['Meta Ads', 'Google Analytics', 'Canva'],
    completionDate: new Date('2024-03-01'),
  },
]; 