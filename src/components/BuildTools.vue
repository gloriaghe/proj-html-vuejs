<template>
    <section>
        <div id="text">
            <h2>Build tools and extensive documentation</h2>
            <span>You can combine all the Landrick templates into a single one, you can take a component from
                Application theme and use it in the Website.</span>
            <div id="containerCheck">
                <div>
                    <span class="blue checkBorder">
                        <font-awesome-icon icon="fa-solid fa-check" />
                    </span>
                    Digital Marketing Solution for Tomorrow
                </div>
                <div>
                    <span class="blue checkBorder">
                        <font-awesome-icon icon="fa-solid fa-check" />
                    </span>
                    Our Talented & Experienced Marketing Agency
                </div>
                <div>
                    <span class="blue checkBorder">
                        <font-awesome-icon icon="fa-solid fa-check" />
                    </span>
                    Create your own skin to match your brand
                </div>
            </div>

            <button class="btBlue">
                <a href="#">
                    <span>Read More </span>
                    <span id="arrow">
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </span>
                </a>
            </button>

        </div>
        <div id="img">
            <img src="../assets/img/1.png" alt="grafico">
        </div>
    </section>
</template>

<script>
export default {
    name: 'BuildTools',
    data() {
        return {


        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/button.scss';
@import '../assets/check.scss';
$xsmall: 700px;

section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;

    #text {
        width: 50%;

        h2 {
            margin-bottom: 40px;
            width: 60%;
            line-height: 40px;

        }

        #arrow {
            font-size: 12px;
            margin-left: 5px;
        }

        @media screen and (max-width: $xsmall ) {
            & {
                width: 100%;
            }
        }
    }

    #img {
        width: 45%;

        img {
            width: 80%;
            object-fit: cover;
        }

        @media screen and (max-width: $xsmall ) {
            & {
                display: none;
            }
        }

    }
}
</style>
