import { Utils, TLBounds } from '@tldraw/core'
import { intersectLineSegmentBounds } from '@tldraw/intersect'
import { nanoid } from 'nanoid'
import { CustomShapeUtil } from 'shapes/CustomShapeUtil'
import { VpersonComponent } from './VpersonComponent'
import { VpersonIndicator } from './VpersonIndicator'
import type { VpersonShape } from './VpersonShape'

type T = VpersonShape
type E = SVGSVGElement

export class VpersonUtil extends CustomShapeUtil<T, E> {
  Component = VpersonComponent

  Indicator = VpersonIndicator

  hideResizeHandles = false

  getBounds = (shape: T) => {
    const bounds = Utils.getFromCache(this.boundsCache, shape, () => {
      const [width, height] = shape.size

      return {
        minX: 0,
        maxX: width,
        minY: 0,
        maxY: height,
        width,
        height,
      } as TLBounds
    })

    return Utils.translateBounds(bounds, shape.point)
  }

  /* ----------------- Custom Methods ----------------- */

  canBind = true

  getShape = (props: Partial<T>): T => {
    return {
      id: nanoid(),
      type: 'vperson',
      name: 'Vperson',
      parentId: 'page1',
      point: [0, 0],
      size: [111.1, 169.5],
      childIndex: 1,
      ...props,
    }
  }

  shouldRender = (prev: T, next: T) => {
    return next.size !== prev.size
  }

  getCenter = (shape: T) => {
    return Utils.getBoundsCenter(this.getBounds(shape))
  }

  hitTestPoint = (shape: T, point: number[]) => {
    return Utils.pointInBounds(point, this.getBounds(shape))
  }

  hitTestLineSegment = (shape: T, A: number[], B: number[]) => {
    return intersectLineSegmentBounds(A, B, this.getBounds(shape)).length > 0
  }

  transform = (shape: T, bounds: TLBounds, initialShape: T, scale: number[]) => {
    shape.point = [bounds.minX, bounds.minY]
    shape.size = [bounds.width, bounds.height]
  }
}
