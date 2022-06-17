<template>
<!-- font -->
  

    <!-- app -->
  <div id="app">
    <div id="container">
      <HeaderLandrick />
      <JumbotronApp />
      <main></main>
      <footer></footer>
    </div>

  </div>
</template>

<script>
import HeaderLandrick from './components/HeaderLandrick.vue'
import JumbotronApp from './components/JumbotronApp.vue'


export default {
  name: 'App',
  components: {
    HeaderLandrick,
    JumbotronApp
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
  color: #8492a6;

  #container {
    width: 65%;
    margin: 0 auto;
  }
}

* {
  border: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
