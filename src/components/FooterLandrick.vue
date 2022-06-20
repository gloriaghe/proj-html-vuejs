<template>
    <footer>
        <section id="footerLink">
            <div class="sectionFooterUp">
                <img id="logo" src="../assets/img/logo-light.png" alt="Logo landrick">
                <span>Star working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</span>
                <div>

                </div>
            </div>
            <div class="sectionFooterUp">
                <h3>Company</h3>
                <div v-for="(element, i) in company" :key="i">
                    <a href="element.link" >
                        <font-awesome-icon icon="fa-solid fa-angle-right" />
                        {{element.text}}
                    </a>

                </div>
            </div>
            <div class="sectionFooterUp">
                <h3>Usefull Links</h3>
                <div v-for="(element, i) in links" :key="i">
                    <a href="element.link" >
                        <font-awesome-icon icon="fa-solid fa-angle-right" />
                        {{element.text}}
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
        <section>
            <div>

            </div>
        </section>
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
            ]

        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer{
    background-color: #27314f;
    a{
        text-decoration: none;
    
    }

    #footerLink{
        display: flex;
        width: 65%;
        margin: 0 auto;
        justify-content: space-between;
         .sectionFooterUp{
            display: flex;
            flex-direction: column;
            max-width: 30%;
             #logo{
                 width: 20%;
             }
         }
    }
}
</style>
