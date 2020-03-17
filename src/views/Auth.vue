<template>
    <div class="d-flex flex-column align-self-center text-center gutters">
        <h3>Welcome to</h3>
        <h2 class="display-4">Baltic Bloggers Base</h2>
        <carousel
                :perPage="1"
                :paginationActiveColor="'#ED4E81'"
                :paginationColor="'#ede0de'"
                :paginationPadding="5"
                :paginationSize="7"
        >
            <slide>
                <img src="../assets/girl.png" alt="">
            </slide>
            <slide>
                <img src="../assets/girl.png" alt="">
            </slide>
        </carousel>
        <p class="silent">Привет! <br>Заходи в наше приложение, тебя ждет много интересного :)</p>
        <button type="button" class="btn btn-light btn-block">Войти</button>
        <button type="button" class="btn btn-primary btn-block">Зарегистрироваться</button>
        <div class="bottom-sep"></div>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel'

    export default {
        name: 'Auth',
        metaInfo: {
            title: 'Главная',
        },
        data: () => ({

        }),
        components: {
            Carousel,
            Slide
        },
    }
</script>

<style scoped>
    .gutters {
        margin: 0 15px;
    }
    h3 {
        font-weight: 300;
        color: #2323237d;
        font-size: 1em;
        margin-top: 50px;
    }
    .display-4 {
        font-size: 1.6rem;
        margin-bottom: 30px;
    }
    .silent {
        color: #2323237d;
        font-size: 1em;
    }
</style>
