<template>
    <header>
        <img :src="imgLogo" :alt="imgAlt">
        <nav>
            <a href="#" v-for="(item, i) in navBar" :key="i" :class="item.here ? 'here' : ''">
                <span>{{ item.text }}</span>
                <font-awesome-icon icon="fa-solid fa-angle-down" v-if="i > 0" />
            </a>
        </nav>

        <div>
            <a href="#" :class="i > 0 ? 'buttonFont' : ''" v-for="(font, i) in navFont" :key="i">
                <font-awesome-icon :icon="font" />
            </a>
        </div>



    </header>
</template>

<script>
export default {
    name: 'HeaderLandrick',
    data() {
        return {
            imgLogo: require('../assets/img/logo-dark.png'),
            imgAlt: "Logo Landrick",
            navBar: [
                {
                    text: "HOME",
                    here: false
                },
                {
                    text: "LANDING",
                    here: true
                },
                {
                    text: "PAGES",
                    here: false
                },
                {
                    text: "DOCS",
                    here: false
                },
            ],
            navFont: ['fa-solid fa-magnifying-glass', 'fa-brands fa-github', 'fa-brands fa-stack-overflow', 'fa-regular fa-user'],


        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    

    img {
        max-width: 140px;
    }

    nav {
        a {
            color: #3c4858;
            text-decoration: none;
            margin-right: 35px;
            font-weight: bolder;
            font-size: 13px;

            &.here {
                color: #2f55d4;
            }
        }
    }

    div {
        font-size: 15px;


        a {
            margin-right: 10px;
            color: #adb5bd
        }

        .buttonFont {
            border: 1px solid #ADB5BD;
            background-color: #e4e9f8;
            padding: 9px;
            border-radius: 5px;
            color: #2f55d4;
        }
    }
}
</style>
