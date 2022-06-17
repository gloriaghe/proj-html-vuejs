<template>
  <header>
    <img :src="imgLogo" :alt="imgAlt">
    <nav>

    </nav>
    <ul >
        <span>
            <li v-for="(font, i) in navbarFont" :key="i">{{font}}</li>
        </span>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'HeaderLandrick',
  data() {
    return {
        imgLogo: require('../assets/img/logo-dark.png'),
        imgAlt: "Logo Landrick",
        navBar: ["HOME", "LANDING", "PAGES", "DOCS"],
        navbarFont: [
            '<font-awesome-icon icon="fa-solid fa-magnifying-glass" />',
            '<font-awesome-icon icon="fa-brands fa-github" />',
            '',
            '<font-awesome-icon icon="fa-solid fa-user" />'
            ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;

        img{
            max-width: 140px;
        }
    }
</style>
