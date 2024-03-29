import {
  type GlDrawType,
  GlOption,
  type MeshAttribute,
  type Face,
  type WebGLProgramWithAttributeCache,
} from '../types';
import { vec3 } from 'gl-matrix';
import type { Gl } from './gl';

export class GlMesh {
  private _gl: Gl;
  private _attributes: MeshAttribute[] = [];
  private _numInstance = -1;
  private _indices?: Uint16Array;
  private _numItems?: number;
  private _faces: Face[] = [];
  private _bufferChanged: string[] = [];
  private _hasIndexBufferChanged = false;
  private _hasVAO = false;
  private _isInstanced = false;
  private _extVAO: boolean;
  private _useVAO: boolean;
  private _vao?: WebGLVertexArrayObject;
  private _drawType?: GlDrawType;

  drawType: GlDrawType;
  iBuffer?: WebGLBuffer & { itemSize?: number; numItems?: number };

  get vertices() {
    return this.getSource('aVertexPosition');
  }

  get normals() {
    return this.getSource('aNormal');
  }

  get coords() {
    return this.getSource('aTextureCoord');
  }

  get indices() {
    return this._indices;
  }

  get vertexSize() {
    return this.vertices.length;
  }

  get faces() {
    return this._faces;
  }

  get attributes() {
    return this._attributes;
  }

  get hasVAO() {
    return this._hasVAO;
  }

  get vao() {
    return this._vao;
  }

  get numInstance() {
    return this._numInstance;
  }

  get isInstanced() {
    return this._isInstanced;
  }

  constructor(gl: Gl, drawType: GlDrawType, useVAO = true) {
    this._gl = gl;
    this.drawType = drawType;

    this._extVAO = !!this._gl.context.createVertexArray;
    this._useVAO = !!this._extVAO && useVAO;
  }

  bufferVertex(
    buffer: Array<number[]>,
    drawType: GlDrawType = GlOption.STATIC_DRAW,
  ) {
    this.bufferData(buffer, 'aVertexPosition', 3, drawType);
    if (this.normals.length < this.vertices.length) {
      this.bufferNormal(buffer, drawType);
    }
    return this;
  }

  bufferTexCoord(
    buffer: Array<number[]>,
    drawType: GlDrawType = GlOption.STATIC_DRAW,
  ) {
    this.bufferData(buffer, 'aTextureCoord', 2, drawType);
    return this;
  }

  bufferNormal(
    buffer: Array<number[]>,
    drawType: GlDrawType = GlOption.STATIC_DRAW,
  ) {
    this.bufferData(buffer, 'aNormal', 3, drawType);
    return this;
  }

  bufferIndex(buffer: number[], drawType: GlDrawType) {
    this._drawType = drawType;
    this._indices = new Uint16Array(buffer);
    this._numItems = this._indices.length;
    this._hasIndexBufferChanged = true;
    return this;
  }

  bufferFlattenData(
    buffer: number[],
    attributeName: string,
    bufferItemLength: number,
  ) {
    const flatBuffer = this._flattenBuffer(buffer, bufferItemLength);

    this.bufferData(
      flatBuffer,
      attributeName,
      bufferItemLength,
      GlOption.STATIC_DRAW,
      false,
    );
  }

  bufferData(
    buffer: Array<number[]>,
    attributeName: string,
    bufferItemLength: number,
    drawType: GlDrawType,
    isInstanced?: boolean,
  ) {
    if (!bufferItemLength) {
      bufferItemLength = buffer[0].length;
    }

    this._isInstanced = isInstanced || this._isInstanced;

    const a: number[] = [];

    for (let g = 0; g < buffer.length; g++) {
      const innerBuffer = buffer[g];

      for (let u = 0; u < innerBuffer.length; u++) {
        const element = innerBuffer[u];
        a.push(element);
      }
    }

    const dataArray = new Float32Array(a);
    const attribute = this.getAttribute(attributeName);

    if (attribute) {
      attribute.itemSize = bufferItemLength;
      attribute.dataArray = dataArray;
      attribute.source = buffer;
    } else {
      this._attributes.push({
        name: attributeName,
        source: buffer,
        itemSize: bufferItemLength,
        drawType: drawType,
        dataArray: dataArray,
        isInstanced: isInstanced,
      });
    }

    this._bufferChanged.push(attributeName);

    return this;
  }

  getAttribute(attributeName: string) {
    return this._attributes.find((a) => a.name === attributeName);
  }

  getAttribLoc(program: WebGLProgramWithAttributeCache, attributeName: string) {
    if (!program.cacheAttribLoc) {
      program.cacheAttribLoc = {};
    }

    if (!program.cacheAttribLoc[attributeName]) {
      program.cacheAttribLoc[attributeName] =
        this._gl.context.getAttribLocation(program, attributeName);
    }

    return program.cacheAttribLoc[attributeName];
  }

  getSource(attributeName: string) {
    const attribute = this.getAttribute(attributeName);
    return attribute ? attribute.source : [];
  }

  bind(program: WebGLProgram) {
    this.generateBuffers(program);

    const glContext = this._gl.context;

    if (this._hasVAO && this._vao) {
      glContext.bindVertexArray(this._vao);
    } else {
      if (!this.iBuffer) {
        return;
      }

      for (const attribute of this._attributes) {
        const attrPos = attribute.attrPosition;

        if (!attribute.buffer || !attrPos) {
          continue;
        }

        glContext.bindBuffer(GlOption.ARRAY_BUFFER, attribute.buffer);
        glContext.vertexAttribPointer(
          attrPos,
          attribute.itemSize,
          GlOption.FLOAT,
          false,
          0,
          0,
        );
        if (attribute.isInstanced) {
          glContext.vertexAttribDivisor(attrPos, 1);
        }

        glContext.bindBuffer(GlOption.ELEMENT_ARRAY_BUFFER, this.iBuffer);
      }
    }
  }

