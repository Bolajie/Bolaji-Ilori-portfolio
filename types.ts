
export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  tools: string[];
  impact: string;
  description: string;
  architecture?: string;
  keyFeatures?: string[];
  process?: {
    step: string;
    description: string;
  }[];
  workflowGallery?: {
    url: string;
    caption: string;
  }[];
  results?: {
    label: string;
    value: string;
    improvement: string;
  }[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  demoUrl?: string;
  repoUrl?: string;
}

export interface GithubProject {
  name: string;
  description: string;
  url: string;
  tech: string[];
  stars?: number;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  details: string;
}