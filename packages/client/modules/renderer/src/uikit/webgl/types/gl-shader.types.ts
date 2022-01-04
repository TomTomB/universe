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
