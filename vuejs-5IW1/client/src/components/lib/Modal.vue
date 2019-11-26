<template>
  <div class="modal" v-if="open">
    <div class="backdrop" @click="onClose" />
    <div class="modal-container">
      <div class="modal-header">
        <h1>{{title}}</h1>
        <a @click="onClose">X</a>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          <a @click="onClose">Cancel</a>
          <a @click="onSubmit">Submit</a>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    open: Boolean,
    onClose: Function,
    onSubmit: Function,
    title: String
  }
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  max-height: 100%;
  min-width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal > .backdrop {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
}

.modal > .modal-container {
  background-color: whitesmoke;
  min-height: 25%;
  max-height: 75%;
  min-width: 40%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  z-index: 1;
}

.modal-container > .modal-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
}

.modal-container > .modal-content {
  flex: 1;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.modal-container > .modal-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  margin-top: 10px;
  border-top: 1px solid black;
}
</style>