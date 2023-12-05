<script>
import FeaturedCard from './FeaturedCard.vue';
import { store } from '../store'
import SmallCard from './SmallCard.vue';
import Button from './Button.vue';

export default {
    props: {
        sections: Array,
    },
    components: { FeaturedCard, SmallCard, Button },
    data() {
        return {
            store,
        }
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
</style>