<script lang="ts"></script>

<div class="animated-border-overlay-wrapper">
  <div class="animated-border-overlay-container">
    <div class="blur-effect high">
      <div class="glow-mask top">
        <div class="glow-content scroll top" />
        <div class="glow-content overlay top" />
      </div>
      <div class="glow-mask right">
        <div class="glow-content scroll right" />
        <div class="glow-content overlay right" />
      </div>
      <div class="glow-mask bottom">
        <div class="glow-content scroll bottom" />
        <div class="glow-content overlay bottom" />
      </div>
      <div class="glow-mask left">
        <div class="glow-content scroll left" />
        <div class="glow-content overlay left" />
      </div>
    </div>
    <div class="blur-effect low">
      <div class="glow-mask top">
        <div class="glow-content scroll top" />
        <div class="glow-content overlay top" />
      </div>
      <div class="glow-mask right">
        <div class="glow-content scroll right" />
        <div class="glow-content overlay right" />
      </div>
      <div class="glow-mask bottom">
        <div class="glow-content scroll bottom" />
        <div class="glow-content overlay bottom" />
      </div>
      <div class="glow-mask left">
        <div class="glow-content scroll left" />
        <div class="glow-content overlay left" />
      </div>
    </div>
  </div>
</div>

<style lang="scss" global>
  @keyframes noiseScrollAnimation {
    0% {
      background-position: 0 center;
    }
    100% {
      background-position: -400% center;
    }
  }

  .parent:hover,
  .parent:focus-visible,
  .parent:active {
    > .animated-border-overlay-wrapper {
      opacity: 1;
    }
  }

  .animated-border-overlay-wrapper {
    display: block;
    position: absolute;
    width: calc(100% + 12px);
    height: calc(100% + 12px);
    top: -6px;
    left: -6px;
    padding: 6px;
    box-sizing: border-box;
    overflow: hidden;
    opacity: 0;
    transition: opacity 300ms linear;
  }

  .animated-border-overlay-container {
    position: relative;
    width: 100%;
    height: 100%;

    .blur-effect {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      &.high {
        filter: blur(4px) contrast(1.35);
        opacity: 0.5;
      }

      &.low {
        filter: blur(2px) contrast(1.15);
        opacity: 0.75;
      }
    }

    .glow-mask {
      --gradient-stops: #000, #000 4px, transparent 4px, transparent;
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;

      &.top {
        top: -2px;
        left: -2px;
        mask-image: linear-gradient(to bottom, var(--gradient-stops));
        -webkit-mask-image: linear-gradient(to bottom, var(--gradient-stops));
      }

      &.right {
        top: -2px;
        right: -2px;
        mask-image: linear-gradient(to left, var(--gradient-stops));
        -webkit-mask-image: linear-gradient(to left, var(--gradient-stops));
      }

      &.bottom {
        bottom: -2px;
        right: -2px;
        mask-image: linear-gradient(to top, var(--gradient-stops));
        -webkit-mask-image: linear-gradient(to top, var(--gradient-stops));
      }

      &.left {
        bottom: -2px;
        left: -2px;
        mask-image: linear-gradient(to right, var(--gradient-stops));
        -webkit-mask-image: linear-gradient(to right, var(--gradient-stops));
      }
    }

    .glow-content {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-size: 200%;

      &.scroll {
        background-image: url(./assets/images/noise-tile-alpha-tint-large.png);
        animation: noiseScrollAnimation 25000ms linear infinite;
      }
      &.overlay {
        background-image: url(./assets/images/noise-tile-alpha-tint-small.png);
        animation: noiseScrollAnimation 25000ms linear infinite;
      }
      &.top {
        width: 200%;
        transform: translateY(-50%) translateX(-25%);
      }
      &.bottom {
        width: 200%;
        transform: translateY(50%) translateX(-25%) rotate(180deg) scaleY(-1);
      }
      &.left {
        transform: translateX(-50%) rotate(270deg) scaleY(-1);
      }
      &.right {
        transform: translateX(50%) rotate(90deg) scaleY(-1);
      }
    }
  }
</style>
