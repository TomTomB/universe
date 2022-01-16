import ParallaxBackground from './ParallaxBackground.vue';

import parallaxSmokeBackground from './assets/images/parallax-smoke-background.png';
import parallaxSmokeForeground from './assets/images/parallax-smoke-foreground.png';
import parallaxSmoke1 from './assets/images/parallax-smoke1.png';
import parallaxSmoke2 from './assets/images/parallax-smoke2.png';
import parallaxSmoke3 from './assets/images/parallax-smoke3.png';
import parallaxSmoke4 from './assets/images/parallax-smoke4.png';

export * from './partials';

export { ParallaxBackground };

export const DEFAULT_PARALLAX_ASSETS = {
  background: parallaxSmokeBackground,
  foreground: parallaxSmokeForeground,
  smoke01: parallaxSmoke1,
  smoke02: parallaxSmoke2,
  smoke03: parallaxSmoke3,
  smoke04: parallaxSmoke4,
};
