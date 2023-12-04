<script>
export default {

}
</script>

<template>
        <nav class="navbar">
            <div class="container justify-content-start gap-3 fs-6">
                <span class="navbar-text text-white">
                    Everything about Lifestyle, Travel and Gadgets! 
                </span>
                <span class="navbar-text text-white">
                    <a href="">SIGN IN</a>
                </span>
                <span class="navbar-text text-white">
                    <a href="">ABOUT US</a>
                </span>
                <span class="navbar-text text-white">
                    <a href="">CONTACT US</a>
                </span>
                <span class="navbar-text text-white">
                    <a href="">BUY NOW</a>
                </span>
            </div>
        </nav>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

nav {
    background-color: $primary-color;
    a {
        text-decoration: none;
        color: inherit;
    }
}
</style>