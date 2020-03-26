<template>
    <div class="d-flex flex-column align-self-center gutters">
        <h2 class="display-4">Админ-панель</h2>
        <router-link to="/enter" tag="button" class="btn btn-block btn-light mt-3 mb-3" >Вернуться на сайт</router-link>
        <div class="bloggers">
            <div class="blogger" v-for="item in bloggers">
                <router-link :to="`/bloggeredit/${item.objectId}`" class="blogger">
                    <img :src="`https://backendlessappcontent.com/D016D00F-53A3-4669-FFC7-A20D8A442E00/console/dbwajistfuuqpjxznlwwtvwpbiqwnnzynwuy/files/view/avatars/${item.avatar}`" :alt="item.name">
                    <p>{{item.name}}</p>
                </router-link>
            </div>
        </div>
        <!--        <button class="btn btn-light btn-block">Показать всех</button>-->
    </div>
</template>

<script>

    export default {
        name: 'Admin',
        metaInfo: {
            title: 'Главная',
        },
        data: () => ({
            bloggers: []
        }),
        methods: {

        },
        async mounted() {
            if (!this.$route.query.admin) {
                this.$router.push('/')
            }
            const where = "type = 'blogger'"
            const queryBuilder = await Backendless.DataQueryBuilder.create().setWhereClause(where)
            this.bloggers = await Backendless.Data.of('users').find(queryBuilder)
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
