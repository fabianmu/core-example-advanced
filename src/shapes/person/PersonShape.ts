import type { TLShape } from '@tldraw/core'

export interface PersonShape extends TLShape {
  type: 'person'
  size: number[]
}
