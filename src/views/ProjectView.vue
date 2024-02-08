<template>
  <div class="mt-10 ml-20">
    <h1
      class="ml-10 mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
      Projects</h1>
  </div>
  <div class="flex flex-wrap justify-center mt-10 ml-20 mb-10 mr-20">
    <!-- <div class="flex gap-4 transition duration-300 hover:scale-105 flex content-center xl:flex-row max-lg:flex-col max-lg:flex-row" v-for="proj in data" :key="proj.id">
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg m-4">
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
          <div class="px-6 pt-4 pb-2 ">
            <span v-for="lang in proj.languages" :key="proj.id"
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{
                lang
              }}</span>
          </div>
        </div>
      </div> -->

    <div class="p-4 max-w-sm transition duration-300 hover:scale-105" v-for="proj in data" :key="proj.id">
      <div class="flex rounded-lg h-full bg-gray-800 p-6 rounded-lg shadow-lg p-8 flex-col">
        <div class="flex items-center mb-3">
          <div
            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-800 text-white flex-shrink-0">
            <font-awesome-icon :icon="['fab', 'github']" />
          </div>
          <div class="font-bold text-xl mb-2 font-mono text-white truncate" :title="proj.name">
            <a :href="proj.html_url" class="no-underline hover:underline ml-2 text-ellipsis overflow-hidden">
              {{ proj.name }}
            </a>
          </div>
        </div>
        <hr class="border-b border-gray-700 my-2">
        <div class="flex flex-col justify-between flex-grow">
          <p class="text-ellipsis overflow-hidden  font-mono text-white text-sm">
            {{ proj.description }}
          </p>
          <a :href="proj.homepage" class="mt-5 text-white hover:text-blue-500 inline-flex items-center"
            v-if="proj.homepage">Site Link
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
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
