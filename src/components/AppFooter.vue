<script>
export default {
    data() {
        return {
            imgs: ["our-office-4-square.jpg", "our-office-5-square.jpg"],
            categories: ["GADGETS", "PHOTOGRAPHY", "LIFESTYLE", "FASHION", "RECIPES", "TRAVEL", "BUSINESS", "ARCHITECTURE", "REVIEWS", "SPORTS", "VIDEOS", "TECHNOLOGY", "DESIGN",],
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
    <div class="wrapper-top py-2 text-white">
        <div class="container py-5">
            <div class="row row-cols-4 g-5">
                <div class="col">
                    <span class="fw-bold">ABOUT THE BLOG</span>
                    <p class="text-grey pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p class="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <span class="fw-bold">VIEW MORE <i class="fa-solid fa-chevron-right text-sm align-middle"></i></span>
                </div>
                <div class="col">
                    <span class="fw-bold">RECENT POSTS</span>
                    <div v-for="(img) in imgs" class="row pt-3">
                        <div class=" col-3">
                            <img :src="getImgPath(img)" class="img-thumbnail p-0 border-0 rounded-circle" alt="">
                        </div>
                        <div class="d-flex flex-wrap align-items-start p-0 gap-2 ps-1 col-9">
                            <h6 class="w-100 m-0 text-grey">Lorem ipsum dolor, sit amet consectetur adipisicing elit</h6>
                            <p class="text-grey text-sm">12:53 AM DEC 19th</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <span class="fw-bold d-inline-block pb-2">RECENT COMMENTS</span>
                    <div v-for="(num) in 2" class="pt-2">
                        <p class="text-grey m-0"><span class="text-blue">></span> <span class="text-white">John Doe</span> commented on <span class="text-blue">lorem ipsum dolor sit amet.</span></p>
                        <p class="text-grey text-sm pt-1">12:55 AM DEC 19th</p>
                    </div>
                </div>
                <div class="col">
                    <span class="fw-bold">CATEGORIES</span>
                    <div class="pt-2">
                        <span v-for="(category) in categories" class="badge bg-black badge-sm me-2">{{ category }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper-bottom py-4">
        <div class="container-sm d-flex justify-content-between align-items-center">
            <div>
                <img src="../assets/img/logo-footer.png" alt="" class="">
                <span class="text-grey d-inline-block ps-5"><i class="fa-regular fa-copyright"></i> Copyright 2020. All Rights Reserved</span>
            </div>
            <div class="text-grey">
                <span class="pe-3">> FAQ's</span>
                <span class="pe-3">> Sitemap</span>
                <span class="pe-3">> Contact Us</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.wrapper-top {
    background-color: $footer-background-primary;
}

.text-grey {
    color: $text-grey;
    font-size: smaller;
}

.text-sm {
    font-size: .6rem;
    color: rgb(92, 92, 92);
}
.text-blue {
    color: $primary-color;
}

.container {
    position: relative;
    &::after {
        content: "get in touch";
        padding: .5rem .8rem;
        background-color: $primary-color;
        position: absolute;
        top: -25px;
        left: 10;
        font-style: oblique;
    }
}

.wrapper-bottom {
    background-color: $footer-background-secondary;
}

.container-sm {
    img {
        height: 40px;
        filter: brightness(0.5);
    }
}
</style>