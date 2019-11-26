<template>
  <Formik :onSubmit="onSubmit" v-slot="formik">
    <div class="grid-row">
      <label for="title">Title:</label>
      <Field name="name" />
    </div>
    <div class="grid-row">
      <label for="description">Description:</label>
      <Field name="description" component="textarea" />
    </div>
    <div class="grid-row">
      <label for="velocity">Velocity:</label>
      <Field name="velocity" />
    </div>
    <div class="grid-row">
      <Field :component="$options.components.RadioGroup"
        name="status"
        label="Status"
        :choices="[{id: 'new', text: 'New'}, {id: 'done', text: 'Done'}]"
      />
    </div>
    <a v-on:click.prevent="checkFormik(formik)">Submit</a>
  </Formik>
</template>

<script>
import Formik from "./lib/Formik/Formik";
import Field from "./lib/Formik/Field";
import RadioGroup from "./lib/RadioGroup";

export default {
  name: "NewCard",
  components: {
    Formik,
    Field,
    RadioGroup
  },
  data: () => ({
    name: "",
    description: "",
    velocity: 0,
    status: "new"
  }),
  methods: {
    checkFormik: (data) => () => console.log(data),
    onSubmit: function(values, extras) {
      console.log(values, extras);
      this.$emit("new-card", { ...values });
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