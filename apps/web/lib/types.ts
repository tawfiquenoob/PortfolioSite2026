export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured: boolean;
  createdAt: string;
};

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  projectType: string;
  message: string;
  createdAt: string;
};

export type AnalyticsSummary = {
  totalPageViews: number;
  viewsByPath: Array<{
    path: string;
    count: number;
  }>;
  last30Days: Array<{
    day: string;
    count: number;
  }>;
};
