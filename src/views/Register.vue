<template>
    <div class="d-flex flex-column align-self-center gutters">
        <div class="arrow-back">
            <router-link tag="a" class="d-block" to="/auth">
                <img src="../assets/arrowback.png" alt="">
            </router-link>
        </div>
        <div class="rect"></div>
        <div class="rect2"></div>
        <h2>{{ $store.getters.locale === 'ru' ? 'Регистрация' : 'Register' }}</h2>
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="name"><strong>{{ $store.getters.locale === 'ru' ? 'Имя' : 'Name' }}</strong></label>
                <input
                        type="text"
                        class="form-control"
                        id="name"
                        :placeholder="$store.getters.locale === 'ru' ? 'Имя' : 'Name'"
                        v-model.trim="name"
                        :class="{
                                'is-invalid': ($v.name.$dirty && !$v.name.required),
                                'is-valid': ($v.name.$dirty && $v.name.required)
                            }"
                >
                <div class="invalid-feedback" v-if="$v.name.$dirty &&!$v.name.required">
                    {{ $store.getters.locale === 'ru' ? 'Обязательное поле' : 'Field is required' }}
                </div>
            </div>
            <div class="form-group">
                <label for="email"><strong>Email</strong></label>
                <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="example@gmail.com"
                        v-model.trim="email"
                        :class="{
                                'is-invalid': ($v.email.$dirty && !$v.email.required) ||
                                ($v.email.$dirty && !$v.email.email) ,
                                'is-valid': ($v.email.$dirty && $v.email.required && $v.email.email)
                            }"
                >
                <div class="invalid-feedback" v-if="$v.email.$dirty &&!$v.email.required">
                    {{ $store.getters.locale === 'ru' ? 'Обязательное поле' : 'Field is required' }}
                </div>
                <div class="invalid-feedback" v-if="$v.email.$dirty &&!$v.email.email">
                    {{ $store.getters.locale === 'ru' ? 'Введите корректный e-mail' : 'Enter a correct e-mail' }}
                </div>
            </div>
            <div class="form-group">
                <label for="password"><strong>{{ $store.getters.locale === 'ru' ? 'Пароль' : 'Password' }}</strong></label>
                <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="**********"
                        v-model.trim="password"
                        :class="{
                                'is-invalid': ($v.password.$dirty && !$v.password.required),
                                'is-valid': ($v.password.$dirty && $v.password.required)
                            }"
                >
                <div class="invalid-feedback" v-if="$v.password.$dirty &&!$v.password.required">
                    {{ $store.getters.locale === 'ru' ? 'Обязательное поле' : 'Field is required' }}
                </div>
            </div>
            <div class="form-group">
                <label for="passconf"><strong>{{ $store.getters.locale === 'ru' ? 'Подтвердите пароль' : 'Confirm password' }}</strong></label>
                <input
                        type="password"
                        class="form-control"
                        id="passconf"
                        placeholder="**********"
                        v-model.trim="pconf"
                        :class="{
                                'is-invalid': ($v.pconf.$dirty && !$v.pconf.sameAsPassword),
                                'is-valid': ($v.pconf.$dirty && $v.pconf.sameAsPassword)
                            }"
                >
                <div class="invalid-feedback" v-if="$v.password.$dirty &&!$v.password.sameAsPassword">
                    {{ $store.getters.locale === 'ru' ? 'Пароли должны совпадать' : 'Passwords should be matched' }}
                </div>
            </div>
            <div class="form-group">
                <label for="select"><strong>{{ $store.getters.locale === 'ru' ? 'Тип' : 'Type' }}</strong></label>
                <select class="form-control" id="select" v-model.trim="type">
                    <option value="user">{{ $store.getters.locale === 'ru' ? 'Пользователь' : 'User' }}</option>
                    <option value="blogger">{{ $store.getters.locale === 'ru' ? 'Блоггер' : 'Blogger' }}</option>
                </select>
            </div>
            <div v-if="type === 'blogger'">
                <div class="form-group">
                <label for="name"><strong>{{ $store.getters.locale === 'ru' ? 'Страна' : 'Country' }}</strong></label>
                <input
                        type="text"
                        class="form-control"
                        id="country"
                        placeholder="Россия"
                        v-model.trim="country"
                >
            </div>
                <div class="form-group">
                    <label for="name"><strong>{{ $store.getters.locale === 'ru' ? 'Обо мне' : 'About' }}</strong></label>
                    <input
                            type="text"
                            class="form-control"
                            id="about"
                            placeholder="Обо мне..."
                            v-model.trim="about"
                    >
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">{{ $store.getters.locale === 'ru' ? 'от и до (лет)' : 'from and to (ages)' }}</span>
                    </div>
                    <input
                            type="number"
                            class="form-control"
                            id="audfrom"
                            v-model.trim="audfrom"
                    >
                    <input
                            type="number"
                            class="form-control"
                            id="audto"
                            v-model.trim="audto"
                    >
                </div>
                <div class="form-group">
                    <label for="name"><strong>Instagram</strong></label>
                    <input
                            type="text"
                            class="form-control"
                            id="insta"
                            placeholder="https://www.instagram.com/user/"
                            v-model.trim="insta"
                    >
                </div>
                <div class="form-group">
                    <label for="name"><strong>YouTube</strong></label>
                    <input
                            type="text"
                            class="form-control"
                            id="youtube"
                            placeholder="https://www.youtube.com/user/username"
                            v-model.trim="youtube"
                    >
                </div>
                <div class="form-group">
                    <label for="selecttheme"><strong>Тема</strong></label>
                    <select class="form-control" id="selecttheme" v-model.trim="theme">
                        <option value="Спорт">Спорт</option>
                        <option value="Мода">Мода</option>
                    </select>
                </div>
            </div>
            <div class="btns">
                <button type="submit" class="btn btn-light btn-block">{{ $store.getters.locale === 'ru' ? 'Зарегистрирваться' : 'Register' }}</button>
                <router-link type="button" tag="button" class="btn btn-link btn-block text-dark" to="/enter">{{ $store.getters.locale === 'ru' ? 'Войти' : 'Enter' }}</router-link>
            </div>
        </form>
<!--        <div class="bottom-sep"></div>-->
    </div>
</template>

<script>
    import {required, email, sameAs, numeric} from 'vuelidate/lib/validators'

    export default {
        name: "Register",
        metaInfo: {
            title: 'Регистрация',
        },
        data: () => ({
            name: '',
            email: '',
            password: '',
            pconf: '',
            type: 'user',
            country: '',
            about: '',
            audfrom: 18,
            audto: 30,
            insta: '',
            youtube: '',
            theme: 'Спорт'
        }),
        methods: {
            async register() {
                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }
                const user = new Backendless.User()
                user.name = this.name
                user.email = this.email
                user.password = this.password
                user.type = this.type
                user.country = this.country
                user.about = this.about
                user.auditoryfrom = +this.audfrom
                user.auditoryto = +this.audto
                user.insta = this.insta
                user.youtube = this.youtube
                user.theme = this.theme
                await Backendless.UserService.register(user)
                await this.$router.push('/enter')
            }
        },
        validations: {
            name: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                required,
            },
            pconf: {
                sameAsPassword: sameAs('password')
            }
        }
    }
</script>

<style scoped>
    .gutters {
        margin: 0 15px;
    }
    input, select {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #dadada;
    }
    h2 {
        margin-top: 50px;
        margin-bottom: 50px;
        font-size: 34px;
    }
    .btns {
        margin-top: 50px;
        margin-bottom: 50px;
    }
</style>