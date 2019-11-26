<template>
  <div class="radio-group">
    <label>{{label}}</label>
    <div v-bind:class="{'grid-row': inline, 'grid-column': !inline}">
      <label :key="choice.id" :for="choice.id" v-for="choice in choices">
        {{choice.text}}
        <input
          type="radio"
          v-bind:id="choice.id"
          v-bind:checked="choice.id === value"
          v-bind:value="choice.id"
          v-on:change="$emit('input', $event.target.value)"
        />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioGroup",
  props: {
    choices: Array,
    label: String,
    value: String,
    inline: {
      type: Boolean,
      default: () => false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.grid-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
