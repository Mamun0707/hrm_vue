<template>
  <div id="app">
    

      <div class="js-animsition animsition" id="site-wrap" data-animsition-in-class="fade-in" data-animsition-out-class="fade-out">


        <Header></Header>
        <!-- load all other page/component -->
        <router-view />


        <Footer></Footer>
      
      </div>


  </div>
</template>


<script>
import Header from './components/Include/Header.vue'
import Footer from './components/Include/Footer.vue'


export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>


