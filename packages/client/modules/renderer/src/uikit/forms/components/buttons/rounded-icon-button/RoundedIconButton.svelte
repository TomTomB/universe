<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' | null = null;
  export let ariaLabel: string;
  export let isDisabled = false;
  export let icon:
    | 'close'
    | 'arrow'
    | 'arrowLeft'
    | 'refresh'
    | 'cog'
    | 'edit'
    | 'plus'
    | 'delete'
    | 'next'
    | 'compare'
    | 'back'
    | 'add'
    | 'duplicate'
    | 'clear'
    | 'export'
    | 'import';
</script>

<button
  class="rounded-icon-button {icon}"
  disabled={isDisabled}
  aria-label={ariaLabel}
  type={type ?? 'button'}
  on:click
>
  <div class="button-state border-default" />
  <div class="button-state border-hover" />
  <div class="button-state border-active" />
  <div class="button-state border-disabled" />

  <div class="contents">
    <div class="button-state contents-default" />
    <div class="button-state contents-hover" />
    <div class="button-state contents-active" />
    <div class="button-state contents-disabled" />

    <div class="button-icon" />
  </div>
</button>

<style lang="scss">
  .rounded-icon-button {
    inline-size: 32px;
    block-size: 32px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &.arrow-left {
      transform: scaleX(-1);
    }

    .border-default {
      background: linear-gradient(
        to top,
        rgb(var(--color-gold-700)) 4%,
        rgb(var(--color-gold-500)) 23%,
        rgb(var(--color-gold-400)) 90%,
        rgb(var(--color-gold-300)) 100%
      );
    }

    .border-hover {
      background: linear-gradient(
        to top,
        rgb(var(--color-gold-400)) 0%,
        rgb(var(--color-gold-100)) 100%
      );
    }

    .border-active {
      background: linear-gradient(
        to top,
        rgb(var(--color-gold-500)) 0%,
        rgb(var(--color-gold-700)) 100%
      );
    }

    .border-disabled {
      background: none;
      background-color: rgb(var(--color-grey-300));
    }

    &:hover,
    &:focus-visible {
      .border-hover,
      .contents-hover {
        opacity: 1;
      }

      .button-icon {
        background-color: rgb(var(--color-gold-100));
      }
    }

    &:active {
      .border-hover,
      .border-default,
      .contents-hover,
      .contents-default {
        opacity: 0;
      }

      .border-active,
      .contents-active {
        opacity: 1;
      }

      .button-icon {
        background-color: rgb(var(--color-gold-500));
      }
    }

    &:disabled {
      cursor: default;
      pointer-events: none;

      .border-default,
      .contents-default {
        opacity: 0;
      }

      .border-disabled,
      .contents-disabled {
        opacity: 1;
      }

      .button-icon {
        background-color: rgb(var(--color-grey-300));
      }
    }

    &:disabled .contents,
    &:active .contents {
      box-shadow: none;
      transition: none;
    }
  }

  .contents {
    inline-size: 28px;
    block-size: 28px;
    border-radius: 50%;
    transition: box-shadow 150ms ease, color 150ms ease;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    .contents-default {
      background-color: rgb(var(--color-grey-800));
    }

    .contents-hover {
      background: linear-gradient(
        to top,
        rgb(var(--color-grey-400)) 0%,
        rgb(var(--color-grey-700)) 100%
      );
    }

    .contents-active {
      background: none;
      background-color: rgb(var(--color-grey-800));
    }

    .contents-disabled {
      background: none;
      background-color: rgb(var(--color-grey-800));
    }
  }

  .button-icon {
    --maskUrl: url(./assets/images/x-icon.png);
    --maskSize: 10px;

    mask: var(--maskUrl) no-repeat center;
    -webkit-mask: var(--maskUrl) no-repeat center;
    mask-size: var(--maskSize);
    -webkit-mask-size: var(--maskSize);

    background-color: rgb(var(--color-gold-200));
    inline-size: 10px;
    block-size: 10px;
    transition: background-color 300ms ease;
  }

  .rounded-icon-button {
    &.arrow,
    &.arrowLeft {
      .button-icon {
        --maskUrl: url(./assets/images/arrow-right.png);
        --maskSize: 7px 10px;

        inline-size: 7px;
        block-size: 10px;
      }
    }

    &.refresh {
      .button-icon {
        --maskUrl: url(./assets/images/refresh.png);
        --maskSize: 20px;

        inline-size: 20px;
        block-size: 20px;
      }
    }

    &.cog {
      .button-icon {
        --maskUrl: url(./assets/images/icon_settings.png);
        --maskSize: 18px;

        inline-size: 24px;
        block-size: 24px;
      }
    }

    &.edit {
      .button-icon {
        --maskUrl: url(./assets/images/icon_edit.png);
        --maskSize: 13px 12px;

        inline-size: 13px;
        block-size: 12px;
      }
    }

    &.plus {
      .button-icon {
        --maskUrl: url(./assets/images/icon_add.png);
        --maskSize: 10px;

        inline-size: 10px;
        block-size: 10px;
      }
    }

    &.delete {
      .button-icon {
        --maskUrl: url(./assets/images/icon_delete.png);
        --maskSize: 13px 15px;

        inline-size: 13px;
        block-size: 15px;
      }
    }

    &.next {
      .button-icon {
        --maskUrl: url(./assets/images/icon_next.png);
        --maskSize: 17px 16px;

        inline-size: 17px;
        block-size: 16px;
      }
    }

    &.compare {
      .button-icon {
        --maskUrl: url(./assets/images/icon_compare.png);
        --maskSize: 18px;

        inline-size: 24px;
        block-size: 24px;
      }
    }

    &.back {
      .button-icon {
        --maskUrl: url(./assets/images/icon_back.png);
        --maskSize: 16px;

        inline-size: 16px;
        block-size: 16px;
      }
    }

    &.add {
      .button-icon {
        --maskUrl: url(./assets/images/icon_plus.png);
        --maskSize: 11px;

        inline-size: 11px;
        block-size: 11px;
      }
    }

    &.duplicate {
      .button-icon {
        --maskUrl: url(./assets/images/icon_copy.png);
        --maskSize: 18px;

        inline-size: 20px;
        block-size: 20px;
      }
    }

    &.clear {
      .button-icon {
        --maskUrl: url(./assets/images/icon_clearall.png);
        --maskSize: 17px 16px;

        inline-size: 17px;
        block-size: 16px;
      }
    }

    &.export {
      .button-icon {
        --maskUrl: url(./assets/images/icon_export.png);
        --maskSize: 14px;

        inline-size: 17px;
        block-size: 16px;
      }
    }

    &.import {
      .button-icon {
        --maskUrl: url(./assets/images/icon_import.png);
        --maskSize: 14px;

        inline-size: 17px;
        block-size: 16px;
      }
    }
  }

  .button-state {
    position: absolute;
    opacity: 0;
    inline-size: 100%;
    block-size: 100%;
    transition: opacity 0.3s ease;
    border-radius: 50%;

    &.border-default,
    &.contents-default {
      opacity: 1;
    }
  }
</style>
