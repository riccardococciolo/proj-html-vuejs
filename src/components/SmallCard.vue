<script>
export default {
    props: {
        img: String,
        title: String,
        date: String,
        colImg: String,
        colText: String,
    },
    data() {
        return {

        }
    },
    methods: {
        getImgPath(img) {
            return new URL(`../assets/img/${img}`, import.meta.url).href
        },
    },
}
</script>

<template>
    <div>
        <div class="row py-2">
            <div :class="colImg">
                <img :src="getImgPath(img)" class="w-100" alt="">
            </div>
            <div class="d-flex flex-wrap align-items-start p-0" :class="colText">
                <h6 class="w-100 m-0">{{ title }}</h6>
                <p class="text-grey">{{ date }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
.text-grey {
    color: $text-grey;
    font-size: smaller;
}
    
</style>