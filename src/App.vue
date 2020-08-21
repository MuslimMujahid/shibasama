<template>
  <div id="app" class="px-64">
    <Navbar />
    <Hero />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero
  }
}
</script>

<style> 

  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap');
  
  :root {
    --color-primary-1: #FFC14B;
    --color-primary-2: #FF4667;
    --color-primary-3: #261E48;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    font-family: 'Tajawal', sans-serif;
    background: var(--color-primary-3);
  }

</style>
