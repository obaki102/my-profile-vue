<template>
  <h1
    class="m-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
    Projects</h1>
  <div class="flex content-center items-center xl:flex-row max-lg:flex-col ml-7 ">
    <div class="flex gap-4" v-for="proj in data" :key="proj.id">
      <div class="h-96 bg-gray-800 p-6 rounded-lg shadow-lg m-4">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 font-mono text-white">
            <a :href="proj.html_url" class="no-underline hover:underline ml-2 text-ellipsis overflow-hidden">
              {{ proj.name }}
            </a>
          </div>
          <hr class="border-b border-gray-700 my-4">
          <p class="text-ellipsis overflow-hidden  font-mono text-white text-sm">
            {{ proj.description }}
          </p>
        </div>
        <div v-if="proj.homepage">
          <a :href="proj.homepage"> <button
              class="no-underline hover:underline ml-4  font-mono text-white background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button">
              site
            </button>
          </a>
        </div>
        <div class="max-2xl:invisible  px-6 pt-4 pb-2 ">
          <span v-for="lang in proj.languages" :key="proj.id"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ lang
            }}</span>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/*
imports
*/
import type { Project } from '@/models/projects'
import { onMounted, ref } from 'vue'
import { getCacheData } from '@/services/getProjects'

/*
projects
*/

const data = ref([] as Project[])
let isSuccess: boolean = false;


onMounted(async () => {
  const projects = await getCacheData('projects')
  data.value = projects
})




</script>
