<script lang="ts" setup>
const props = defineProps<{
  isDisabled?: boolean;
  hasAlert?: boolean;
  isActive?: boolean;
}>();

defineEmits<{ (event: 'click'): void }>();
</script>

<template>
  <li class="tab-navigation-item">
    <button
      :class="[{ 'is-active': props.isActive }, 'item-link']"
      :disabled="props.isDisabled"
      @click="$emit('click')"
    >
      <div class="text-container">
        <span> <slot /> </span>
        <div v-if="props.hasAlert" class="alert-image"></div>
      </div>
    </button>
  </li>
</template>

<style lang="scss" scoped>
.tab-navigation-item {
  all: unset;
}

.alert-image {
  position: absolute;
  right: -12px;
  top: 0px;
  background-color: #cdbe91;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  transition: 300ms background-color;
}

.item-link {
  font-family: LoL Display;
  text-decoration: none;
  font-kerning: normal;
  -webkit-font-feature-settings: 'kern' 1;
  -webkit-font-smoothing: antialiased;
  color: #c8aa6e;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.0325em;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  padding-left: 12px;
  text-align: left;
  line-height: 30px;
  vertical-align: middle;
  transition: 300ms color;

  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 100%;
    top: 0;
    left: 1px;
    background-color: #c89b3c;
    background-size: 100% 100%;
    background-position: left center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: 300ms opacity;
    transform: scaleY(0);
    will-change: transform, opacity;
  }

  &:hover,
  &:focus-visible {
    color: #f0e6d2;

    .alert-image {
      background-color: #f0e6d2;
    }
  }

  &:active {
    color: #785a28;

    .alert-image {
      background-color: #785a28;
    }
  }

  &.is-active {
    cursor: default;
    color: #f0e6d2;

    &::before {
      transition: 300ms opacity, 300ms transform;
      opacity: 1;
      transform: scaleY(1);
    }

    .alert-image {
      background-color: #f0e6d2;
    }
  }

  &:disabled {
    pointer-events: none;
    color: #888;
  }
}

.text-container {
  padding: 0px 15px;
  position: relative;
}
</style>
