<template>
    <section>
        <div>
            <span id="titoletto">
                Development
            </span>
            <h1>A Complete Developer Toolset</h1>
            <span>Launch your campaign and benefit from our expertise on designing and managing conversion centered
                bootstrap4 html page.</span>
            <div id="buttonspace">
                <button class="btBlue">
                    <a href="#">Get Started</a>
                </button>
                <button>
                    <a href="#">Documentation</a>
                </button>
            </div>
            <span>Current Version: v2.6.0</span>
        </div>
        <img src="../assets/img/about.png" alt="">
    </section>
</template>

<script>
export default {
    name: 'JumbotronApp',
    data() {
        return {


        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
    display: flex;
    margin-top: 80px;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 50%;

        #titoletto {
            border: 1px solid #ADB5BD;
            background-color: #e4e9f8;
            padding: 5px;
            border-radius: 15px;
            color: #2f55d4;
            font-size: 13px;
            font-weight: bold;
        }

        h1 {
            color: black;
            font-size: 40px;
            margin: 20px 0;
            width: 80%;
        }

        #buttonspace {
            margin: 20px 0;
            display: inline-block;
            width: 100%;

            button {
                padding: 10px 15px;
                border-radius: 5px;
                border: 1px solid black;
                margin-right: 10px;

                a{
                    font-size: 18px;
                    text-decoration: none;
                }

                &.btBlue {
                    background-color: #2f55d4;
                    border: none;

                    a{
                        color: white;
                    }
                }
            }
        }
    }
}
</style>
