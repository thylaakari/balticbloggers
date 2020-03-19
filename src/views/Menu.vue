<template>
    <div class="d-flex flex-column align-self-center gutters">
        <div class="d-flex justify-content-between">
            <h5>Baltic Bloggers Base</h5>
            <router-link tag="i" class="fas fa-times rose" to="/"></router-link>
        </div>
        <div class="d-flex flex-column mt-5 mb-5">
            <router-link tag="a" to="/" href="">{{ $store.getters.locale === 'ru' ? 'Блоггеры' : 'Bloggers' }}</router-link>
            <a href="" @click.prevent="logout">{{ $store.getters.locale === 'ru' ? 'Выход' : 'Log out' }}</a>
        </div>
        <div class="big-name">MENU</div>
        <div class="localize">
            <strong @click="setRu">RU</strong> /
            <span @click="setEn">EN</span></div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        metaInfo: {
            title: 'Меню',
        },
        methods: {
            async logout() {
                await Backendless.UserService.logout()
                this.$router.push('/enter')
            },
            async setRu() {
                await this.$store.commit('setRu')
            },
            async setEn() {
                await this.$store.commit('setEn')
            }
        }
    }
</script>

<style scoped>
    .big-name {
        opacity: 0.7;
        font-size: 100px;
        line-height: normal;
        color: #eff0f1;
        position: absolute;
        top: 270px;
        left: -11px;
        z-index: 0;
    }
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
    .locale {
        color: #b9b9b9;

    }
    .locale strong {
        color: #000000;
    }
</style>