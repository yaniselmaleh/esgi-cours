<template>
  <div class="message">
    <input name="message" v-on:change="setMessage" />
  </div>
</template>

<script>
export default {
  name: "InputMessage",
  props: {
    setMessage: Function
  }
};
</script>

<style scoped>
div.message {
  background-color: red;
}
</style>
