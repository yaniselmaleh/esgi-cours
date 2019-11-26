<template>
  <div>
    <label>{{label}}:</label>
    <label v-for="choice in choices" :key="choice.id">
      {{choice.text}}
      <input
        type="radio"
        :name="name"
        :checked="value === choice.id"
        :value="choice.id"
        @change="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioGroup",
  props: {
    value: String,
    label: String,
    choices: Array,
    name: String
  }
};
</script>
<style scoped>
</style>