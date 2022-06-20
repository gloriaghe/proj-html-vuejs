<template>
  <!-- font -->


  <!-- app -->
  <div id="app">
    <div id="container">
      <HeaderLandrick />
      <JumbotronApp />
      <main>
        <KeyFeatures />
        <QuickStart />
        <BuildTools />
        <PriceLandrick />
        <StartLandrick />
      </main>
      <FooterLandrick />

    </div>

  </div>
</template>

<script>
import HeaderLandrick from './components/HeaderLandrick.vue'
import JumbotronApp from './components/JumbotronApp.vue'
import KeyFeatures from './components/KeyFeatures.vue'
import QuickStart from './components/QuickStart.vue'
import BuildTools from './components/BuildTools.vue'
import PriceLandrick from './components/PriceLandrick.vue'
import StartLandrick from './components/StartLandrick.vue'
import FooterLandrick from './components/FooterLandrick.vue'



export default {
  name: 'App',
  components: {
    HeaderLandrick,
    JumbotronApp,
    KeyFeatures,
    QuickStart,
    BuildTools,
    PriceLandrick,
    StartLandrick,
    FooterLandrick
  }
}
</script>

<style lang="scss">
@mixin colorBlue {
  color: #2f55d4
}

;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #8492a6;
  line-height: 30px;
  letter-spacing: 0.5px;

  #container {
    width: 65%;
    margin: 0 auto;

    h2 {
      font-size: 30px;
      font-weight: 400;
      color: black;
    }
  }
}

* {
  border: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
