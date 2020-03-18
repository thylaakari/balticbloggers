<template>
    <div class="d-flex flex-column align-self-center gutters">
        <div class="d-flex justify-content-between">
            <i class="fas fa-bars purple"></i>
        </div>
        <h2 class="display-4">Фильтры</h2>
        <div class="filters">
            <div class="filter ml">
                <h3>Страна</h3>
                <div class="form-group">
                    <select multiple class="form-control">
                        <option>Россия</option>
                        <option>Эстония</option>
                    </select>
                </div>
            </div>
            <div class="filter ml">
                <h3>Тематика</h3>
                <div class="form-group">
                    <select multiple class="form-control">
                        <option>Спорт</option>
                        <option>Мода</option>
                    </select>
                </div>
            </div>
            <div class="filter ml">
                <h3>Возраст аудитории</h3>
                <vue-range-slider :bg-style="bgStyle" :tooltip-style="tooltipStyle" :process-style="processStyle" v-model="value"></vue-range-slider>
            </div>
            <div class="filter ml">
                <h3>Социальная сеть</h3>
                <div class="form-group">
                    <select multiple class="form-control">
                        <option>Youtube</option>
                        <option>Instagram</option>
                    </select>
                </div>
            </div>
        </div>
        <button class="btn btn-light btn-block">Применить</button>
    </div>
</template>

<script>
    import 'vue-range-component/dist/vue-range-slider.css'
    import VueRangeSlider from 'vue-range-component'

    export default {
        name: 'Home',
        metaInfo: {
            title: 'Главная',
        },
        data: () => ({
            value: [12, 70]
        }),
        methods: {

        },
        created() {
            this.min = 12
            this.max = 70
            this.bgStyle = {
                backgroundColor: '#fff',
                boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
            }
            this.tooltipStyle = {
                backgroundColor: '#ed4e81',
                borderColor: '#3f53b2'
            }
            this.processStyle = {
                backgroundColor: '#ed4e81'
            }
        },
        components: {
            VueRangeSlider
        }
    }
</script>

<style scoped>
    .ml {
        margin-left: -15px;
        margin-right: -15px;
    }
    .filter h3 {
        color: #5e5e5e;
        font-size: 21px;
        font-weight: bold;
        text-align: center;
    }
    select {
        border: none;
        height: 120px!important;
    }
    option {
        padding: 15px 0;
    }
    .filter {
        background-color: #ffffff;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
    .form-group {
        margin: 0;
    }
    .display-4 {
        font-size: 25px;
        color: #333333;
    }
    h5 {
        font-size: .9rem;
        color: #c8c6c6;
    }
    .blogger {
        display: flex;
        align-items: center;
        margin: 20px 0;
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
