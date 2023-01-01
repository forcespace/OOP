import {CanvasDrawableInterface} from './CanvasDrawableInterface'

export interface ShapeInterface extends CanvasDrawableInterface{
    getArea(): number
    getPerimeter(): number
    getOutlineColor(): string
    toString(): string
}