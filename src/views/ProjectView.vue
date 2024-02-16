<template>
  <div class="flex flex-wrap justify-center">
        <!-- Card component -->
    <div class="p-4 max-w-sm transition duration-300 hover:scale-105 hidden 2xl:block" v-for="proj in data"
      :key="proj.id">
      <div class="flex rounded-2xl h-full bg-gray-800 p-6 rounded-2xl shadow-2xl p-8 flex-col">
        <div class="flex items-center mb-3">
          <div
            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-800 text-white flex-shrink-0">
            <font-awesome-icon :icon="['fab', 'github']" />
          </div>
          <div class="font-bold text-2xl mb-2 font-mono text-white truncate" :title="proj.name">
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

    <!-- Table component -->
    <div class="w-full block 2xl:hidden m-5">
      <table class="table-auto w-full text-white">
        <thead>
          <tr>
            <th class="px-4 py-2">Project</th>
            <th class="px-4 py-2 hidden sm:table-cell">Description</th> <!-- Added hidden sm:table-cell -->
            <th class="px-4 py-2 hidden sm:table-cell">Site Link</th> <!-- Added hidden sm:table-cell -->
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-gray-700" v-for="proj in data" :key="proj.id">
            <td class="border px-4 py-2 font-mono truncate" :title="proj.name">
              <a :href="proj.html_url" class="no-underline hover:underline text-ellipsis overflow-hidden">
                {{ proj.name }}
              </a>
            </td>
            <td
              class="border px-4 py-2 font-mono text-sm text-justify text-ellipsis overflow-hidden hidden sm:table-cell">
              <!-- Added hidden sm:table-cell -->
              {{ proj.description }}
            </td>
            <td class="border px-4 py-2 font-mono hidden sm:table-cell" v-if="proj.homepage">
              <!-- Added hidden sm:table-cell -->
              <a :href="proj.homepage" class="text-white hover:text-blue-500 inline-flex items-center">Site Link
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </td>
            <td class="border px-4 py-2 font-mono hidden sm:table-cell" v-else> <!-- Added hidden sm:table-cell -->
              N/A
            </td>
          </tr>
        </tbody>
      </table>
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

onMounted(async () => {
  const projects = await getProjects();
  data.value = projects
})

</script>
