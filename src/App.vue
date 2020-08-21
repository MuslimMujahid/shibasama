<template>
  <div id="app" class="relative">
    <Navbar />
    <Hero />
    <Sidebar />
    <Slider topic="Trending Now" v-bind:list="trending"/>
    <Slider topic="New Release" v-bind:list="placeholder"/>
    <Slider topic="Continue Watching" v-bind:list="placeholder"/>
    <Slider topic="History" v-bind:list="placeholder"/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Slider,
    Footer,
    Sidebar
  },
  methods: {
    ...mapActions(['getAnimeTrending'])
  },
  computed: mapGetters(['trending', 'placeholder']),
  created() {
    this.getAnimeTrending()
  }

}
</script>

<style> 

  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap');
  
  :root {
    --color-primary-1: #FFC14B;
    --color-primary-2: #FF4667;
    --color-primary-3: #261E48;
    --color-accent-pink: #FF8EA3;
    --color-greyscale-1: #392D6C;
    --color-greyscale-2: #3D2F74;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    letter-spacing: 0.03em;
  }

  body {
    font-family: 'Tajawal', sans-serif;
    background: var(--color-primary-3);
    display: flex;
    justify-content: center;
  }

  #app {
    max-width: 1280px;
    min-width: 768px;
    /* padding: 0 10vw; */
    padding: 0 60px;
    overflow-x: hidden;
  }

</style>
