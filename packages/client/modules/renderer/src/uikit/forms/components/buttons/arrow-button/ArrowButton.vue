<script lang="ts" setup>
withDefaults(
  defineProps<{ type?: 'button' | 'submit' | 'reset'; label: string }>(),
  {
    type: 'button',
  },
);
</script>

<template>
  <button :type="type" :aria-label="label">
    <div class="default" />
    <div class="hover" />
    <div class="click" />
    <div class="disabled" />
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 30px;
  height: 30px;
}
</style>
