<template>
    <div class="d-flex flex-column align-self-center">
        <div class="avatar">
            <div class="img-c">
                <img :src="`https://backendlessappcontent.com/D016D00F-53A3-4669-FFC7-A20D8A442E00/console/dbwajistfuuqpjxznlwwtvwpbiqwnnzynwuy/files/view/avatars/${blogger[0].avatar}`" :alt="blogger[0].name">

            </div>
            <h2 class="display-4">{{blogger[0].name}}</h2>
            <h3>{{blogger[0].country}}</h3>
        </div>
        <div class="big-name">BLOG</div>
        <div class="blog gutters">
            <h5>{{ $store.getters.locale === 'ru' ? 'Обо мне' : 'About' }}</h5>
            <p class="small">{{blogger[0].about}}</p>
            <h5>{{ $store.getters.locale === 'ru' ? 'Аудитория' : 'Auditory' }}</h5>
            <p class="small">{{blogger[0].auditoryfrom}} - {{blogger[0].auditoryto}} {{ $store.getters.locale === 'ru' ? 'лет' : 'years old' }}</p>
            <h5>{{ $store.getters.locale === 'ru' ? 'Ссылки' : 'Links' }}</h5>
            <div class="d-flex mb-4">
                <div class="d-flex align-items-center">
                    <a :href="blogger[0].youtube" class="d-block item" target="_blank" v-if="blogger[0].youtube">
                        <i class="fab fa-youtube you"></i>
                        <span>Youtube</span>
                    </a>
                    <a :href="blogger[0].insta" class="d-block item" target="_blank" v-if="blogger[0].insta">
                        <i class="fab fa-instagram insta"></i>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
            <router-link tag="button" to="/" class="btn btn-light btn-block">{{ $store.getters.locale === 'ru' ? 'Вернуться к списку' : 'Back to list' }}</router-link>
<!--            <div class="bottom-sep"></div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Blogger",
        metaInfo: {
            title: 'Страница блогера'
        },
        data: () => ({
            blogger: []
        }),
        async mounted() {
            const id = this.$route.params.id
            const where = `objectId = '${id}'`
            const queryBuilder = await Backendless.DataQueryBuilder.create().setWhereClause(where)
            try {
                this.blogger = await Backendless.Data.of('users').find(queryBuilder)
            } catch (e) {

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
    .small {
        font-size: 17px;
        color: #000000;
    }
    .item {
        margin-right: 25px;
    }
    .you {
        color: #c4302b;
    }
    .insta {
        color: #C13584;
    }
    i {
        margin-right: 6px;
    }
    .blog {
        padding-top: 50px;
        position: relative;
    }
    .gutters {
        margin: 0 15px;
    }
    .avatar {
        background-color: #fdfbfb;
        padding: 30px 0;
        text-align: center;
    }
    .img-c {
        width: 130px;
        height: 130px;
        overflow: hidden;
        border-radius: 50%;
        margin: 0 auto 30px;
    }
    .img-c img {
        height: 100%;
    }
    .display-4 {
        font-size:26px;
        color: #000000;
    }
    h3 {
        font-size: 14px;
        font-weight: bold;
    }
    h5 {
        font-size: 17px;
        color: #000000;
        font-weight: bold;
    }
</style>