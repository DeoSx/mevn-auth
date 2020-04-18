<template>
  <div class="form-control">
    <label v-if="label">{{ label }}</label>
    <input 
      :value="value"
      @input="$emit('input', $event.target.value)" 
      :placeholder="placeholder" 
      :type="type"
      :name="name"
      @change="$emit('input', $event.target.value)"
      @blur="$emit('blue')"
      @focus="$emit('focus')"
    />
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    label: {
      type: String,
      required: false
    },
    error: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
small {
  color: red;
}
</style>