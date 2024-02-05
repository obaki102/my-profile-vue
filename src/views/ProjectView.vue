<template>
  <div class="flex flex-wrap flex-row gap-4 items-center" v-for="proj in data" :key="proj.id">
    <div class="h-96 max-w-sm rounded overflow-hidden shadow-lg m-4" >
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2"> {{ proj.name }}</div>
        <p class="text-gray-700 text-base">
          {{ proj.description }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span v-for="topic in proj.topics" :key="proj.id"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{{ topic }}</span>
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

// const getProjecs = async () => {
//   const {data} = await useFetch("https://api.github.com/users/obaki102/repos").get().json()
//   projects.value = data.value
// };

onMounted(async () => {
  const { projects } = await api()
  data.value = projects.filter((item) => item.topics.includes('show'))
})




</script>

