<template>
  <div class="card" draggable="true" v-on:dragstart="onDrag">
    <h1 class="card-name">{{name}}</h1>
    <p v-if="waiting">Waiting</p>
    <p v-show="waiting">Waiting</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    onDrag: Function,
    name: String,
    waiting: {
      type: Boolean,
      default: () => false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.card {
  width: 100%;
  background-color: violet;
  margin: 0 5px;
}
div.card:not(:first-child) {
  margin-top: 10px;
}

h1.card-name {
  color: white;
}
</style>
