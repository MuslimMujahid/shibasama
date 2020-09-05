<template>
  <div class="relative">
    <Hero class="mt-8" />
    <Slider topic="Trending Now" v-bind:list="trending"/>
    <Slider topic="New Release" v-bind:list="placeholder"/>
    <Slider topic="Continue Watching" v-bind:list="placeholder"/>
    <Slider topic="History" v-bind:list="placeholder"/>
    <Footer />
  </div>
</template>

<script>
import Hero from '@/components/pages/Home/Hero'
import Slider from '@/components/pages/Home/Slider'
import Footer from '@/components/common/Footer'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Hero,
    Slider,
    Footer
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

<style scoped>


</style>> 


