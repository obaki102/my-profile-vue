<template>
  <main class="main">
    <div class="flex content-center justify-end about p-10">
      <button
        class="text-2xl font-extrabold leading-none tracking-tight text-white text-center block hover:border-gray-200 hover:bg-gray-800 py-2 px-4"
        @click="scrollTo(projects)">Projects</button>

      <button
        class="text-2xl font-extrabold leading-none tracking-tight text-white text-center block rounded hover:border-gray-200 hover:bg-gray-800 py-2 px-4"
        @click="scrollTo(contact)">Contact</button>
    </div>
    <div class="flex flex-col items-center">
      <section class="section about flex " ref="about">
        <AboutMeView />
      </section>
      <section class="section2 container no-scrollbar" ref="projects">
        <ProjectView />
      </section>
      <section class="section2 contact" ref="contact">
        <ContactView />
      </section>
      <ChatView />
    </div>
    <div class="p-5">
      <hr class="border-b border-gray-700 mb-2">
      <span class="ml-10 font-mono text-white text-sm">©joshuajpiluden {{ new Date().getFullYear() }}</span>
    </div>
   </main>
 
</template>

<script setup lang="ts">
// Imports
import AboutMeView from './AboutMeView.vue';
import ContactView from './ContactView.vue';
import ProjectView from './ProjectView.vue';
import ChatView from './ChatView.vue';
import { ref } from 'vue';

const [about, projects, contact] = [ref<HTMLElement | null>(null), ref<HTMLElement | null>(null), ref<HTMLElement | null>(null)];

function scrollTo(view: HTMLElement | null) {
  if (view)
    view.scrollIntoView({ behavior: 'smooth' });
}

const showChat = ref(false);


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

.main {
  background-color: rgb(13, 17, 23);
}
</style>