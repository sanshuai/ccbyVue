<template>
  <div id="app">
    <router-view/>
    <v-tab-nav></v-tab-nav>
  </div>
</template>

<script>
import tab from "./components/tabNav"
export default {
  name: 'App',
  data(){
    return{}
  },
components:{
"v-tab-nav":tab
}
}
</script>

<style>
@import "style/base.css";
</style>
