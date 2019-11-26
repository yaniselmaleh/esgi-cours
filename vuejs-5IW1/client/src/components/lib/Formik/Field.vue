<template>
  <component :form="form" :field="field" :is="component" v-bind="$attrs"/>
</template>

<script>
export default {
  name: "Field",
  props: {
    component: {type: [Object, String], default: () => 'input'},
    name: String
  },
  render: function(createElement) {
    const props = {...this.$attrs};
    const on = {};

    if (typeof this.component === "object") {
        props.field= this.field;
        props.form =  this.form;
    } else {
      props.value = this.field.value;
      on.input = (event) => console.log(event) || this.onChange(event.currentTarget.value);
    }

    return createElement(this.component, {
      props,
      on
    }, this.$slots.default);
  },
  inject: ["form"],
  created: function() {
    this.form.registerField(this.name);
    console.log(this);
  },
  computed: {
    field: function() {
      return {
        onChange: this.onChange,
        value: this.form.values[this.name]
      }
    }
  },
  methods: {
    onChange: function(value) {
      this.form.setFieldValue(this.name, value);
    }
  }
};
</script>

<style scoped>
</style>