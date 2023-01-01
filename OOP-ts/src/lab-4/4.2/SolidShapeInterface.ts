import {ShapeInterface} from './ShapeInterface'

export interface SolidShapeInterface extends ShapeInterface {
    getFillColor(): string
}