<template>
    <div class="d-flex flex-column align-self-center gutters">
        <div class="d-flex justify-content-between">
            <i class="fas fa-bars purple"></i>
            <i class="fas fa-filter"></i>
        </div>
        <h2 class="display-4">Baltic Bloggers Base</h2>
        <div class="chips">
            <div class="chip">
                <i class="fas fa-check text-success"></i> Youtube
            </div>
            <div class="chip">
                <i class="fas fa-check text-success"></i> Россия
            </div>
        </div>
        <a href="" class="resetf">Сбросить фильтры</a>
        <div class="bloggers">
            <div class="blogger">
                <img src="../assets/girl.png" alt="">
                <p>Имя блогера</p>
            </div>
            <div class="blogger">
                <img src="../assets/girl.png" alt="">
                <p>Имя блогера</p>
            </div>
            <div class="blogger">
                <img src="../assets/girl.png" alt="">
                <p>Имя блогера</p>
            </div>
            <div class="blogger">
                <img src="../assets/girl.png" alt="">
                <p>Имя блогера</p>
            </div>
            <div class="blogger">
                <img src="../assets/girl.png" alt="">
                <p>Имя блогера</p>
            </div>
            <div class="blogger">
                <img src="../assets/girl.png" alt="">
                <p>Имя блогера</p>
            </div>
            <div class="blogger">
                <img src="../assets/girl.png" alt="">
                <p>Имя блогера</p>
            </div>
        </div>
        <button class="btn btn-light btn-block">Показать всех</button>
    </div>
</template>

<script>

export default {
    name: 'Home',
    metaInfo: {
      title: 'Главная',
    },
    data: () => ({

    }),
    methods: {

    }
}
</script>

<style scoped>
    h5 {
        font-size: .9rem;
        color: #c8c6c6;
    }
    .blogger {
        display: flex;
        align-items: center;
        margin: 20px 0;
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
        font-size: .7rem;
        text-align: center;
    }
    .chips i {
        font-size: .7rem;
    }
    .chip {
        margin-right: 20px;
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
