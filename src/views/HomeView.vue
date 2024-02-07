<template>
  <main>
    <div class="flex content-center justify-end about p-10">
      <button
        class="text-2xl font-extrabold leading-none tracking-tight text-white text-center block hover:border-gray-200 hover:bg-gray-800 py-2 px-4"
        @click="scrollTo(projects)">Projects</button>

      <button
        class="text-2xl font-extrabold leading-none tracking-tight text-white text-center block rounded hover:border-gray-200 hover:bg-gray-800 py-2 px-4"
        @click="scrollTo(contacts)">Contacts</button>


    </div>
    <section class="about  flex" ref="about">
      <AboutMeView />
    </section>
    <section ref="projects">
      <ProjectView />
    </section>
    <section class="contacts" ref="contacts">
      <h1
        class="p-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
        Coming soon</h1>
    </section>
  </main>
</template>

<script setup lang="ts">
// Imports
import AboutMeView from './AboutMeView.vue'
import ProjectView from './ProjectView.vue'
import { ref, type Ref } from 'vue'

const [about, projects, contacts] = [ref<HTMLElement | null>(null), ref<HTMLElement | null>(null), ref<HTMLElement | null>(null)];

function scrollTo(view: HTMLElement | null) {
  if (view)
    view.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

section {
  height: 100vh;
  background-size: cover;
  scroll-snap-align: start;
}

.container {
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-behavior: smooth;
  overflow: auto;
  scroll-snap-type: y mandatory;
}

.about {
  background-color: rgb(18, 18, 18);
}

.contacts {
  background-color: rgb(23, 23, 23);
}
</style>