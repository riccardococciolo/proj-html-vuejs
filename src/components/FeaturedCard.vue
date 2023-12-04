<script>
export default {
    props: {
        img: String,
        description: String,
        badges: String,
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
            <div class="overlay"></div>
            <img :src="getImgPath(img)" class="card-img w-100 object-fit-cover" alt="...">
            <div class="card-img-overlay z-3 d-flex gap-2">
                <span class="badge rounded-pill text-bg-primary">{{ badges }}</span>
                <h5 class="card-title">{{ description }}</h5>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.card-img-overlay {
    top: 130px;
    left: 0;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
</style>