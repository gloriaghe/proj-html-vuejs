<template>
    <section>
        <h2>Key Features</h2>
        <span>Start working with <a href="#">Landrick</a> that can provide everything you need to generate awarness,
            drive traffic, connect.</span>
        <div id="properties">
            <a href="#" class="containerProperties">
                <font-awesome-icon icon="fa-solid fa-layer-group" class="icon" />
                <h3>Modular</h3>
                <span>Composed in a pseudo-Latin language wich more or less corresponds.</span>
                <a href="#">
                    <span>Read More</span>
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                </a>
            </a>
            <a href="#" class="containerProperties">
                <font-awesome-icon icon="fa-solid fa-layer-group" class="icon" />
                <h3>Responsive</h3>
                <span>Composed in a pseudo-Latin language wich more or less corresponds.</span>
                <a href="#">
                    <span>Read More</span>
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                </a>
            </a>
            <a href="#" class="containerProperties">
                <font-awesome-icon icon="fa-solid fa-layer-group" class="icon" />
                <h3>Customizable</h3>
                <span>Composed in a pseudo-Latin language wich more or less corresponds.</span>
                <a href="#">
                    <span>Read More</span>
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                </a>
            </a>
            <a href="#" class="containerProperties">
                <!-- <font-awesome-icon icon="fa-solid fa-arrows-maximize" /> -->
                <font-awesome-icon icon="fa-solid fa-layer-group" class="icon" />
                <h3>Scalable</h3>
                <span>Composed in a pseudo-Latin language wich more or less corresponds.</span>
                <a href="#">
                    <span>Read More</span>
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                </a>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'KeyFeatures',
    data() {
        return {
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin a-no-decoration {
    text-decoration: none;
    color: #8492a6;
}

@mixin colorBlue {
    color: #2f55d4
}

;

section {
    h2{
        margin-bottom: 20px;
    }

    span{
        width: 50%;
        display: block;
    }

    #properties {
        display: flex;
        margin: 80px 0;

        .containerProperties {
            display: flex;
            flex-direction: column;

            @include a-no-decoration;

            .icon {
                @include colorBlue;
                margin: 40px 0;
                align-self: flex-start;
            }

            h3 {
                margin-bottom: 20px;
            }

            a {
                text-decoration: none;
                @include colorBlue;
                margin-top: 20px;

                span {
                    margin-right: 20px;
                }
            }
        }
    }
}
</style>
