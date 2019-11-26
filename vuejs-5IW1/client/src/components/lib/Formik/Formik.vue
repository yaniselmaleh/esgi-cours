<template>
  <div>
    <slot :formik="form"></slot>
  </div>
</template>

<script>
export default {
  name: "Formik",
  props: {
    initialValues: {
      type: Object,
      default: () => ({})
    },
    onSubmit: Function
  },
  provide: function() {
    return {
      form: this.form
    };
  },
  computed: {
    form: function() {
        return {
          values: this.values,
          errors: this.errors,
          registerField: this.registerField,
          setFieldValue: this.setFieldValue
        };
    }
  },
  data: function() {
    return {
      values: this.initialValues,
      errors: [],
      fields: []
    };
  },
  methods: {
    registerField: function(fieldName) {
      this.fields = [...this.fields, fieldName];
      this.data = { [fieldName]: null, ...this.data };
    },
    setFieldValue: function(fieldName, fieldValue) {
      this.data = { ...this.data, [fieldName]: fieldValue };
    },
    setSubmitting: function(submitting) {
      this.isSubmitting = submitting;
    },
    setErrors: function(errors) {
      Object.keys(errors).forEach(
        fieldName =>
          this.fields.includes(fieldName) &&
          (this.errors[fieldName] = errors[fieldName])
      );
    },
    handleSubmit: function() {
      this.onSubmit(this.data, {
        setSubmitting: this.setSubmitting,
        setErrors: this.setErrors
      });
    }
  }
};
</script>

<style scoped>
</style>