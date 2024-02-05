import { useFetch } from '@vueuse/core'
import type { Project } from '@/models/projects';


export async function api(){
  const { isFetching, error, data } = await useFetch('https://api.github.com/users/obaki102/repos').get().json();
  const projects = data.value as Project[]
  return { isFetching, error,projects }
}