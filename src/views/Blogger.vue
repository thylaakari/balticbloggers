<template>
    <div class="d-flex flex-column align-self-center">
        <div class="avatar">
            <div class="img-c">
                <img src="../assets/girl.png" alt="">
            </div>
            <h2 class="display-4">Ирина Блогер</h2>
            <h3>Россия</h3>
        </div>
        <div class="big-name">BLOG</div>
        <div class="blog gutters">
            <h5>Обо мне</h5>
            <p class="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minima omnis porro reprehenderit. Eius error illo itaque magnam nesciunt, voluptates!</p>
            <h5>Аудитория</h5>
            <p class="small">18-25 лет</p>
            <h5>Ссылки</h5>
            <div class="d-flex mb-4">
                <div class="d-flex align-items-center">
                    <a href="" class="d-block item">
                        <i class="fab fa-youtube you"></i>
                        <span>Youtube</span>
                    </a>
                    <a href="" class="d-block item">
                        <i class="fab fa-instagram insta"></i>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
            <button class="btn btn-light btn-block">Вернуться к списку</button>
<!--            <div class="bottom-sep"></div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Blogger",
        metaInfo: {
            title: 'Страница блогера'
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