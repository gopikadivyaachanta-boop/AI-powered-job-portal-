export interface User {
  id: string;
  name: string;
  email: string;
  headline: string;
  skills: string[];
  experience: string;
  resumeSummary: string;
  resumeFilename: string | null;
  resumeVerified: boolean;
}

export interface Job {
  id:string;
  title: string;
  company: string;
  logo: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  salary: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  postedDate: string;
  hiringManagerEmail: string;
}