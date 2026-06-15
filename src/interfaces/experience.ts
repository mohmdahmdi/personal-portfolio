export type StackLevel = 1 | 2 | 3 | 4 | 5;

export type Challenge = {
  title: string;
  description: string;
  created_at: Date;
  tags: string[];
};

export type CompanyInfo = {
  name: string;
  foundationYear: string;
  about: string;
  size: string;
  logoUrl?: string;
  backdropImage?: string;
  location: string
};

export type Experience = {
  role: string;
  in?: string;
  from: Date;
  to: Date | "present";
  description: string;
  companyInfo?: CompanyInfo;
  stack: { name: string; level: StackLevel }[];
  challenges: Challenge[];
};

export type Experiences = Experience[];
