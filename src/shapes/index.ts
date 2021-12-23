import type { CustomShapeUtil } from './CustomShapeUtil'
import { ArrowShape, ArrowUtil } from './arrow'
import { PersonShape, PersonUtil } from './person'
import { VpersonShape, VpersonUtil } from './vperson'
import { BoxShape, BoxUtil } from './box'
import { PencilShape, PencilUtil } from './pencil'

export * from './arrow'
export * from './pencil'
export * from './person'
export * from './vperson'
export * from './box'

export type Shape = BoxShape | ArrowShape | PencilShape | PersonShape

export const shapeUtils = {
  box: new BoxUtil(),
  arrow: new ArrowUtil(),
  pencil: new PencilUtil(),
  person: new PersonUtil(),
  vperson: new VpersonUtil(),
}

export const getShapeUtils = <T extends Shape>(shape: T | T['type']) => {
  if (typeof shape === 'string') return shapeUtils[shape] as unknown as CustomShapeUtil<T>
  return shapeUtils[shape.type] as unknown as CustomShapeUtil<T>
}
