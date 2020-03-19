<template>
    <div class="d-flex flex-column align-self-center text-center body">
        <div class="img-fluid">
            <img src="../assets/hi.png" alt="">
        </div>
        <h3>Welcome to</h3>
        <hr>
        <h1 class="display-4">baltic</h1>
        <h1 class="display-4">bloggers</h1>
        <h1 class="display-4">base</h1>
        <hr>
        <div class="localize">
            <router-link tag="strong" to="/auth" @click="setRu">RU</router-link> /
            <router-link tag="span" to="/auth" @click="setEn">EN</router-link></div>
        <div class="bottom-sep"></div>
    </div>
</template>

<script>

    export default {
        name: 'Welcome',
        metaInfo: {
            title: 'Приветствие',
        },
        methods: {
            async setRu() {
                await this.$store.dispatch('setRu')
            },
            async setEn() {
                await this.$store.dispatch('setEn')
            }
        }
    }
</script>

<style>
    .display-4 {
        font-size: 41px;
        font-weight: 400;
    }
    .body {
        height: 100%;
        background: linear-gradient(to bottom, #3f53b2 50%, #ed4e81 50%);
    }
    h1 {
        text-transform: capitalize;
        color: #fff;
    }
    h3 {
        font-weight: 300;
        color: #ffffff7d;
        font-size: 14px;
    }
    img {
        margin: 70px 0;
    }
    hr {
        border-top: 1px solid #ffffff40;
        width: 60%;
        margin: 0 auto;
    }
    .localize {
        font-size: 17px;
        color: #fff;
        position: absolute;
        bottom: 40px;
        transform: translateX(-50%);
        left: 50%;
    }
</style>
