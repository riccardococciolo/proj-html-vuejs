<script>

import { store } from './store'
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      store,
      sections: ["HOME", "ELEMENTS", "FEATURES", "PAGES", "PORTFOLIO", "BLOG", "SHOP"],
    }
  },
  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <AppMain :sections="sections"/>
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
