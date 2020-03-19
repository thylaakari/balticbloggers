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
                style="height: 270px"
        >
            <slide>
                <img src="../assets/girl.png" alt="">
            </slide>
            <slide>
                <img src="../assets/girl.png" alt="">
            </slide>
        </carousel>
        <p class="silent">{{ $store.getters.locale === 'ru' ? 'Привет' : 'Hi' }}! <br>
            {{ $store.getters.locale === 'ru' ? 'Заходи в наше приложение, тебя ждет много интересного :)' : 'Come into our application, you will find many interesting things :)' }}</p>
        <router-link tag="button" to="/enter" type="button" class="btn btn-light btn-block">
            {{ $store.getters.locale === 'ru' ? 'Войти' : 'Sign in' }}
        </router-link>
        <router-link type="button" tag="button" to="/register" class="btn btn-primary btn-block">
            {{ $store.getters.locale === 'ru' ? 'Зарегистрироваться' : 'Sign up' }}
        </router-link>
<!--        <div class="bottom-sep"></div>-->
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
        color: #000;
        font-size: 14px;
        margin-top: 50px;
    }
    .display-4 {
        font-size: 25px;
        color: #333333;
        margin-bottom: 30px;
    }
    .silent {
        color: #bebebe;
        font-size: 15px;
        margin-bottom: 30px;
    }
</style>
