<template>
    <div class="d-flex flex-column align-self-center gutters">
        <div class="d-flex justify-content-between">
            <router-link tag="i" class="fas fa-bars purple" to="/menu"></router-link>
        </div>
        <h2 class="display-4">Фильтры</h2>
        <div class="filters">
            <div class="filter ml">
                <h3>Страна</h3>
                <div class="form-group">
                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">Выбрано стран: {{values.length}}</span></template>
                    <multiselect
                            v-model="country"
                            :options="countries"
                            :multiple="true"
                            :close-on-select="false"
                            :clear-on-select="false"
                            :preserve-search="true"
                            placeholder="Страна"
                            label="name"
                            track-by="name"
                            :preselect-first="true"
                    >

                    </multiselect>
                </div>
            </div>
            <div class="filter ml">
                <h3>Тематика</h3>
                <div class="form-group">
                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">Выбрано тем: {{values.length}}</span></template>
                    <multiselect
                            v-model="theme"
                            :options="themes"
                            :multiple="true"
                            :close-on-select="false"
                            :clear-on-select="false"
                            :preserve-search="true"
                            placeholder="Тема"
                            label="name"
                            track-by="name"
                            :preselect-first="true"
                    >

                    </multiselect>
                </div>
            </div>
            <div class="filter ml">
                <h3>Возраст аудитории</h3>
                <vue-range-slider :bg-style="bgStyle" :tooltip-style="tooltipStyle" :process-style="processStyle" v-model="ages"></vue-range-slider>
            </div>
            <div class="filter ml">
                <h3>Социальная сеть</h3>
                <div class="form-group">
                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">Выбрано стран: {{values.length}}</span></template>
                    <multiselect
                            v-model="soc"
                            :options="socs"
                            :multiple="true"
                            :close-on-select="false"
                            :clear-on-select="false"
                            :preserve-search="true"
                            placeholder="Социальная сеть"
                            label="name"
                            track-by="name"
                            :preselect-first="true"
                    >

                    </multiselect>
                </div>
            </div>
        </div>
        <button class="btn btn-light btn-block" @click="submit">Применить</button>
    </div>
</template>

<script>
    import 'vue-range-component/dist/vue-range-slider.css'
    import 'vue-multiselect/dist/vue-multiselect.min.css'
    import VueRangeSlider from 'vue-range-component'
    import Multiselect from 'vue-multiselect'
    import Search from "./Search";

    export default {
        name: 'Home',
        metaInfo: {
            title: 'Главная',
        },
        data: () => ({
            ages: [12, 70],
            country: [],
            theme: [],
            countries: [
                 {name: 'Эстония'},
                 {name: 'Финляндия'},
            ],
            themes: [
                {name: 'Спорт'},
                {name: 'Мода'},
            ],
            soc: [],
            socs: [
                {name: 'Youtube'},
                {name: 'Instagram'},
            ],
        }),
        methods: {
            async submit() {
                let countryquery = ''
                let themequery = ''
                let socquery = ''
                let aud = ''
                if (this.country.length !== 0) {
                    if (this.country.length === 1) {
                        countryquery = ` country = '${this.country[0].name}'`
                    }
                    else {
                        countryquery += ' country IN ('
                        for (let i = 0; i < this.country.length; i++) {
                            countryquery += `'${this.country[i].name}', `
                        }
                        countryquery = countryquery.substr(0, countryquery.length - 2)
                        countryquery += ')'
                    }
                }

                if (this.theme.length !== 0) {
                    if (countryquery !== '') {
                        themequery += ' and'
                    }
                    if (this.theme.length === 1) {
                        themequery += ` theme = '${this.theme[0].name}'`
                    }
                    else {
                        themequery += ' theme IN ('
                        for (let i = 0; i < this.theme.length; i++) {
                            themequery += `'${this.theme[i].name}', `
                        }
                        themequery = themequery.substr(0, themequery.length - 2)
                        themequery += ')'
                    }
                }

                if (this.soc.length !== 0) {
                    if (countryquery !== '' || themequery !== '') {
                        socquery += ' and'
                    }
                    if (this.soc.length === 1) {
                        socquery += ` soc = '${this.soc[0].name}'`
                    }
                    else {
                        socquery += ' soc IN ('
                        for (let i = 0; i < this.soc.length; i++) {
                            socquery += `'${this.soc[i].name}', `
                        }
                        socquery = socquery.substr(0, socquery.length - 2)
                        socquery += ')'
                    }
                }

                if (countryquery !== '' || themequery !== '' || socquery !== '') {
                    aud += ' and'
                }
                aud += ` auditoryfrom >= ${this.ages[0]} and auditoryto >= ${this.ages[1]}`

                const where = countryquery + themequery + socquery + aud

                const props = {
                    where,
                    country: this.country,
                    theme: this.theme,
                    soc: this.soc,
                    ages: this.ages
                }
                this.$router.push({
                    path: '/search',
                    query: {
                        filter: where
                    },
                    props: props,
                    component: Search
                })
            }
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
            VueRangeSlider, Multiselect
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
