export interface Base<T = null> {
  code: number;
  message: string;
  data?: T;
}

export interface ProfileResponse {
  id: number;
  picture: string;
  name: string;
  role: string;
  description: string;
}

export interface SkillsResponse {
  id: number;
  icon: string;
  name: string;
  category: string;
}

export interface ExperiencesResponse {
  id: number;
  startYear: string;
  endYear: string;
  institution: string;
  role: string;
  description: string;
}

export interface EducationsResponse {
  id: number;
  year: string;
  institution: string;
  role: string;
  description: string;
}

export interface ProjectsResponse {
  id: number;
  image: string;
  name: string;
  platform: string;
  description: string;
  url: string;
}
