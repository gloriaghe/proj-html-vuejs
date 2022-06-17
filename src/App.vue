<template>
  <div id="app">
    <HeaderLandrick/>
    <!-- jumbotron -->
  <main></main>
  <footer></footer>
  </div>
</template>

<script>
import HeaderLandrick from './components/HeaderLandrick.vue'

export default {
  name: 'App',
  components: {
    HeaderLandrick,

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #ADB5BD;
}

*{
  border: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
