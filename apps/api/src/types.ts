export type JwtPayload = {
  sub: string;
  email: string;
};

export type ProjectInput = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  featured?: boolean;
};
