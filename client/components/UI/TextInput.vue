<template>
  <div class="form-control">
    <label v-if="label">{{ label }}</label>
    <input 
      :value="value"
      @input="$emit('input', $event.target.value)" 
      :placeholder="placeholder" 
      :type="type"
    />
  </div>
</template>

<script>
export default {
  props: {
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
    }
  }
};
</script>

<style>
</style>