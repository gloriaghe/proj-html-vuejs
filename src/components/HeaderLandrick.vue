<template>
    <header>
        <a href="#">
            <img id="logo" :src="imgLogo" :alt="imgAlt">
        </a>
        <nav>
            <a href="#" v-for="(item, i) in navBar" @click="clickHere(item)" :key="i" :class="item.here ? 'here' : ''">
                <span>{{ item.text }} </span>
                <font-awesome-icon icon="fa-solid fa-angle-down" v-if="i > 0" />
            </a>
        </nav>

        <div>
            <a href="#" :class="i > 0 ? 'buttonFont' : ''" v-for="(font, i) in navFont" :key="i">
                <font-awesome-icon :icon="font" />
            </a>
        </div>

        <div id="ingranaggio" @click="colorChange = !colorChange">
            <img src="../assets/img/ingranaggio.png" alt="impostazioni sito">
            <div id="opzioniColore" v-if="colorChange">
                <h2>Theme option</h2>
                <div id="buttonspace">
                    <button class="btBlue">
                        <a href="#">Light</a>
                    </button>
                    <button>
                        <a href="#">Dark</a>
                    </button>
                </div>
            </div>
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
            colorChange: false,
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
    },
    methods: {
        clickHere(attivo) {
            this.navBar.forEach(element => {
                element.here = false
            });
            attivo.here = true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin colorBlue {
    color: #2f55d4
}

;
@import '../assets/button.scss';

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 65%;
    margin-left: calc(35% / 2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: white;

    #logo {
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
                @include colorBlue;
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
            @include colorBlue;
            box-shadow: 2px 2px 3px #ADB5BD;

            &:hover {
                background-color: #2f55d4;
                color: white;
            }
        }
    }

    #ingranaggio img {
        position: fixed;
        top: 180px;
        left: 10px;
        width: 30px;
        animation: mymove 3s infinite;
    }

    @keyframes mymove {
        0% {
            transform: rotate(360deg);
        }
    }

    #opzioniColore {
        position: absolute;
        left: -220px;
        top: 220px;

        #buttonspace {
            display: flex;
            flex-direction: column;
            height: 130px;
            width: 50%;
            margin-left: 25%;
            justify-content: space-around;

            button{
                padding: 7px 10px;
            }
        }
    }
}
</style>
