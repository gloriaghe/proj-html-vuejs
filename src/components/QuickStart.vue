<template>
    <section>
        <strong>Quickstart</strong>
        <h2>Awesome isn't it? Let's dive in!</h2>
        <span id="textQuickstart">Start working with <strong>Landrick</strong> that can provide everithing you need to
            generate awareness,
            drive traffic, connect.</span>
        <div id="containerProgram">
            <div id="program">
                <a @click="clickHere(element)" v-for="(element, i) in siti" :key="i"
                    :class="element.here ? 'here' : ''">{{ element.name }}</a>
            </div>
            <span>
                <span class="green">$ </span>
                npm install
                <span class="green">-g </span>
                claps.js
            </span>
        </div>
        <div id="containerCheck">
            <div>
                <span class="green checkBorder">
                    <font-awesome-icon icon="fa-solid fa-check" />
                </span>
                Organize your data
            </div>
            <div>
                <span class="green checkBorder">
                    <font-awesome-icon icon="fa-solid fa-check" />
                </span>
                Work with any team
            </div>

        </div>

    </section>
</template>

<script>
export default {
    name: 'QuickStart',
    data() {
        return {
            siti: [
                {
                    name: "npm",
                    here: true
                },
                {
                    name: "nuget",
                    here: false
                },
                {
                    name: "spm",
                    here: false
                },
                {
                    name: "github",
                    here: false
                }
            ]
        }
    },
    methods: {
        clickHere(elementActive) {
            this.siti.forEach(element => {
                element.here = false
            });
            elementActive.here = true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/check.scss';
$small: 900px;

@mixin colorBlue {
    color: #2f55d4
}

;

@mixin a-no-decoration {
    text-decoration: none;
    color: #8492a6;
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;
    margin: 0 auto;
    padding-bottom: 80px;

    @media screen and (max-width: $small ) {
        & {
            width: 100%;
        }
    }

    strong {
        @include colorBlue;
    }

    h2 {
        margin: 20px 0;
    }

    a {
        @include a-no-decoration
    }

    #textQuickstart {
        width: 70%;
        text-align: center;
    }

    #containerProgram {
        background-color: #3c4858;
        height: 139px;
        width: 100%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 30px 0 10px 0;

        #program {
            border: 0.1px solid #adb5bd;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            width: 90%;
            margin: 0 auto;
            background-color: #4f5a69;
            text-align: center;
            font-weight: bold;

            a {
                color: white;
                width: 25%;
                padding: 10px 0px;
            }

            .here {
                background-color: #3c4858;
                border-left: 0.2px solid #adb5bd;
                border-right: 0.2px solid #adb5bd;

                border-radius: 10px;
                padding: 10px 40px;
            }
        }

        span {
            width: 90%;
            margin: 0 auto;
            align-self: flex-start;
            padding-top: 20px;
        }
    }

    .green {
        color: #2eca8b;
    }

    #containerCheck {
        display: flex;
        width: 100%;

        div {
            margin-right: 30px;
        }
    }




}
</style>
