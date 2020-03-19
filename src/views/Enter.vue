<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="arrow-back">
                    <router-link tag="a" class="d-block" to="/auth">
                        <img src="../assets/arrowback.png" alt="">
                    </router-link>
                </div>
                <div class="rect"></div>
                <div class="rect2"></div>
                <h2>{{ $store.getters.locale === 'ru' ? 'Вход' : 'Enter' }}</h2>
                <form @submit.prevent="login">
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
                            {{ $store.getters.locale === 'ru' ? 'Введите корректный e-mail' : 'Type a correct e-mail' }}
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
                    <div class="btns">
                        <button type="submit" class="btn btn-light btn-block">
                            {{ $store.getters.locale === 'ru' ? 'Войти' : 'Enter' }}
                        </button>
                        <router-link type="button" tag="button" to="/register" class="btn btn-link btn-block text-dark">
                            {{ $store.getters.locale === 'ru' ? 'Зарегистрироваться' : 'Register' }}
                        </router-link>
                    </div>
                </form>
                <!--        <div class="bottom-sep"></div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import {required, email, sameAs} from 'vuelidate/lib/validators'

    export default {
        name: "Enter",
        metaInfo: {
            title: 'Войти',
        },
        data: () => ({
            email: '',
            password: '',
        }),
        methods: {
            async login() {
                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }
                try {
                    await Backendless.UserService.login(this.email, this.password, true)
                } catch (e) {
                    alert($store.getters.locale === 'ru' ? 'Введен неверный email или пароль' : 'Incorrect email or password')
                }
                await this.$router.push('/')
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required,
            },
        }
    }
</script>

<style scoped>
    input {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #dadada;
    }
    h2 {
        margin-top: 30px;
        margin-bottom: 50px;
        font-size: 34px;
    }
    .btns {
        margin-top: 50px;
    }
</style>