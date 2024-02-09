<template>
  <main>
    <div class="flex content-center justify-end about p-10">
      <button
        class="text-2xl font-extrabold leading-none tracking-tight text-white text-center block hover:border-gray-200 hover:bg-gray-800 py-2 px-4"
        @click="scrollTo(projects)">Projects</button>

      <button
        class="text-2xl font-extrabold leading-none tracking-tight text-white text-center block rounded hover:border-gray-200 hover:bg-gray-800 py-2 px-4"
        @click="scrollTo(contact)">Contact</button>


    </div>
    <section class="section about flex " ref="about">
      <AboutMeView />
    </section>
    <section class="section2" ref="projects">
      <ProjectView />
    </section>
    <section class="section2 contact" ref="contact">
      <ContactView />
    </section>
  </main>
</template>

<script setup lang="ts">
// Imports
import AboutMeView from './AboutMeView.vue'
import ContactView from './ContactView.vue';
import ProjectView from './ProjectView.vue'
import { ref, type Ref } from 'vue'

const [about, projects, contact] = [ref<HTMLElement | null>(null), ref<HTMLElement | null>(null), ref<HTMLElement | null>(null)];

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

.section {
  height: 100vh;
  background-size: cover;
  scroll-snap-align: start;
}

.section2 {
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

.contact {
  background-color: rgb(13, 17, 23);
}
</style>