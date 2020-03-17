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
        <div class="localize"><strong>RU</strong> / EN</div>
        <div class="bottom-sep"></div>
    </div>
</template>

<script>

    export default {
        name: 'Welcome',
        metaInfo: {
            title: 'Приветствие',
        }
    }
</script>

<style>
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
        font-size: 1em;
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
        color: #fff;
        position: absolute;
        bottom: 40px;
        transform: translateX(-50%);
        left: 50%;
    }
</style>
