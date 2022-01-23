import type { GlOptionReverse } from './gl-option-reverse.types';
import type { GlOption } from './gl-option.types';

export interface Size {
  width: number;
  height: number;
}

export interface GlConfig {
  premultipliedAlpha?: boolean;
}

export interface GlTextureParams {
  type?: GlTextureSourceType;
  anisotropy?: number;
  format?: number;
  internalFormat?: number;
  level?: number;
  magFilter?: number;
  minFilter?: keyof typeof GlOptionReverse;
  mipmap?: boolean;
  premultiplyAlpha?: boolean;
  wrapS?: number;
  wrapT?: number;
}

export type GlTextureSourceType =
  | GlOption.UNSIGNED_BYTE
  | GlOption.FLOAT
  | 'image'
  | 'canvas';

export type GlTextureSource =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Array<any> | Uint8Array | Float32Array | HTMLImageElement | HTMLCanvasElement;
