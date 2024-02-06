import { useFetch } from '@vueuse/core';
import type { Project } from '@/models/projects';

async function getProjects() {
  const { onFetchResponse, onFetchError, data } = await useFetch('https://api.github.com/users/obaki102/repos').get().json();
  const fethData = data.value as Project[];
  const projects = fethData.filter((item) => item.topics.includes('show'));
  await Promise.all(projects.map(async (proj) => {
    proj.languages = await getLanguagesForProject(proj);
  }));

  return { onFetchResponse, onFetchError, projects };
}

async function getLanguagesForProject(proj: Project): Promise<string[]> {
  const { data } = await useFetch(`https://api.github.com/repos/obaki102/${proj.name}/languages`).get().json();
  return Object.keys(data.value);
}

export async function getCacheData(key: string): Promise<Project[]> {

  const isDataStale = (timestamp: number): boolean => {
    const oneDayInMillis = 24 * 60 * 60 * 1000; // 1 day in milliseconds
    const currentTime = new Date().getTime();
    return currentTime - timestamp > oneDayInMillis;
  };

  const saveData = (data: Project[]): void => {
    const timestamp = new Date().getTime();
    const dataToStore = JSON.stringify({ data, timestamp });
    localStorage.setItem(key, dataToStore);
  };

  const storedData = localStorage.getItem(key);
  if (storedData) {
    const { data, timestamp } = JSON.parse(storedData);
    if (!isDataStale(timestamp)) {
      return data as Project[];
    }
  }
  const fethData = await getProjects();
  saveData(fethData.projects);
  return fethData.projects
}




