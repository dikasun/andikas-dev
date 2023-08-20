import {
  Base,
  EducationsResponse,
  ExperiencesResponse,
  ProfileResponse,
  ProjectsResponse,
  SkillsResponse,
} from "@/shared/config/types";
import { baseUrl, revalidateTime } from "@/shared/config/constants";

export const capitalize = (
  str: string | null = "",
  lowerRest = false,
): string | null =>
  str == null
    ? null
    : str?.slice(0, 1).toUpperCase() +
      (lowerRest ? str?.slice(1).toLowerCase() : str?.slice(1));

export async function fetchProfile(): Promise<Base<ProfileResponse>> {
  const res = await fetch(`${baseUrl}/api/profiles/1`, {
    next: { revalidate: revalidateTime },
  });
  return res.json();
}

export async function fetchSkills(): Promise<Base<SkillsResponse[]>> {
  const res = await fetch(`${baseUrl}/api/profiles/1/skills`, {
    next: { revalidate: revalidateTime },
  });
  return res.json();
}

export async function fetchExperiences(): Promise<Base<ExperiencesResponse[]>> {
  const res = await fetch(`${baseUrl}/api/profiles/1/experiences`, {
    next: { revalidate: revalidateTime },
  });
  return res.json();
}

export async function fetchEducations(): Promise<Base<EducationsResponse[]>> {
  const res = await fetch(`${baseUrl}/api/profiles/1/educations`, {
    next: { revalidate: revalidateTime },
  });
  return res.json();
}

export async function fetchProjects({
  limit,
}: {
  limit?: number;
}): Promise<Base<ProjectsResponse[]>> {
  const res = await fetch(`${baseUrl}/api/profiles/1/projects?limit=${limit}`, {
    next: { revalidate: revalidateTime },
  });
  return res.json();
}

export async function fetchProjectById({
  projectId,
}: {
  projectId: string;
}): Promise<Base<ProjectsResponse>> {
  const res = await fetch(`${baseUrl}/api/profiles/1/projects/${projectId}`, {
    next: { revalidate: revalidateTime },
  });
  return res.json();
}

export async function sendMessage({
  senderName,
  senderEmail,
  senderMessage,
}: {
  senderName: string;
  senderEmail: string;
  senderMessage: string;
}): Promise<Base> {
  const res = await fetch(`${baseUrl}/api/mail`, {
    method: "post",
    body: JSON.stringify({
      name: senderName,
      email: senderEmail,
      subject: "Andikas Dev",
      message: senderMessage,
    }),
  });
  return res.json();
}
