<template>
    <section>
        <font-awesome-icon id="burger" icon="fa-solid fa-bars" @click="burgerActive" />
        <div id="burgerMenu" v-if="burgerOn">
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

            <div id="iconFontBurger">
                <a class="colorADark" href="#" :class="i > 0 ? 'buttonFont' : ''" v-for="(font, i) in navFont" :key="i">
                    <font-awesome-icon :icon="font" />
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeaderBurger',
    data() {
        return {

            burgerOn: false,
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
        burgerActive() {
            if (this.burgerOn === false) {
                this.burgerOn = true
            } else{
                this.burgerOn = false
            }
        },
        
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
$xsmall: 700px;
@mixin colorBlue {
    color: #2f55d4
}

section {
    display: none;

     @media screen and (max-width: $xsmall ) {
            & {
                display: inline-block;
            }
        }

    #burger{
        position: fixed;
        z-index: 100;
        top: 20px;
        right: 20px;
        color: white;
        font-size: 25px;
    }

    #burgerMenu {
        padding: 10px 10px;
        position: absolute;
        top: 0;
        right: 0;

        nav {
            display: flex;
            flex-direction: column;
            margin-right: 30px;


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
                    margin-top: 0px;

                    a {
                        display: block;
                    }
                }
            }

        }

        div {
            font-size: 15px;
            margin-top: 20px;

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
    }
}

;
</style>
