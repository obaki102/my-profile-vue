import { useFetch } from '@vueuse/core';
import type { Project } from '@/models/projects';
import { getEncryptedCacheData  } from 'obaki-get-cache-data'

export async function getProjects() {

  // await Promise.all(projects.map(async (proj) => {
  //   proj.languages = await getLanguagesForProject(proj);
  // }));

  const fetchListDataIfNeeded = async (): Promise<Project[]> => {
    const { data } = await useFetch('https://api.github.com/users/obaki102/repos').get().json();
    const fethData = data.value as Project[];
    const projects = fethData.filter((item) => item.topics.includes('show'));
    return projects;
  };

  return getEncryptedCacheData('projects-encrypted', fetchListDataIfNeeded,import.meta.env.VITE_ENCRYPTION_KEY,7);
}

async function getLanguagesForProject(proj: Project): Promise<string[]> {
  const { data } = await useFetch(`https://api.github.com/repos/obaki102/${proj.name}/languages`).get().json();
  return Object.keys(data.value);
}





