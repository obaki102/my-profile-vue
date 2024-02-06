import { useFetch } from '@vueuse/core';
import type { Project } from '@/models/projects';


export async function getProjects() {
  const { isFetching, error, data } = await useFetch('https://api.github.com/users/obaki102/repos').get().json();
  const  fethData = data.value as Project[];
  const projects = fethData.filter((item) => item.topics.includes('show'));
  await Promise.all(projects.map(async (proj) => {
    proj.languages = await getLanguagesForProject(proj);
  }));
  return { isFetching, error, projects };
}

async function getLanguagesForProject(proj: Project): Promise<string[]> {
  const { data } = await useFetch(`https://api.github.com/repos/obaki102/${proj.name}/languages`).get().json();
  return Object.keys(data.value);
}

