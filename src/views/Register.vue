<template>
    <div class="d-flex flex-column align-self-center gutters">
        <div class="arrow-back">
            <router-link tag="a" class="d-block" to="/auth">
                <img src="../assets/arrowback.png" alt="">
            </router-link>
        </div>
        <div class="rect"></div>
        <div class="rect2"></div>
        <h2>Регистрация</h2>
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="name"><strong>Имя</strong></label>
                <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Блогер Иван"
                        v-model.trim="name"
                        :class="{
                                'is-invalid': ($v.name.$dirty && !$v.name.required),
                                'is-valid': ($v.name.$dirty && $v.name.required)
                            }"
                >
                <div class="invalid-feedback" v-if="$v.name.$dirty &&!$v.name.required">
                    Обязательное поле
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
                    Обязательное поле
                </div>
                <div class="invalid-feedback" v-if="$v.email.$dirty &&!$v.email.email">
                    Введите корректный e-mail
                </div>
            </div>
            <div class="form-group">
                <label for="password"><strong>Пароль</strong></label>
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
                    Обязательное поле
                </div>
            </div>
            <div class="form-group">
                <label for="passconf"><strong>Подтвердите пароль</strong></label>
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
                    Пароли должны совпадать
                </div>
            </div>
            <div class="form-group">
                <label for="select"><strong>Тип учетной записи</strong></label>
                <select class="form-control" id="select" v-model.trim="type">
                    <option value="user">Пользователь</option>
                    <option value="blogger">Блогер</option>
                </select>
            </div>
            <div class="btns">
                <button type="submit" class="btn btn-light btn-block">Зарегистрироваться</button>
                <router-link type="button" tag="button" class="btn btn-link btn-block text-dark" to="/enter">Войти</router-link>
            </div>
        </form>
<!--        <div class="bottom-sep"></div>-->
    </div>
</template>

<script>
    import {required, email, sameAs} from 'vuelidate/lib/validators'

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
            type: 'user'
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