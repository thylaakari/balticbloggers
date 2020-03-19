<template>
    <div class="d-flex flex-column align-self-center gutters">
        <div class="d-flex justify-content-between">
            <router-link tag="i" class="fas fa-bars purple" to="/menu"></router-link>
            <router-link tag="i" class="fas fa-filter" to="/filtere"></router-link>
        </div>
        <h2 class="display-4">Baltic Bloggers Base</h2>
<!--        <div class="chips">-->
<!--            <div class="chip">-->
<!--                <i class="fas fa-check text-success"></i> Youtube-->
<!--            </div>-->
<!--            <div class="chip">-->
<!--                <i class="fas fa-check text-success"></i> Россия-->
<!--            </div>-->
<!--        </div>-->
        <router-link to="/" class="resetf">{{ $store.getters.locale === 'ru' ? 'Сбросить фильтры' : 'Reset filters' }}</router-link>
        <div class="bloggers" v-if="bloggers.length">
            <div class="blogger" v-for="item in bloggers">
                <router-link :to="`/blogger/${item.objectId}`" class="blogger">
                    <img :src="`avatars/${item.avatar}`" :alt="item.name">
                    <p>{{item.name}}</p>
                </router-link>
            </div>
        </div>
        <div v-else>
            <p class="text-center mt-4">{{ $store.getters.locale === 'ru' ? 'Ничего не найдено' : 'Records not found' }}</p>
        </div>
        <router-link to="/" tag="button" class="btn btn-light btn-block mt-2">{{ $store.getters.locale === 'ru' ? 'Показать всех' : 'Show all' }}</router-link>
    </div>
</template>

<script>

    export default {
        name: 'Search',
        metaInfo: {
            title: 'Список блоггеров',
        },
        props: ['where', 'country', 'theme', 'soc', 'ages'],
        data: () => ({
            bloggers: []
        }),
        methods: {

        },
        async mounted() {
            if (this.$route.query.filter) {
                // console.log(this.$route.query.filter)
                const where = this.$route.query.filter
                const queryBuilder = await Backendless.DataQueryBuilder.create().setWhereClause(where)
                this.bloggers = await Backendless.Data.of('users').find(queryBuilder)
            }
            else {
                const where = "type = 'blogger'"
                const queryBuilder = await Backendless.DataQueryBuilder.create().setWhereClause(where)
                this.bloggers = await Backendless.Data.of('users').find(queryBuilder)
            }
        }
    }
</script>

<style scoped>
    .display-4 {
        font-size: 25px;
        color: #333333;
    }
    .blogger a {
        color: #333333;
    }
    h5 {
        font-size: .9rem;
        color: #c8c6c6;
    }
    .blogger {
        display: flex;
        align-items: center;
        margin: 15px 0;
        font-size: 14px;
    }
    .blogger p {
        margin: 0;
        padding: 0;
    }
    .blogger img {
        width: 23%;
        border-radius: 7px;
        margin-right: 20px;
    }
    .chips {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .resetf {
        color: #000;
        text-decoration: underline;
        font-size: 13px;
        text-align: center;
    }
    .chips i {
        font-size: .7rem;
    }
    .chip {
        margin-right: 20px;
        font-size: 13px;
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
    hr {
        border-top: 1px solid #ffffff40;
        width: 60%;
        margin: 0 auto;
    }
    .gutters {
        margin: 0 15px; /* добавить 50px внизу если есть fixed pos */
        padding-top: 20px;
    }
    i {
        font-size: 1.5rem;
    }
    .purple {
        color: #3f53b2;
    }
    h2 {
        font-size: 1.6rem;
        text-align: center;
        margin-top: 20px;
    }
</style>
