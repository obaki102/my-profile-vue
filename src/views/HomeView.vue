<template>
  <main>
    <section class="one flex">
      <AboutMeView />
    </section>
    <section>
      <ProjectView />
    </section>
    <section class="three">
      <h1
        class="mt-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        ????</h1>
    </section>
  </main>
</template>

<script setup lang="ts">
import AboutMeView from './AboutMeView.vue'
import ProjectView from './ProjectView.vue'
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

.one {
  background-color: rgb(18, 18, 18);
}



.three {
  background-color: rgb(29, 29, 61);
}
</style>