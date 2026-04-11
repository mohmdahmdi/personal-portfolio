export type Challenge = {
  title: string;
  description: string;
  created_at: Date;
  tags: string[];
};

export type Experience = {
  role: string;
  in?: string;
  from: Date;
  to: Date | "present";
  description: string;
  challenges: Challenge[];
  logoUrl?: string;
};

export type Experiences = Experience[];
