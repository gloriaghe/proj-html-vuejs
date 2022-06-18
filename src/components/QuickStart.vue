<template>
    <section>
        <strong>Quickstart</strong>
        <h2>Awesome isn't it? Let's dive in!</h2>
        <span>Start working with <strong>Landrick</strong> that can provide everithing you need to generate awareness,
            drive traffic, connect.</span>
        <div id="containerProgram">
            <div id="program">
                <a href="#">npm</a>
                <a href="#">nuget</a>
                <a href="#">spm</a>
                <a href="#">github</a>
            </div>
            <span>
                <span class="dollaro">$ </span>
                npm install
                <span>-g </span>
                claps.js
            </span>
        </div>
        <a href="#">Organize your data</a>
        <a href="#">Work with any team</a>
    </section>
</template>

<script>
export default {
    name: 'QuickStart',
    data() {
        return {
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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

    strong {
        @include colorBlue;
    }

    h2 {
        margin: 20px 0;
    }

    a {
        @include a-no-decoration
    }

    #containerProgram {
        background-color: #3c4858;
        height: 139px;
        width: 730px;
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

            & a:first-child {
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
}
</style>
