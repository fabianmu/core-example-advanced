import * as React from 'react'
import { TLShapeUtil } from '@tldraw/core'
import type { PersonShape } from './PersonShape'

export const PersonIndicator = TLShapeUtil.Indicator<PersonShape>(({ shape }) => {
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
