<template>
  <div class="flex flex-wrap justify-center">
    <!-- Card component -->
    <div class="p-4 max-w-sm transition duration-300 hover:scale-105 hidden 2xl:block" v-for="proj in data"
      :key="proj.id">
      <div class="flex rounded-2xl h-full bg-gray-800 p-6 rounded-2xl shadow-2xl p-8 flex-col">
        <div class="flex items-center mb-3">
          <div
            class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gray-800 text-gray-200 flex-shrink-0">
            <font-awesome-icon :icon="['fab', 'github']" />
          </div>
          <div class="font-bold text-2xl mb-2 font-mono text-gray-200 truncate" :title="proj.name">
            <a :href="proj.html_url" class="no-underline hover:underline ml-2 text-ellipsis overflow-hidden">
              {{ proj.name }}
            </a>
          </div>
        </div>
        <hr class="border-b border-gray-700">
        <div class="flex flex-col justify-between flex-grow my-4">
          <p class="text-ellipsis overflow-hidden font-mono text-gray-200 text-sm text-justify">
            {{ proj.description }}
          </p>
          <a :href="proj.homepage" class="mt-5 text-gray-200 hover:text-blue-500 inline-flex items-center"
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
      <table class="min-w-full font-mono text-sm text-gray-200 rounded-lg overflow-hidden">
        <thead class="bg-gray-800 text-xs uppercase font-medium">
          <tr>
            <th scope="col" class="px-6 py-3 text-left tracking-wider">Project</th>
            <th scope="col" class="px-6 py-3 text-left tracking-wider hidden sm:table-cell">Description</th>
            <th scope="col" class="px-6 py-3 text-left tracking-wider hidden sm:table-cell">Site Link</th>
          </tr>
        </thead>
        <tbody class="bg-gray-800">
          <tr v-for="(proj, index) in data" :key="proj.id" :class="index % 2 ? '' : 'bg-black bg-opacity-20'">
            <td class="pl-4 max-sm:p-3">
              <div class="flex flex-row">
                <div>
                  <a :href="proj.html_url" class="no-underline hover:underline text-ellipsis overflow-hidden">
                    {{ proj.name }}
                  </a>
                </div>
                <div class="sm:invisible ml-5">
                  <a :href="proj.homepage" class="hover:text-blue-500 inline-flex items-center" v-if="proj.homepage" title="Site Link">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 80 80">
                      <path fill="#c2e8ff" d="M2.5 10.5H69.5V77.5H2.5z"></path>
                      <path fill="#7496c4" d="M69,11v66H3V11H69 M70,10H2v68h68V10L70,10z"></path>
                      <path fill="#c2e8ff" d="M61.222 28.222H74.111V32.889H61.222z" transform="rotate(90 67.667 30.556)">
                      </path>
                      <path fill="#c2e8ff" d="M44 10H56.888999999999996V14.667H44z"></path>
                      <g>
                        <path fill="#8bb7f0"
                          d="M36.707 32L56.707 12 47.207 2.5 77.5 2.5 77.5 32.793 68 23.293 48 43.293z">
                        </path>
                        <path fill="#4e7ab5"
                          d="M77,3v28.586l-8.293-8.293L68,22.586l-0.707,0.707L48,42.586L37.414,32l19.293-19.293L57.414,12 l-0.707-0.707L48.414,3H77 M78,2H46l10,10L36,32l12,12l20-20l10,10V2L78,2z">
                        </path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 text-justify text-ellipsis overflow-hidden hidden sm:table-cell">
              {{ proj.description }}
            </td>
            <td class="px-6 py-4 text-justify text-ellipsis overflow-hidden hidden sm:table-cell" v-if="proj.homepage">
              <a :href="proj.homepage" class="hover:text-blue-500 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 80 80">
                  <path fill="#c2e8ff" d="M2.5 10.5H69.5V77.5H2.5z"></path>
                  <path fill="#7496c4" d="M69,11v66H3V11H69 M70,10H2v68h68V10L70,10z"></path>
                  <path fill="#c2e8ff" d="M61.222 28.222H74.111V32.889H61.222z" transform="rotate(90 67.667 30.556)">
                  </path>
                  <path fill="#c2e8ff" d="M44 10H56.888999999999996V14.667H44z"></path>
                  <g>
                    <path fill="#8bb7f0" d="M36.707 32L56.707 12 47.207 2.5 77.5 2.5 77.5 32.793 68 23.293 48 43.293z">
                    </path>
                    <path fill="#4e7ab5"
                      d="M77,3v28.586l-8.293-8.293L68,22.586l-0.707,0.707L48,42.586L37.414,32l19.293-19.293L57.414,12 l-0.707-0.707L48.414,3H77 M78,2H46l10,10L36,32l12,12l20-20l10,10V2L78,2z">
                    </path>
                  </g>
                </svg>
              </a>
            </td>
            <td class="items-center hidden sm:table-cell" v-else>

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
