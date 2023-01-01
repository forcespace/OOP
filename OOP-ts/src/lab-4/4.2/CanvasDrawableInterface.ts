import {CustomCanvas} from './CustomCanvas'
import {CanvasInterface} from './CanvasInterface'

export interface CanvasDrawableInterface {
    draw(canvas: CanvasInterface): void
}