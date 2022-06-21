<template>
    <div id="sectioncontainer">
        <section id="jumbo">
            <div id="textJumbo">
                <span id="titoletto">
                    Development
                </span>
                <h1>A Complete Developer Toolset</h1>
                <span>Launch your campaign and benefit from our expertise on designing and managing conversion centered
                    bootstrap4 html page.</span>
                <div id="buttonspace">
                    <button class="btBlue">
                        <a href="#">Get Started</a>
                    </button>
                    <button id="btDocumentation">
                        <a href="#">Documentation</a>
                    </button>
                </div>
                <span>Current Version: v2.6.0</span>
            </div>
            <img id="imgJumbo" src="../assets/img/about.png" alt="Immagine jumbo">
        </section>
        <section id="site">
            <a :href="item.link" v-for="(item, i) in sites" :key="i">
                <img :src="require('../assets/img/' + item.img)" :alt="item.name">
            </a>
        </section>
    </div>
</template>

<script>
export default {
    name: 'JumbotronApp',
    data() {
        return {
            sites: [
                {
                    img: "amazon.svg",
                    link: "#",
                    name: "Amazon Link"
                },
                {
                    img: "google.svg",
                    link: "#",
                    name: "Google Link"
                },
                {
                    img: "lenovo.svg",
                    link: "#",
                    name: "Lenovo Link"
                },
                {
                    img: "paypal.svg",
                    link: "#",
                    name: "PayPal Link"
                },
                {
                    img: "shopify.svg",
                    link: "#",
                    name: "Shopify Link"
                },
                {
                    img: "spotify.svg",
                    link: "#",
                    name: "Spotify Link"
                }
            ]

        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$small: 900px;

#sectioncontainer {

    #jumbo {
        display: flex;
        margin-top: 160px;
        justify-content: space-between;

        @media screen and (max-width: $small ) {
            #imgJumbo {
                display: none;
            }
        }


        #textJumbo {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            #titoletto {
                border: 1px solid #ADB5BD;
                background-color: #e4e9f8;
                padding: 1px 5px;
                border-radius: 15px;
                color: #2f55d4;
                font-size: 12px;
                font-weight: bold;
            }

            h1 {
                color: black;
                font-size: 40px;
                margin: 20px 0;
                width: 80%;
                line-height: 50px;
            }

            #buttonspace {
                margin: 20px 0;
                display: inline-block;
                width: 100%;

                button {
                    margin: 10px 0;
                }

                @import '../assets/button.scss';

                #btDocumentation:hover {
                    background-color: #2f55d4;
                    border: none;

                    a {
                        color: white;
                    }
                }
            }
        }
    }

    #site {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 130px 0;

        img {
            width: 80px;
        }

    }
}
</style>
