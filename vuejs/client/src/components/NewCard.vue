<template>
  <div>
    <div class="grid-row">
      <label for="title">Title:</label>
      <input id="title" v-model="title" />
    </div>
    <div class="grid-row">
      <label for="description">Description:</label>
      <textarea id="description" v-model="description" />
    </div>
    <div class="grid-row">
      <label for="velocity">Velocity:</label>
      <input id="velocity" v-model.number="velocity" />
    </div>
    <RadioGroup
      v-bind:choices="[{id: 'new', text:'New'}, {id: 'done', text: 'Done'}]"
      label="Status:"
      inline
      v-model="status"
    />
    <a @click="handleSubmit">Submit</a>
  </div>
</template>

<script>
import RadioGroup from "./lib/RadioGroup";
export default {
  name: "NewCard",
  components: {
    RadioGroup
  },
  data: () => ({
    title: null,
    description: null,
    velocity: 0,
    status: "new"
  }),
  props: {
    name: String,
    waiting: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    handleSubmit: function() {
      this.$emit("new-card", this.$data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gird-row {
  display: flex;
  align-items: center;
}
</style>
