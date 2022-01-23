import type { GlOption } from '.';

export type GlDrawType =
  | GlOption.TRIANGLES
  | GlOption.LINES
  | GlOption.POINTS
  | GlOption.TRIANGLE_STRIP
  | GlOption.TRIANGLE_FAN
  | GlOption.DYNAMIC_DRAW
  | GlOption.STATIC_DRAW;
