<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  zoom?: number;
  innerShadow?: boolean;
  altFrame?: boolean;
}>();

const styleVars = computed(
  () =>
    ({
      ...(props.zoom ? { '--framed-icon-zoom': props.zoom } : {}),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any),
);
</script>

<template>
  <div
    :class="[
      {
        'alt-frame': props.altFrame,
        'do-zoom': !!props.zoom,
      },
      'framed-icon',
    ]"
    :style="styleVars"
  >
    <div class="frame-color">
      <div class="container-holder">
        <slot />
      </div>
      <div class="inner-mask" :class="{ 'inner-shadow': props.innerShadow }" />
    </div>
  </div>
</template>

<style lang="scss">
.parent:hover,
.parent:focus-visible {
  .framed-icon {
    img {
      filter: brightness(1.25);
    }

    .frame-color {
      background-color: transparent;
      background-image: linear-gradient(to top, #c89b3c, #f0e6d2);
    }

    &.alt-frame {
      .frame-color {
        background-image: linear-gradient(
          to top,
          #3295c7 0%,
          #0ac8b9 49%,
          #cdfafa 100%
        );
      }
    }
  }
}

.parent:active {
  .framed-icon {
    img {
      filter: brightness(0.75);
    }

    .frame-color {
      background-color: transparent;
      background-image: linear-gradient(to top, #695625, #463714);
    }

    &.alt-frame {
      .frame-color {
        background-image: linear-gradient(
          to top,
          #005a82 0%,
          #005a82 83%,
          #005a82 100%
        );
      }
    }
  }
}

.parent:disabled {
  .framed-icon {
    img {
      filter: brightness(0.75);
    }

    .frame-color {
      background-image: none;
      background-color: #3c3732;
    }
  }
}

.framed-icon {
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 4px 1px rgba(1, 10, 19, 0.25);
  position: relative;

  &.alt-frame {
    .frame-color {
      background-image: linear-gradient(
        to top,
        #005a82 0%,
        #0596aa 44%,
        #0596aa 93%,
        #0ac8b9 100%
      );
    }
  }

  &.do-zoom {
    img {
      transform: scale(calc(var(--framed-icon-zoom) / 100));
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .frame-color {
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 3px;
    background-image: linear-gradient(
      to top,
      #695625 0%,
      #a9852d 23%,
      #b88d35 93%,
      #c8aa6e 100%
    );
  }

  .inner-mask {
    position: absolute;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: inset 0px 0px 4px 1px rgba(1, 10, 19, 0.25);
    pointer-events: none;

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &.inner-shadow {
      box-shadow: inset 0 0 4px 4px rgba(0, 0, 0, 0.75);
    }
  }

  .container-holder {
    overflow: hidden;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
