<template>
    <footer>
        <div>
            <section id="footerLink">
                <div class="sectionFooterUp">
                    <img id="logo" src="../assets/img/logo-light.png" alt="Logo landrick">
                    <span>Star working with Landrick that can provide everything you need to generate awareness, drive
                        traffic, connect.</span>
                    <div>
                        <a href="#">
                            <!-- <font-awesome-icon icon="fa-brands fa-facebook-f" /> -->
                        </a>
                    </div>
                </div>
                <div class="sectionFooterUp">
                    <h3>Company</h3>
                    <div v-for="(element, i) in company" :key="i">
                        <a href="element.link">
                            <font-awesome-icon icon="fa-solid fa-angle-right" />
                            {{ element.text }}
                        </a>

                    </div>
                </div>
                <div class="sectionFooterUp">
                    <h3>Usefull Links</h3>
                    <div v-for="(element, i) in links" :key="i">
                        <a href="element.link">
                            <font-awesome-icon icon="fa-solid fa-angle-right" />
                            {{ element.text }}
                        </a>

                    </div>
                </div>
                <div class="sectionFooterUp">
                    <h3>Newsletter</h3>
                    <span>Sign up and receive the latest tips via email.</span>
                    <span>Write your email<span>*</span></span>
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
    background-color: #27314f;

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

            #logo {
                width: 40%;
                margin-bottom: 20px;
            }

            h3 {
                color: white;
                margin-bottom: 20px;
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
