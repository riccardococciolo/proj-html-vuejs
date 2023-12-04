<script>
export default {
    props: {
        sections: Array,
    }
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
    <div>
        <div class="container">
            <div class="link position-relative">
                <ul class="d-flex gap-4 py-4 px-0">
                    <li v-for="(section) in sections"><a href="">{{ section }}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.logo {
    width: 150px;
}

.link {
    ul {
        &::after {
            content: '';
            position: absolute;
            top: 0;
            right: -120px;
            width: 100vw;
            height: 100%;
            border-top: 5px solid $background-grey;
            border-bottom: 5px solid $background-grey;
            z-index: -1;
        }

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
</style>