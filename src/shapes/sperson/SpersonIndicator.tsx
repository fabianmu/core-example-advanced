import * as React from 'react'
import { TLShapeUtil } from '@tldraw/core'
import type { SpersonShape } from './SpersonShape'

export const SpersonIndicator = TLShapeUtil.Indicator<SpersonShape>(({ shape }) => {
  return (
    <rect
      pointerEvents="none"
      width={shape.size[0]}
      height={shape.size[1]}
      fill="none"
      stroke="tl-selectedStroke"
      strokeWidth={1}
      rx={4}
    />
  )
})
