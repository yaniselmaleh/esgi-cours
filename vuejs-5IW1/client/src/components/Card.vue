<template>
  <div class="card" draggable @dragstart="onDrag">
    <h1>{{name}}</h1>
    <p v-if="status === 'done'">done if</p>
    <p v-show="status === 'done'">done show</p>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "Card",
  props: {
    name: String,
    status: String,
    onDrag: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 80%;
  margin: 0 auto;
  background-color: pink;
}
.card:not(:first-child) {
  margin-top: 10px;
}
</style>
