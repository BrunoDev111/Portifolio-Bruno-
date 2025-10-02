<template>
  <div class="home">
    <Hero/>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
export default {
  name: 'HomeView',
  components:{
    Hero
  }
}
</script>

<style scoped>
  .home {
  width: 100%;
  }
</style>