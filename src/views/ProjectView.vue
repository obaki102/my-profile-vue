<template>
  <div class="flex flex-wrap justify-center">
    <h1
      class="mb-10 text-4xl font-extrabold leading-none tracking-tight text-white">
      Projects</h1>
  </div>
  <div class="flex flex-wrap justify-center">
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
        <hr class="border-b border-gray-700">
        <div class="flex flex-col justify-between flex-grow my-4">
          <p class="text-ellipsis overflow-hidden font-mono text-white text-sm text-justify">
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
import { getProjects } from '@/services/getProjects'

/*
projects
*/

const data = ref([] as Project[])
let isSuccess: boolean = false;


onMounted(async () => {
  const projects = await getProjects();
  data.value = projects
})




</script>
