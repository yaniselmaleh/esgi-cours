<template>
  <div id="app">
    <router-link to="/">Board</router-link>
    <router-link to="/list/1">List 1</router-link>
    <router-link :to="{name: 'listHome', params: {listid: 2}}">List 2</router-link>
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import Board from "./components/Board";

export default {
  name: "app",
  components: {
    Board
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
