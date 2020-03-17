<template>
    <div class="d-flex flex-column align-self-center gutters">
        <div class="d-flex justify-content-between">
            <h5>Baltic Bloggers Base</h5>
            <i class="fas fa-times rose"></i>
        </div>
        <div class="d-flex flex-column mt-5">
            <a href="">Блоггеры</a>
            <a href="">Выход</a>
        </div>
        <div class="locale">
            RU/<strong>EN</strong>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>
    h5 {
        font-size: 15px;
        color: #333333;
    }
    .rose {
        color: #ed4e81;
    }
    .gutters {
        margin: 0 60px; /* добавить 50px внизу если есть fixed pos */
        padding-top: 30px;
    }
    a {
        color: #000;
        font-size: 17px;
        margin-bottom: 15px;
    }
</style>