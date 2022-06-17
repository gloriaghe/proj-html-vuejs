<template>
    <section>
        <span>Quickstart</span>
        <h2>Awesome isn't it? Let's dive in!</h2>
        <span>Start working with <strong>Landrick</strong> that can provide everithing you need to generate awareness,
            drive traffic, connect.</span>
        <div>
            <a href="#">npm</a>
            <a href="#">nuget</a>
            <a href="#">spm</a>
            <a href="#">github</a>
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

section {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
