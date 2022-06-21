<template>
  <div id="app" :class='cambio ? "dark" : ""'>
    <div id="container" :class='cambio ? "light" : ""'>
      <HeaderLandrick @changeColor="changeColor" />
      <JumbotronApp />
      <main>
        <KeyFeatures />
        <QuickStart />
        <BuildTools />
        <PriceLandrick />
        <StartLandrick />
      </main>

    </div>
    <FooterLandrick />

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
  },
  data() {
    return {
      cambio: false,
      h2: false,
    }
  },
  methods: {
    changeColor() {

      if (this.cambio === false) {
        this.cambio = true;
        this.colorChange = true;

      } else {
        this.cambio = false;
        this.colorChange = true;
      }
    }
  }
}
</script>

<style lang="scss">
@mixin colorBlue {
  color: #2f55d4
}

;
//media query
$medium: 1400px;
$small: 1000px;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #8492a6;
  line-height: 30px;
  letter-spacing: 0.5px;

  &.dark {
    background-color: rgb(33, 30, 30);
  }


  #container {
    width: 65%;
    margin: 0 auto;

    header{
      background-color: white;
    }

    &.light h2,
    &.light h1 {
      color: white;
    }
    
    &.light header{
      background-color: #8492a6;
    }

    @media screen and (max-width: $medium ) {
      & {
        width: 80%;
      }
    }

    @media screen and (max-width: $small ) {
      & {
        width: 90%;
      }
    }

    h1 {
      color: black;
    }

    h2 {
      font-size: 30px;
      font-weight: 400;
      color: black;


    }


    main {
      margin-bottom: 70px;
    }
  }
}

* {
  border: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
