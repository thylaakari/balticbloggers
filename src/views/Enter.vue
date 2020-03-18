<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="arrow-back">
                    <a href="" class="d-block">
                        <img src="../assets/arrowback.png" alt="">
                    </a>
                </div>
                <div class="rect"></div>
                <div class="rect2"></div>
                <h2>Вход</h2>
                <form>
                    <div class="form-group">
                        <label for="email"><strong>Email</strong></label>
                        <input type="email" class="form-control" id="email" placeholder="example@gmail.com">
                    </div>
                    <div class="form-group">
                        <label for="password"><strong>Пароль</strong></label>
                        <input type="password" class="form-control" id="password" placeholder="**********">
                        <a href="" class="text-muted"><small class="form-text">Забыли пароль?</small></a>
                    </div>
                    <div class="btns">
                        <button type="button" class="btn btn-light btn-block">Войти</button>
                        <button type="button" class="btn btn-link btn-block text-dark">Зарегистрироваться</button>
                    </div>
                </form>
                <!--        <div class="bottom-sep"></div>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Enter",
        metaInfo: {
            title: 'Войти',
        },
    }
</script>

<style scoped>
    input {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #dadada;
    }
    h2 {
        margin-top: 70px;
        margin-bottom: 50px;
        font-size: 34px;
    }
    .btns {
        margin-top: 50px;
    }
</style>