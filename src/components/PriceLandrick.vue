<template>
    <section id="priceContainer">
        <section id="presentation">
            <h2>Our rates for developer from landrick team</h2>
            <span>Start working with <strong>Landrick</strong> that can provide everything you need to generate
                awarness, drive traffic, connect.</span>
        </section>
        <section id="price">
            <div class="containerSinglePrice">
                <span>
                    <strong>Basic</strong>
                </span>
                <h3>
                    <font-awesome-icon icon="fa-solid fa-dollar-sign" />9.00
                </h3>
                <span>Per Month</span>
                <span>All the basics for businesses that are just getting startes.</span>
                <div id="containerCheck">
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        Full Access
                    </div>
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        Enhanced Security
                    </div>
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        Source files
                    </div>
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        1 Domain Free
                    </div>
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        Enhanced Security
                    </div>
                </div>
                <button class="btBlue">
                    <a href="#">
                        Buy Now
                    </a>
                </button>
                <span class="noCreditCard">*No credit card required</span>
            </div>
            <div class="containerSinglePrice">
                <span>
                    <strong>Business</strong>
                </span>
                <h3>
                    <font-awesome-icon icon="fa-solid fa-dollar-sign" />39.00
                </h3>
                <span>Per Month</span>
                <span>Better for growing businesses that want more customers.</span>
                <div id="containerCheck">
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        Full Access
                    </div>
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        Enhanced Security
                    </div>
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        Source files
                    </div>
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        1 Domain Free
                    </div>
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        Enhanced Security
                    </div>
                </div>
                <button class="btBlue">
                    <a href="#">
                        Buy Now
                    </a>
                </button>
                <span class="noCreditCard">*No credit card required</span>
                <img id="ribbon" src="../assets/img/Orange-Ribbon.png" alt="Best Price">
            </div>
            <div class="containerSinglePrice">
                <span>
                    <strong>Enterprise</strong>
                </span>
                <h3>
                    <font-awesome-icon icon="fa-solid fa-dollar-sign" />79.00
                </h3>
                <span>Per Month</span>
                <span>Advanced features for pros who need more customization.</span>
                <div id="containerCheck">
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        Full Access
                    </div>
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        Enhanced Security
                    </div>
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        Source files
                    </div>
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        1 Domain Free
                    </div>
                    <div>
                        <span class="blue checkBorder">
                            <font-awesome-icon icon="fa-solid fa-check" />
                        </span>
                        Enhanced Security
                    </div>
                </div>
                <button class="btBlue">
                    <a href="#">
                        Buy Now
                    </a>
                </button>
                <span class="noCreditCard">*No credit card required</span>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'PriceLandrick',
    data() {
        return {


        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin colorBlue {
    color: #2f55d4
}

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

        .containerSinglePrice {
            width: 27%;
            display: flex;
            flex-direction: column;
            border-bottom: 2px solid #adb5bd;
            border-radius: 20px;
            padding: 20px 20px;
            position: relative;
            margin-top: 20px;


            &:hover{
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

            h3 {
                color: black;
                margin: 20px 0 10px 0;
                font-size: 35px;
            }

            .btBlue{
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
