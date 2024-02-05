<template>
  <div class="about">
    <ul>
      <li>
        test
      </li>

      <li v-for="proj in data" :key="proj.id">
        {{ proj.name }}
      </li>

    </ul>

    

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
  const {projects} = await api()
  data.value = projects.filter((item)=> item.topics.includes('show'))
})
 



</script>

