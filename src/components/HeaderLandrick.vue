<template>
    <header>
        <div id="containerHeader">

            <a href="#">
                <img id="logo" :src="imgLogo" :alt="imgAlt">
            </a>
            <nav>
                <a href="#" v-for="(item, i) in navBar" @dblclick="noClick(item)" @click="clickHere(item)" :key="i"
                    :class="item.here ? 'here' : ''">
                    <span>{{ item.text }} </span>
                    <font-awesome-icon icon="fa-solid fa-angle-down" v-if="i > 0" />
                    <div id="internalLink" v-if="item.navClick === true">
                        <a v-for="(element, i) in item.linkInterno" :href="element.link" :key="i">{{ element.name }}</a>
                    </div>
                </a>
            </nav>

            <div>
                <a class="colorADark" href="#" :class="i > 0 ? 'buttonFont' : ''" v-for="(font, i) in navFont" :key="i">
                    <font-awesome-icon :icon="font" />
                </a>
            </div>

            <HeaderBurger />
            <div id="ingranaggio" @click="colorChange = !colorChange">
                <font-awesome-icon icon="fa-solid fa-gear" id="gear" />
                <div id="opzioniColore" v-if="colorChange">
                    <h3 id="titleOpzion">Theme option</h3>
                    <div id="buttonspace">
                        <button :class="colorChange ? 'btBlue' : ''" @click="$emit('changeColor', colorChange)">
                            <a href="#">Cambia Tema</a>
                        </button>

                    </div>
                </div>
            </div>
        </div>


    </header>
</template>

<script>
import HeaderBurger from '../components/HeaderBurger.vue'

export default {
    name: 'HeaderLandrick',
    components: {
        HeaderBurger
    },
    data() {
        return {
            imgLogo: require('../assets/img/logo-dark.png'),
            imgAlt: "Logo Landrick",
            colorChange: false,
            navBar: [
                {
                    text: "HOME",
                    here: false,
                    linkInterno: false
                },
                {
                    text: "LANDING",
                    here: true,
                    linkInterno: [
                        {
                            name: "SASS",
                            link: "#"
                        },
                        {
                            name: "DEVELOPER",
                            link: "#"
                        },
                        {
                            name: "SHOP",
                            link: "#"
                        },
                        {
                            name: "PRODUCT",
                            link: "#"
                        },
                    ],
                    navClick: false,
                },
                {
                    text: "PAGES",
                    here: false,
                    linkInterno: [
                        {
                            name: "COMPANY",
                            link: "#"
                        },
                        {
                            name: "ACCOUNT",
                            link: "#"
                        },
                        {
                            name: "HELP CENTER",
                            link: "#"
                        },
                        {
                            name: "UTILITY",
                            link: "#"
                        },
                    ],
                    navClick: false,
                },
                {
                    text: "DOCS",
                    here: false,
                    linkInterno: [
                        {
                            name: "DOCUMENTATION",
                            link: "#"
                        },
                        {
                            name: "COMPONENTS",
                            link: "#"
                        },
                        {
                            name: "WIDGET",
                            link: "#"
                        }
                    ],
                    navClick: false,
                },
            ],
            navFont: ['fa-solid fa-magnifying-glass', 'fa-brands fa-github', 'fa-brands fa-stack-overflow', 'fa-regular fa-user'],


        }
    },
    methods: {
        clickHere(attivo) {
            if (attivo.navClick === false) {

                this.navBar.forEach(element => {
                    element.here = false
                    element.navClick = false
                });
                attivo.here = true;
                attivo.navClick = true
            } else {
                attivo.here = false;
                attivo.navClick = false
            }
        },
        noClick(item) {
            item.navClick = false
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
$medium: 1400px;
$small: 1000px;
$xsmall: 700px;

header {
    width: 100%;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    #containerHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 70px;
        width: 65%;
        margin-left: calc(35% / 2);

        @media screen and (max-width: $medium ) {
            & {
                width: 80%;
                margin-left: 10%;
            }
        }

        @media screen and (max-width: $small ) {
            & {
                width: 100%;
                margin-left: 0;
                justify-content: space-around
            }
        }

        @media screen and (max-width: $xsmall ) {
            & {
                flex-wrap: wrap;
                justify-content: space-between;
                padding: 0 20px;

                nav,
                .colorADark {
                    display: none;

                }
            }
        }

        #logo {
            max-width: 140px;
            padding-left: 10px;
        }

        nav {

            a {
                color: #3c4858;
                text-decoration: none;
                margin-right: 35px;
                font-weight: bolder;
                font-size: 13px;
                position: relative;


                &.here {
                    @include colorBlue;
                }

                #internalLink {
                    position: absolute;
                    top: 20px;
                    left: 0px;
                    background-color: white;

                    a {
                        display: block;
                    }
                }
            }

        }

        div {
            font-size: 15px;


            a {
                margin-right: 10px;
                color: #adb5bd;
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



        #ingranaggio {
            position: fixed;
            top: 180px;
            left: 10px;


            #gear {
                font-size: 20px;
                color: #2f55d4;
                animation: mymove 4s infinite;

                @keyframes mymove {

                    0% {
                        transform: rotate(360deg);
                    }
                }
            }

            @media screen and (max-width: $xsmall ) {
                & {
                    left: 0px;
                    top: 120px;
                }
            }

            #opzioniColore {
                left: 0px;
                top: 25px;
                background-color: #ADB5BD;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                padding: 10px 10px;
                font-size: 18px;
                color: black;
                box-shadow: 4px 4px 6px #8a99a7;
            }

        }


    }
}
</style>