  generateBuffers(program: WebGLProgram) {
    if (!this._bufferChanged.length) {
      return;
    }

    const glContext = this._gl.context;

    if (this._useVAO) {
      if (!this._vao) {
        const vao = glContext.createVertexArray();

        if (!vao) {
          throw 'Failed to create VAO';
        }

        this._vao = vao;
      }

      glContext.bindVertexArray(this._vao);
    }

    for (const attribute of this._attributes) {
      if (this._bufferChanged.indexOf(attribute.name) === -1) {
        continue;
      }

      const glBuffer = this._getBufferFromAttribute(glContext, attribute);

      glContext.bindBuffer(GlOption.ARRAY_BUFFER, glBuffer);
      glContext.bufferData(
        GlOption.ARRAY_BUFFER,
        attribute.dataArray,
        attribute.drawType,
      );

      const attrPosition = this.getAttribLoc(program, attribute.name);

      glContext.enableVertexAttribArray(attrPosition);
      glContext.vertexAttribPointer(
        attrPosition,
        attribute.itemSize,
        GlOption.FLOAT,
        false,
        0,
        0,
      );

      attribute.attrPosition = attrPosition;

      if (attribute.isInstanced) {
        glContext.vertexAttribDivisor(attrPosition, 1);
      }
    }

    this._updateIndexBuffer();

    if (this._vao) {
      glContext.bindVertexArray(null);
      this._hasVAO = true;
    }

    this._hasIndexBufferChanged = false;
    this._bufferChanged = [];
  }

  unbind() {
    if (this._useVAO) {
      this._gl.context.bindVertexArray(null);
    }

    for (const attribute of this._attributes) {
      if (attribute.isInstanced && attribute.attrPosition !== undefined) {
        this._gl.context.vertexAttribDivisor(attribute.attrPosition, 0);
      }
    }
  }

  computeNormals(faceNormals?: boolean) {
    this.generateFaces();

    if (faceNormals) {
      this._computeFaceNormals();
    } else {
      this._computeVertexNormals();
    }
  }

  generateFaces() {
    if (!this._indices) {
      return;
    }

    for (let i = 0; i < this._indices.length; i += 3) {
      const index1 = this._indices[i];
      const index2 = this._indices[i + 1];
      const index3 = this._indices[i + 2];

      const vertex1 = this.vertices[index1];
      const vertex2 = this.vertices[index2];
      const vertex3 = this.vertices[index3];

      const face = {
        indices: [index1, index2, index3],
        vertices: [vertex1, vertex2, vertex3],
      };

      this._faces.push(face);
    }
  }

  private _updateIndexBuffer() {
    if (!this._hasIndexBufferChanged || !this._indices || !this._drawType) {
      return;
    }

    if (!this.iBuffer) {
      const iBuffer = this._gl.context.createBuffer();

      if (!iBuffer) {
        throw 'Failed to create index buffer';
      }

      this.iBuffer = iBuffer;
    }

    this._gl.context.bindBuffer(GlOption.ELEMENT_ARRAY_BUFFER, this.iBuffer);
    this._gl.context.bufferData(
      GlOption.ELEMENT_ARRAY_BUFFER,
      this._indices,
      this._drawType,
    );

    this.iBuffer.itemSize = 1;
    this.iBuffer.numItems = this._numItems;
  }

  private _flattenBuffer(buffer: number[], bufferItemLength: number) {
    const flatBuffer = [];

    for (let n = 0; n < buffer.length; n += bufferItemLength) {
      const innerResult: number[] = [];

      for (let i = 0; i < bufferItemLength; i++) {
        innerResult.push(buffer[n + i]);
      }

      flatBuffer.push(innerResult);
    }

    return flatBuffer;
  }

  private _getBufferFromAttribute(
    glContext: WebGL2RenderingContext,
    attribute: MeshAttribute,
  ) {
    let result: WebGLBuffer;

    if (!attribute.buffer) {
      const attributeBuffer = glContext.createBuffer();

      if (!attributeBuffer) {
        throw 'Failed to create buffer';
      }

      result = attributeBuffer;
      attribute.buffer = result;
    } else {
      result = attribute.buffer;
    }

    return result;
  }

  private _computeFaceNormals() {
    if (!this._indices) {
      return;
    }

    let faceIndex: number;
    let face: Face;
    const buffer: Array<number[]> = [];

    for (let i = 0; i < this._indices.length; i += 3) {
      faceIndex = i / 3;
      face = this._faces[faceIndex];
      const faceNormal = face.normal;

      if (!faceNormal) {
        continue;
      }

      buffer[face.indices[0]] = faceNormal;
      buffer[face.indices[1]] = faceNormal;
      buffer[face.indices[2]] = faceNormal;
    }

    this.bufferNormal(buffer);
  }

  private _computeVertexNormals() {
    const vector = vec3.create();
    const buffer: Array<number[]> = [];
    const vertices = this.vertices;

    for (let r = 0; r < vertices.length; r++) {
      vec3.set(vector, 0, 0, 0);

      for (let i = 0; i < this._faces.length; i++) {
        const face = this._faces[i];

        if (0 <= face.indices.indexOf(r)) {
          if (!face.normal) {
            continue;
          }

          vector[0] += face.normal[0];
          vector[1] += face.normal[1];
          vector[2] += face.normal[2];
        }
      }

      vec3.normalize(vector, vector);
      buffer.push([vector[0], vector[1], vector[2]]);
    }

    this.bufferNormal(buffer);
  }
}
