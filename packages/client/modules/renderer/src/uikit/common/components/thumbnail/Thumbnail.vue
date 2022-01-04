<template>
  <div class="thumbnail"><slot /></div>
</template>

<style lang="scss">
.parent:hover,
.parent:focus-visible {
  .thumbnail {
    border-image-source: linear-gradient(to bottom, #f0e6d2 4%, #c89b3c 100%);

    > * {
      -webkit-filter: brightness(1.25);
    }
  }
}

.parent:active {
  .thumbnail {
    border-image-source: linear-gradient(to bottom, #463714 0%, #695625 100%);
  }
}

.parent:disabled {
  pointer-events: none;
  .thumbnail {
    > * {
      -webkit-filter: grayscale(1);
    }
  }
}

.thumbnail {
  display: inline-block;
  border: thin solid #3c3c41;
  border-image-slice: 1;
  border-image-repeat: stretch;
  box-shadow: 0 0 0 1px rgba(1, 10, 19, 0.85);
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 0 1px rgba(1, 10, 19, 0.8) inset;
  }
}
</style>
