import { TLBoundsCorner, TLPointerInfo } from '@tldraw/core'
import { shapeUtils } from 'shapes'
import type { Action } from 'state/constants'
import { getPagePoint } from 'state/helpers'
import { mutables } from 'state/mutables'

export const createSpersonShape: Action = (data, payload: TLPointerInfo) => {
  const shape = shapeUtils.sperson.getShape({
    parentId: 'page1',
    point: mutables.currentPoint,
    size: [111.1, 169.5],
    childIndex: Object.values(data.page.shapes).length,
  })

  data.page.shapes[shape.id] = shape
  data.pageState.selectedIds = [shape.id]

  mutables.pointedBoundsHandleId = TLBoundsCorner.BottomRight
}
