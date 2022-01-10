import type { mat3, mat4, vec2, vec3 } from 'gl-matrix';

export const GlShaderTypes = {
  float: 'uniform1f',
  vec2: 'uniform2fv',
  vec3: 'uniform3fv',
  vec4: 'uniform4fv',
  int: 'uniform1i',
  mat3: 'uniformMatrix3fv',
  mat4: 'uniformMatrix4fv',
} as const;

export type ShaderType = keyof typeof GlShaderTypes;
export type GlShaderType = typeof GlShaderTypes[ShaderType];

export interface GlShaderParameter {
  name: string;
  type: string;
  value: number | Array<number> | Float32Array;
  uniformLoc: string;
  isNumber: boolean;
}

export type ShaderUniformValueType<T extends ShaderType> = T extends 'float'
  ? number
  : T extends 'int'
  ? number
  : T extends 'vec2'
  ? vec2
  : T extends 'vec3'
  ? vec3
  : T extends 'mat3'
  ? mat3
  : T extends 'mat4'
  ? mat4
  : never;
