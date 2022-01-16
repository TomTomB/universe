<script lang="ts" setup>
const props = defineProps<{
  images: { src: string; alt: string }[];
  currentIndex: number;
  switchAnimation: 'pop-in' | 'fade' | 'small-pop' | 'pop-in-fade';
}>();
</script>

<template>
  <div class="background-switcher">
    <img
      v-for="(image, index) of props.images"
      :key="image.alt"
      :src="image.src"
      :alt="image.alt"
      :class="[{ hidden: currentIndex !== index }, props.switchAnimation]"
    />
  </div>
</template>

<style lang="scss" scoped>
.background-switcher {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

img {
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;

  &.hidden {
    opacity: 0;
  }

  &.loading {
    display: none;
  }

  &.pop-in {
    animation: popInAnimation 900ms;
  }

  &.small-pop {
    animation: smallPopInAnimation 900ms;
  }

  &.fade {
    animation: fadeInAnimation 900ms;
  }

  &.pop-in-fade {
    animation: popFadeInAnimation 900ms;
  }
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes popInAnimation {
  0% {
    transform: perspective(100px) translate3d(0, 0, 40px);
    -webkit-filter: brightness(1.5);
  }
  100% {
    transform: perspective(0px) translate3d(0, 0, 0);
    -webkit-filter: brightness(1);
  }
}

@keyframes smallPopInAnimation {
  0% {
    transform: perspective(100px) translate3d(0, 0, 1.05px);
  }
  100% {
    transform: perspective(0px) translate3d(0, 0, 1px);
  }
}

@keyframes popFadeInAnimation {
  0% {
    opacity: 0;
    transform: perspective(100px) translate3d(0, 0, 40px);
    -webkit-filter: brightness(1.5);
  }
  100% {
    opacity: 1;
    transform: perspective(0px) translate3d(0, 0, 0);
    -webkit-filter: brightness(1);
  }
}
</style>
