<template>
  <div class="modal">
    <a class="backdrop" @click="handleClose" />
    <div class="modal-container">
      <div class="modal-title">
        <slot name="title">
          <h1>{{title}}</h1>
        </slot>
        <a class="close-button" @click="handleClose">X</a>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          <a @click="handleClose">Cancel</a>
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
    title: String,
    onClose: Function,
    onSubmit: Function
  },
  methods: {
    handleClose: function() {
      console.log("this", this.onClose);
      this.onClose();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal > .backdrop {
  background-color: black;
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal > .modal-container {
  background-color: aliceblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  min-width: 40%;
  max-width: 80%;
  min-height: 25%;
  max-height: 75%;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.modal-container > .modal-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  align-items: center;
  height: 30px;
  margin-top: 10px;
  border-top: 1px solid black;
}
</style>
