<script>
export default {
    props: {
        text: String,
    },
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="my-button py-2 px-5">
        <span>{{ text }}</span>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.my-button {
    background-color: $text-black;
    color: white;
    &:hover {
        scale: .97;
    }
}
</style>