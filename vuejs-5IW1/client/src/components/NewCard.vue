<template>
  <div>
    <div class="grid-row">
      <label for="title">Title:</label>
      <input id="title" v-model="name" />
    </div>
    <div class="grid-row">
      <label for="description">Description:</label>
      <textarea id="description" v-model="description" />
    </div>
    <div class="grid-row">
      <label for="velocity">Velocity:</label>
      <input id="velocity" v-model.number="velocity" />
    </div>
    <div class="grid-row">
      <label>Status:</label>
      <label>
        New
        <input type="radio" v-model="status" name="status" value="new" />
      </label>
      <label>
        Done
        <input type="radio" v-model="status" name="status" value="done" />
      </label>
    </div>
    <a v-on:click.prevent="handleSubmit">Submit</a>
  </div>
</template>

<script>
export default {
  name: "NewCard",
  data: () => ({
    name: "",
    description: "",
    velocity: 0,
    status: "new"
  }),
  methods: {
    handleSubmit: function() {
      console.log(this.$data);
      this.$emit("new-card", { ...this.$data });
    }
  }
};
</script>

<style scoped>
.grid-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

label {
  color: white;
}
</style>