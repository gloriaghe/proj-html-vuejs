<template>
    <section id="priceContainer">
        <section id="presentation">
            <h2>Our rates for developer from landrick team</h2>
            <span>Start working with <strong>Landrick</strong> that can provide everything you need to generate
                awarness, drive traffic, connect.</span>
        </section>
        <section id="price">
             <div class="containerSinglePrice" v-for="(element, i) in priceExplanation" :key="i">
                <span>
                    <strong>{{element.name}}</strong>
                </span>
                <h2>
                    <font-awesome-icon icon="fa-solid fa-dollar-sign" />{{element.price}}
                </h2>
                <span>Per Month</span>
                <span>{{element.text}}</span>
                <div id="containerCheck">
                    <div v-for="(element, i) in element.data" :key="i">
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        {{element}}
                    </div>
                    
                </div>
                <button class="btBlue">
                    <a :href="element.link">
                        Buy Now
                    </a>
                </button>
                <span class="noCreditCard">*No credit card required</span>
                 <img id="ribbon" v-if="element.best" src="../assets/img/Orange-Ribbon.png" alt="Best Price">

            </div>
            
        </section>
    </section>
</template>

<script>
export default {
    name: 'PriceLandrick',
    data() {
        return {
            priceExplanation: [
                {
                    name: "Basic",
                    price: "9.00",
                    text: "All the basics for businesses that are just getting startes.",
                    data: ["Full Access", "Enhanced Security", "Source files", "1 Domain Free", "Enhanced Security"],
                    link: "#",
                    best: false
                },
                {
                    name: "Business",
                    price: "39.00",
                    text: "Better for growing businesses that want more customers.",
                    data: ["Full Access", "Enhanced Security", "Source files", "1 Domain Free", "Enhanced Security"],
                    link: "#",
                    best: true
                },
                {
                    name: "Enterprise",
                    price: "79.00",
                    text: "Advanced features for pros who need more customization.",
                    data: ["Full Access", "Enhanced Security", "Source files", "1 Domain Free", "Enhanced Security"],
                    link: "#",
                    best: false
                },
            ]

        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin colorBlue {
    color: #2f55d4
}

$xsmall: 750px;
@import '../assets/button.scss';
@import '../assets/check.scss';

#priceContainer {
    margin: 100px 0;

    #presentation {
        width: 60%;
        margin: 50px auto;
        text-align: center;

        h2 {
            margin-bottom: 20px;
        }
    }

    #price {
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
        flex-wrap: wrap;

        .containerSinglePrice {
            width: 27%;
            display: flex;
            flex-direction: column;
            border-bottom: 2px solid #adb5bd;
            border-radius: 20px;
            padding: 20px 20px;
            position: relative;
            margin-top: 20px;

            @media screen and (max-width: $xsmall ) {
                & {

                    width: 80%;
                    margin: 20px auto;

                }
            }

            &:hover {
                line-height: 32px;
                border-bottom: 2px solid #2f55d4;
                margin-top: 10px;
            }

            strong {
                margin-left: 20px;
                @include colorBlue;
                border: 0.1px solid #adb5bd;
                border-radius: 10px;
                padding: 10px 20px;
            }

            h2 {
                
                margin: 20px 0 10px 0;
                font-size: 35px;
            }

            .btBlue {
                margin-bottom: 10px;
            }

            #ribbon {
                position: absolute;
                top: 0;
                right: 0;
                width: 70px;
            }
        }

    }
}
</style>
