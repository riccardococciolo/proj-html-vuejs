<script>
import FeaturedCard from './FeaturedCard.vue';
import { store } from '../store'
import SmallCard from './SmallCard.vue';
import Button from './Button.vue';
import PostCard from './PostCard.vue';

export default {
    props: {
        sections: Array,
    },
    components: { FeaturedCard, SmallCard, Button, PostCard },
    data() {
        return {
            store,
            mosaicImg: ["29739607_2020680068220520_4509928046932787200_n.jpg", "30087804_253872848488989_8792603541668626432_n.jpg", "29415620_196477127626244_3250318472361541632_n.jpg", "30078414_1274410412703843_8290935809419247616_n.jpg", "30077195_2066750973610181_3733150062893596672_n.jpg", "29415304_166583630713703_1032667922171953152_n.jpg"],
            tags: ["DESIGN", "BRANDS", "VIDEO", "BUSINESS", "TRAVEL",]
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
        <div class="container">
            <div class="py-4">
                <img src="../assets/img/logo-default-slim.png" alt="" class="logo">
            </div>
        </div>
    </div>
    <div class="border-y">
        <div class="container">
            <div class="link d-flex justify-content-between align-items-center">
                <ul class="d-flex justify-content-start flex-row gap-4 px-0 py-3">
                    <li v-for="(section) in sections"><a href="">{{ section }}</a></li>
                </ul>
                <span class="mt-0"><i class="fa-solid fa-magnifying-glass fa-bounce"></i></span>
            </div>
        </div>
    </div>
    <div class="wrapper-grey pb-4">
        <div class="container">
            <div class="row row-cols-3 py-4 row-gap-4">
                <div v-for="(featuredPost, index) in store.featured" :key="index" class="col-4">
                    <FeaturedCard :img="featuredPost.img" :description="featuredPost.description" :badges="featuredPost.badges"/>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="container py-5">
            <div class="row row-cols-3">
                <div class="col">
                    <div class="">
                        <h6 class="fw-bold mb-2">POPULAR POSTS</h6>
                        <SmallCard v-for="(popularPost) in store.popularPosts" :img="popularPost.img" :title="popularPost.title" :date="popularPost.date" :col-img="'col-2'" :col-text="'col-10'" />
                    </div>
                </div>
                <div class="col">
                    <div>
                        <h6 class="fw-bold mb-2">RECENT POSTS</h6>
                        <SmallCard v-for="(recentPost) in store.recentPosts" :img="recentPost.img" :title="recentPost.title" :date="recentPost.date" :col-img="'col-2'" :col-text="'col-10'" />
                    </div>
                </div>
                <div class="col">
                    <h6 class="fw-bold mb-5">FEATURED POSTS</h6>
                    <FeaturedCard :img="'blog-66.jpg'" :description="'Tips to Help You Quickly Prepare your Lunch'" :badges="'recipes'" />
                    <h6 class="fw-bold mt-4 mb-2">FEATURED AUTHOR</h6>
                    <SmallCard :img="'avatar.jpg'" :title="'John Doe'" :date="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ratione deserunt iure accusamus tenetur distinctio.'" :col-img="'col-3'" :col-text="'col-9'" />
                </div>
            </div>
        </div>
    </div>
    <div class="wrapper-blue py-4">
        <div class="container py-2">
            <div class="d-flex justify-content-between gap-3 align-items-center">
                <span class="fs-6"><i class="fa-solid fa-chevron-left fa-fade"></i></span>
                <Button v-for="(category) in store.categories" :text="category" />
                <span class="fs-6"><i class="fa-solid fa-chevron-right fa-fade"></i></span>
            </div>
        </div>
    </div>
    <div>
        <div class="container py-5">
            <div class="row">
                <div class="col-9">
                    <PostCard v-for="(post) in store.posts" :img="post.img" :title="post.title" :category="post.category" />
                </div>
                <div class="col-3">
                    <h6 class="pt-4">LATEST FROM TWITTER</h6>
                    <div class="d-flex gap-2 py-3">
                        <span><i class="fa-brands fa-twitter"></i></span>
                        <div>
                            <p class="text-grey m-0">If you have any suggestions for the next updates, let us know.</p>
                            <span class="text-blue text-sm">01:05 PM Sep 18th</span>
                        </div>
                    </div>
                    <div class="d-flex gap-2">
                        <span><i class="fa-brands fa-twitter"></i></span>
                        <div>
                            <p class="text-grey m-0">We have just updated Porto Admin. Check the changelog for more information.</p>
                            <span class="text-blue text-sm">01:04 PM Sep 18th</span>
                        </div>
                    </div>
                    <h6 class="pt-5">PHOTOS FROM INSTAGRAM</h6>
                    <div class="row row-cols-3 ps-3 py-2">
                        <div v-for="(img) in mosaicImg" class="col p-0">
                            <img class="object-fit-contain w-100" :src="getImgPath(img)" alt="">
                        </div>
                    </div>
                    <h6 class="py-3">TAGS</h6>
                    <div class="pb-5">
                        <span v-for="(tag) in tags" class="badge rounded-pill text-bg-dark badge-sm me-2">{{ tag }}</span>
                    </div>
                    <h6 class="pt-4">FIND US ON FACEBOOK</h6>
                    <div class="mt-4">
                        <span class="text-blue p-3 border-start border-4">Okler Themes</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.logo {
    width: 150px;
}

.border-y {
    border-top: 4px solid $background-grey;
    border-bottom: 4px solid $background-grey;
}
.link {
    ul {
        margin: 0;
        li {
            list-style-type: none;

            :hover {
                color: $logo-blue;
            }
        }

        a {
            text-decoration: none;
            color: inherit;
        }
    }
}

.wrapper-grey {
    background-color: $background-grey;
}

.wrapper-blue {
    background-color: $primary-color;
}
.text-grey {
    color: $text-grey;
    font-size: smaller;
}

.text-blue {
    color: $primary-color;
}

.text-sm {
    font-size: .8rem;
}
</style>