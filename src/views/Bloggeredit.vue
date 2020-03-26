<template>
    <div class="d-flex flex-column align-self-center">
        <div class="avatar">
            <div class="img-c">
                <img :src="`https://backendlessappcontent.com/D016D00F-53A3-4669-FFC7-A20D8A442E00/console/dbwajistfuuqpjxznlwwtvwpbiqwnnzynwuy/files/view/avatars/${blogger[0].avatar}`" :alt="blogger[0].name">
            </div>
        </div>
        <div class="blog gutters">
            <form @submit.prevent="saves">
                <div class="form-group">
                    <label>О блоггере</label>
                    <input type="text" class="form-control" v-model="about">
                </div>

                <div class="form-group">
                    <label>От</label>
                    <input type="text" class="form-control" v-model="auditoryfrom">
                </div>
                <div class="form-group">
                    <label>До</label>
                    <input type="text" class="form-control" v-model="auditoryto">
                </div>

                <div class="form-group">
                    <label>Страна</label>
                    <input type="text" class="form-control" v-model="country">
                </div>

                <div class="form-group">
                    <label>Инстаграм</label>
                    <input type="text" class="form-control" v-model="insta">
                </div>

                <div class="form-group">
                    <label>Youtube</label>
                    <input type="text" class="form-control" v-model="youtube">
                </div>

                <div class="form-group">
                    <label>Тема</label>
                    <input type="text" class="form-control" v-model="theme">
                </div>

                <div class="form-group">
                    <label>Имя</label>
                    <input type="text" class="form-control" v-model="name">
                </div>

                <button type="submit" class="btn btn-primary btn-block mt-4 mb-4">Сохранить</button>
            </form>
            <button type="button" class="btn btn-danger btn-block mt-4 mb-4" @click="deleteq">Удалить</button>
            <router-link tag="button" to="/" class="btn btn-light btn-block">{{ $store.getters.locale === 'ru' ? 'Вернуться к списку' : 'Back to list' }}</router-link>
            <!--            <div class="bottom-sep"></div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bloggeredit",
        metaInfo: {
            title: 'Редактирование блогера'
        },
        data: () => ({
            blogger: [],
            about: '',
            auditoryfrom: '',
            auditoryto: '',
            country: '',
            insta: '',
            theme: '',
            youtube: '',
            name: '',
        }),
        methods: {
            async saves() {
                const userwhere = `objectId = '${this.blogger[0].objectId}'`
                const queryBuilder = await Backendless.DataQueryBuilder.create().setWhereClause(userwhere)
                const user = await Backendless.Data.of('Users').find(queryBuilder)
                const data = {
                    about: this.about,
                    auditoryfrom: this.auditoryfrom,
                    auditoryto: this.auditoryto,
                    country: this.country,
                    insta: this.insta,
                    theme: this.theme,
                    youtube: this.youtube,
                    name: this.name,
                }
                await Backendless.Data.of('users').bulkUpdate(`objectId = '${this.blogger[0].objectId}'`, data)
                this.$router.push('/admin?admin=true')
            },
            async deleteq() {
                await Backendless.Data.of('users').remove({objectId: this.blogger[0].objectId})
                this.$router.push('/admin?admin=true')
            }
        },
        async mounted() {
            const id = this.$route.params.id
            const where = `objectId = '${id}'`
            const queryBuilder = await Backendless.DataQueryBuilder.create().setWhereClause(where)
            try {
                this.blogger = await Backendless.Data.of('users').find(queryBuilder)
                this.about = this.blogger[0].about
                this.auditoryfrom = this.blogger[0].auditoryfrom
                this.auditoryto = this.blogger[0].auditoryto
                this.country = this.blogger[0].country
                this.insta = this.blogger[0].insta
                this.theme = this.blogger[0].theme
                this.youtube = this.blogger[0].youtube
                this.email = this.blogger[0].email
                this.name = this.blogger[0].name
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