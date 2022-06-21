<template>
    <section>
        <h2>Key Features</h2>
        <span>Start working with <a href="#" id="landrickName">Landrick</a> that can provide everything you need to
            generate awarness,
            drive traffic, connect.</span>

        <div id="properties">
            <a v-for="(element, i) in properties" :href="element.i" class="containerProperties" :key="i">
                <font-awesome-icon :icon='element.font' class="icon" />
                <h3>{{element.name}}</h3>
                <span>{{element.text}}</span>
                <a :href="element.link">
                    <span>Read More
                        <i>
                            <font-awesome-icon icon="fa-solid fa-angle-right" />
                        </i>
                    </span>
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
            properties: [
                {
                    font: 'fa-solid fa-layer-group',
                    name: "Modular",
                    text: "Composed in a pseudo-Latin language wich more or less corresponds.",
                    link: "#"
                },
                {
                    font: "fa-solid fa-display",
                    name: "Responsive",
                    text: "Composed in a pseudo-Latin language wich more or less corresponds.",
                    link: "#"
                },
                {
                    font: "fa-solid fa-up-right-and-down-left-from-center",
                    name: "Customizable",
                    text: "Composed in a pseudo-Latin language wich more or less corresponds.",
                    link: "#"
                },
                {
                    font: "fa-solid fa-arrows-to-circle",
                    name: "Scalable",
                    text: "Composed in a pseudo-Latin language wich more or less corresponds.",
                    link: "#"
                }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$small: 900px;


@mixin a-no-decoration {
    text-decoration: none;
    color: #8492a6;
}

;

@mixin colorBlue {
    color: #2f55d4
}

;

section {

    #landrickName {
        @include colorBlue;
        text-decoration: none;
    }

    h2 {
        margin-bottom: 20px;
    }

    span {
        width: 50%;
        display: block;
    }

    #properties {
        display: flex;
        width: 100%;
        margin: 80px auto;

        @media screen and (max-width: $small ) {
            & {
               flex-wrap: wrap;
            }

            .containerProperties{
                width: 50%;
            }
        }

        a {
            margin-top: 20px;
        }

        a:hover {
            margin-top: -10px;
        }

        .containerProperties {
            display: flex;
            flex-direction: column;

            @include a-no-decoration;

            .icon {
                @include colorBlue;
                margin: 40px 20px;
                align-self: flex-start;
                font-size: 20px;
            }

            h3 {
                margin-bottom: 20px;
                color: #3c4858;
                font-size: 17px;
            }

            span {
                width: 90%;
            }



            a {
                text-decoration: none;
                @include colorBlue;
                margin-top: 20px;
                display: flex;
                font-weight: bold;

                span {
                    font-size: 15px;

                    i {
                        font-size: 10px;
                    }
                }
            }
        }
    }
}
</style>
