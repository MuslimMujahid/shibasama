<template>
  <div id="app" class="relative">
    <!-- <div id="nav">
      <router-link to="/"> Home </router-link>
    </div> -->
    <Navbar />
    <Sidebar class="Sidebar fixed" />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/common/Navbar'
import Sidebar from './components/common/Sidebar'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar
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
    --color-greyscale-3: #7E75A3;
    --color-greyscale-4: #A9A3C2;
    --color-greyscale-5: #D8D8D8;
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
    width: 100%;
    /* min-width: 768px; */
    padding: 0 10vw;
    /* padding: 0 60px; */
  }

  .Sidebar {
    top: 120px;
    left: 10px;
  }

  /* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
   background: var(--color-greyscale-3); 
  border-radius: 12px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--color-greyscale-4); 
  border-radius: 12px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  /* background: blue;  */
  cursor: pointer;
}

</style>
