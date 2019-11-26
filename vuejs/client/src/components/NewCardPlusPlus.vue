<template>
  <Modal v-bind:onClose="onCancel">
    <template slot="title">New Card</template>
    <template slot="default">
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
      <RadioGroup
        v-bind:choices="[{id: 'new', text:'New'}, {id: 'done', text: 'Done'}]"
        label="Status:"
        inline
        v-model="status"
      />
    </template>
    <template slot="footer">
      <a @click="handleSubmit">Submit</a>
    </template>
  </Modal>
</template>

<script>
import RadioGroup from "./lib/RadioGroup";
import Modal from "./lib/Modal";

export default {
  name: "NewCard",
  components: {
    RadioGroup,
    Modal
  },
  props: {
    onCancel: Function
  },
  data: () => ({
    name: null,
    description: null,
    velocity: 0,
    status: "new"
  }),
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
