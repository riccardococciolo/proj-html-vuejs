<script>
export default {
    props: {
        img: String,
        title: String,
        category: String,
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
        <div class="row py-4">
            <div class="col-12">
                <img :src="getImgPath(img)" class="w-100" alt="">
            </div>
            <div class="col mt-3">
                <div class="py-2 w-50 calendar text-center">
                    <span class="fw-bold">12</span>
                </div>
                <div class=" w-50 bg-dark text-white text-center d-flex justify-content-center ">
                    <span class="text-sm">JAN</span>
                </div>
            </div>
            <div class="col-11 d-flex flex-column align-items-start justify-content-between p-0 mt-3" :class="colText">
                <h4 class="w-100 m-0">{{ title }}</h4>
                <p class="text-grey pt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum enim quod non consequatur doloremque cum ratione earum eaque culpa corrupti molestiae, cumque repellendus accusantium iusto aut doloribus esse quaerat quae!</p>
                <div class="d-flex justify-content-between align-items-center text-grey w-100">
                    <div>
                        <span class="pe-2"><i class="fa-regular fa-user"></i> By <span class="text-blue">John Doe</span></span>
                        <span class="pe-2"><i class="fa-regular fa-folder"></i> <span class="text-blue">{{ category }}</span></span>
                        <span class="pe-2"><i class="fa-regular fa-comments"></i> <span class="text-blue">12 Comments</span></span>
                    </div>
                    <div>
                        <button type="button" class="btn btn-sm btn-outline-secondary">READ MORE</button>
                    </div>
                </div>
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

.text-blue {
    color: $primary-color;
}

.calendar {
    background-color: $background-grey;
}

.text-sm {
    font-size: .6rem;
}
    
</style>