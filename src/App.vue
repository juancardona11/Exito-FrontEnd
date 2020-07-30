<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
export default {
  name: "App",
  components: {
  }
};

</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align left
  color #2c3e50
  margin-top 60px
</style>
