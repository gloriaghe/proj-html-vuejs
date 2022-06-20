<template>
    <section>
        <div id="text">
            <h2>Want to be among the first to find out?</h2>
            <span>Start working with <strong>Landrick</strong> that can provide averything you need to generate
                awareness, drive traffic, connect.</span>
        </div>
        <div id="form">
            <input type="text" placeholder="Email Address">
            <button class="btBlue">
                <a href="#">
                    Get Started
                </a>
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'StartLandrick',
    data() {
        return {


        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/button.scss';

section {
    width: 60%;
    margin: 50px auto;
    text-align: center;


    #text {
        h2 {
            margin-bottom: 20px;
        }
    }

    #form {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

        input {
            width: 70%;
        }

        button {
            border-radius: 30px;
            padding-left: 20px;
            padding-right: 20px;

        }
    }
}
</style>
