<template>
    <footer>
        <div>
            <section id="footerLink">
                <div class="sectionFooterUp">
                    <img id="logo" src="../assets/img/logo-light.png" alt="Logo landrick">
                    <span>Star working with Landrick that can provide everything you need to generate awareness, drive
                        traffic, connect.</span>
                    <div id="brands">
                        <a href="#">
                            <span>
                                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <font-awesome-icon icon="fa-brands fa-instagram" />
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <font-awesome-icon icon="fa-brands fa-twitter" />
                            </span>
                        </a>
                        <a href="#">
                            <span>
                                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                            </span>
                        </a>
                    </div>
                </div>
                <div class="sectionFooterUp">
                    <h3>Company</h3>
                    <div v-for="(element, i) in company" :key="i">
                        <a href="element.link">
                            <span class="angleRight">
                                <font-awesome-icon icon="fa-solid fa-angle-right" />
                            </span>
                            {{ element.text }}
                        </a>

                    </div>
                </div>
                <div class="sectionFooterUp">
                    <h3>Usefull Links</h3>
                    <div v-for="(element, i) in links" :key="i">
                        <a href="element.link">
                            <span class="angleRight">
                                <font-awesome-icon icon="fa-solid fa-angle-right" />
                            </span>

                            {{ element.text }}
                        </a>

                    </div>
                </div>
                <div class="sectionFooterUp">
                    <h3>Newsletter</h3>
                    <span>Sign up and receive the latest tips via email.</span>
                    <span>Write your email <span id="asterisco">*</span></span>
                    <input type="text" placeholder="Your Email:">
                    <button>Subscribe</button>
                </div>
            </section>
        </div>
        <div id="footerBottom">
            <section>
                <div>
                    <span id="cBorder">c</span> 2020 Landrick. Design with <span id="heart">&hearts;</span> by
                    Shreethemes.
                </div>
                <div id="cardPayments">
                    <a v-for="(element, i) in payments" :key="i" href="element.link">
                        <img :src="require('../assets/img/' + element.img)" :alt="element.name">
                    </a>
                </div>
            </section>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterLandrick',
    data() {
        return {
            company: [
                {
                    text: "About us",
                    link: "#"
                },
                {
                    text: "Services",
                    link: "#"
                },
                {
                    text: "Team",
                    link: "#"
                },
                {
                    text: "Pricing",
                    link: "#"
                },
                {
                    text: "Project",
                    link: "#"
                },
                {
                    text: "Careers",
                    link: "#"
                },
                {
                    text: "Blog",
                    link: "#"
                },
                {
                    text: "Login",
                    link: "#"
                }
            ],
            links: [
                {
                    text: "Terms of Services",
                    link: "#"
                },
                {
                    text: "Privacy Policy",
                    link: "#"
                },
                {
                    text: "Documentation",
                    link: "#"
                },
                {
                    text: "Changelog",
                    link: "#"
                },
                {
                    text: "Components",
                    link: "#"
                }
            ],
            payments: [
                {
                    img: "american-ex.png",
                    link: "#",
                    name: "American-Express"
                },
                {
                    img: "discover.png",
                    link: "#",
                    name: "Discover"
                },
                {
                    img: "master-card.png",
                    link: "#",
                    name: "MasterCard"
                },
                {
                    img: "paypal.png",
                    link: "#",
                    name: "PayPal"
                },
                {
                    img: "visa.png",
                    link: "#",
                    name: "Visa"
                }
            ]

        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
    background-color: #202942;

    a {
        text-decoration: none;
        color: #8492a6;
    }

    #footerLink {
        display: flex;
        width: 65%;
        margin: 0 auto;
        justify-content: space-between;
        padding: 40px 0;


        .sectionFooterUp {
            display: flex;
            flex-direction: column;
            max-width: 30%;

            .angleRight {
                font-size: 10px;
                margin-right: 10px;
            }

            #logo {
                width: 40%;
                margin-bottom: 20px;
            }

            h3 {
                color: white;
                margin-bottom: 20px;
            }

            #brands {
                margin-top: 20px;

                a {
                    border: 1px solid #8492a6;
                    padding: 5px;
                    border-radius: 5px;
                    margin-right: 5px;

                    span {
                        font-size: 15px;
                        padding: 5px;
                    }
                }

            }

            #asterisco {
                color: #e43f52;
            }

            input {
                background-color: #27314f;
                border-radius: 10px;
                color: white;
                padding: 10px;
                margin: 20px 0;
            }

            button {
                background-color: #27314f;
                border-radius: 10px;
                color: #2f55d4;
                padding: 10px;
                border: 1px #2f55d4;
                box-shadow: 2px 2px 3px #2f55d4;
                font-size: 18px;
                cursor: pointer;
            }
        }
    }

    #footerBottom {
        border-top: 1px solid #3c4858;

        section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 65%;
            margin: 0 auto;
            height: 80px;

            #cBorder {
                border: 1px solid #8492a6;
                border-radius: 50%;
                padding: 0.5px 1px;
                font-size: 12px;
            }

            #heart {
                color: #e43f52;
                font-size: 20px;
            }

            #cardPayments {
                a {
                    margin-left: 5px;

                    img {
                        width: 35px;
                    }
                }
            }
        }
    }
}
</style>
