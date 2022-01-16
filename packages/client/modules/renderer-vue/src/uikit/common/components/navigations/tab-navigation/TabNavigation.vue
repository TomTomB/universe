<template>
  <nav class="tab-navigation">
    <ul class="navigation-list">
      <slot />
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.tab-navigation {
  font-family: LoL Display;
  font-kerning: normal;
  -webkit-font-feature-settings: 'kern' 1;
  -webkit-font-smoothing: subpixel-antialiased;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #cdbe91;
}

.navigation-list {
  all: unset;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  flex-direction: column;
}
</style>
