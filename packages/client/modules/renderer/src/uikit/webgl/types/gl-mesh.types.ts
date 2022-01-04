import type { GlDrawType } from './gl-draw.types';

export type WebGLProgramWithAttributeCache = WebGLProgram & {
  cacheAttribLoc?: Record<string, number>;
};

export interface MeshAttribute {
  buffer?: WebGLBuffer;
  attrPosition?: number;
  name: string;
  source: Array<number[]>;
  itemSize: number;
  drawType: GlDrawType;
  dataArray: Float32Array;
  isInstanced?: boolean;
}

export interface Face {
  normal?: number[];
  indices: number[];
  vertices?: number[][];
}
