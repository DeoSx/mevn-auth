<template>
  <div>
    <button 
      :class="`button-${className}`" 
      :type="type"
      @click="$emit('click')"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'submit'
    },
    text: {
      type: String,
      required: true
    }
  }

}
</script>

<style>

</style>