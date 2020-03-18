<template>
    <div class="d-flex flex-column align-self-center gutters">
        <div class="arrow-back">
            <a href="" class="d-block">
                <img src="../assets/arrowback.png" alt="">
            </a>
        </div>
        <div class="rect"></div>
        <div class="rect2"></div>
        <h2>Регистрация</h2>
        <form>
            <div class="form-group">
                <label for="name"><strong>Имя</strong></label>
                <input type="text" class="form-control" id="name" placeholder="Блогер Иван">
            </div>
            <div class="form-group">
                <label for="email"><strong>Email</strong></label>
                <input type="email" class="form-control" id="email" placeholder="example@gmail.com">
            </div>
            <div class="form-group">
                <label for="password"><strong>Пароль</strong></label>
                <input type="password" class="form-control" id="password" placeholder="**********">
            </div>
            <div class="form-group">
                <label for="passconf"><strong>Подтвердите пароль</strong></label>
                <input type="password" class="form-control" id="passconf" placeholder="**********">
            </div>
            <div class="form-group">
                <label for="select"><strong>Тип учетной записи</strong></label>
                <select class="form-control" id="select">
                    <option>Пользователь</option>
                    <option>Блогер</option>
                </select>
            </div>
            <div class="btns">
                <button type="button" class="btn btn-light btn-block">Зарегистрироваться</button>
                <button type="button" class="btn btn-link btn-block text-dark">Войти</button>
            </div>
        </form>
<!--        <div class="bottom-sep"></div>-->
    </div>
</template>

<script>
    export default {
        name: "Register",
        metaInfo: {
            title: 'Регистрация',
        },
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