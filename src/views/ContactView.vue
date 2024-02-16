<template>
  <div class="flex flex-col min-h-screen justify-center pl-20"> <!-- Added min-h-screen -->
    <h2 class="text-4xl font-extrabold leading-none tracking-tight py-10">
      Let's connect</h2>

    <div class="flex">
      <a href="https://github.com/obaki102">
        <img class="object-fill h-20 w-20 mr-5 transition duration-300 hover:translate-y-2"
          src="/src/assets/github-mark.svg" title="Github" /></a>
      <a href="https://www.linkedin.com/in/josh-piluden-b06798110">
        <img class="object-fill h-20 w-20 mr-5 transition duration-300 hover:translate-y-2" src="/src/assets/linkedin.svg"
          title="Linkedin" /></a>
      <a href="mailto:joshuajpiluden@gmail.com">
        <img class="object-fill h-20 w-20 mr-5 transition duration-300 hover:translate-y-2" src="/src/assets/gmail.svg"
          title="Gmail" /> </a>
    </div>
    <!-- Footer element -->
    <footer class="mt-20"> <!-- Removed fixed and bottom-0, added mt-auto -->
      <hr class="border-b border-gray-700 mb-1">
      <span class="font-mono text-sm">©joshuajpiluden {{ new Date().getFullYear() }}</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>
<style></style>
