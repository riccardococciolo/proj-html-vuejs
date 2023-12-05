<script>
export default {
    props: {
        img: String,
        description: String,
        badges: String,
        // height: String,
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
        <div class="card text-bg-dark position-relative rounded-0 border-0">
            <div class="overlay w-100 h-100 position-absolute"></div>
            <img :src="getImgPath(img)" class="card-img" alt="...">
            <div class="z-3 d-flex flex-column align-items-start gap-1 position-absolute start-0 bottom-0 px-4 py-2" >
                <span class="badge rounded-pill text-bg-primary">{{ badges }}</span>
                <h5 class="card-title w-100">{{ description }}</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.card {
    &:hover {
        scale: 0.98;
    }
}

.overlay {
    background-color: rgba(0, 0, 0, 0.3);

}
</style>