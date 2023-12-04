<script>
import FeaturedCard from './FeaturedCard.vue';
import { store } from '../store'

export default {
    props: {
        sections: Array,
    },
    components: { FeaturedCard },
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
            <div class="link position-relative">
                <ul class="d-flex justify-content-start flex-row gap-4 py-4 px-0">
                    <li v-for="(section) in sections"><a href="">{{ section }}</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="wrapper">
        <div class="container">
            <div class="row row-cols-3 g-4 py-4">
                <div v-for="(featuredPost, index) in store.featured" :key="index" class="col-4">
                    <FeaturedCard :img="featuredPost.img" :description="featuredPost.description" :badges="featuredPost.badges"/>
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

.wrapper {
    background-color: $background-grey;
}
</style>