<template>
  <h1
    class="mt-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-800 md:text-5xl lg:text-6xl dark:text-white">
    Projects</h1>
  <div class="flex xl:flex-row max-lg:flex-col gap-4 items-center" v-for="proj in data" :key="proj.id">
    <div class="h-96 bg-gray-800 p-6 rounded-lg shadow-lg m-4">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 font-mono text-white "> <a :href="proj.html_url"
            class="no-underline hover:underline"> {{ proj.name
            }}</a></div>
        <hr class="border-b border-gray-700 my-4">
        <p class="font-mono text-white text-sm overflow-x-auto text-justify">
          {{ proj.description }}
        </p>
      </div>
      <div class="max-lg:invisible  px-6 pt-4 pb-2 ">
        <span v-for="topic in proj.topics.filter((item) => item !== 'show')" :key="proj.id"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ topic
          }}</span>
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
import { api } from '@/services/api'

/*
projects
*/

const data = ref([] as Project[])


onMounted(async () => {
  const { projects } = await api()
  data.value = projects.filter((item) => item.topics.includes('show'))
})




</script>

