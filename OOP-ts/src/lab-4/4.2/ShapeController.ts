import {ShapeInterface} from './ShapeInterface'
import {ShapeInit} from './ShapeInit'
import {CustomCanvas} from './CustomCanvas'

const MESSAGES = {
    SHAPE: {
        ERROR: {
            AREA: 'Error max area shape',
            PERIMETER: 'Error min perimeter shape'
        }
    }
}

export enum ShapeNamesTypes {
    RECTANGLE = 'rectangle',
    TRIANGLE = 'triangle',
    CIRCLE = 'circle',
    LINE_SEGMENT = 'line',
}

export class ShapeController {
    shapeArray: ShapeInterface[] = []

    public addShape(line: string): void {
        this.shapeArray.push(ShapeInit.createShape(line))
    }

    public getMaxAreaShape(): string {
        const sortableShapeArray: ShapeInterface[] = this.shapeArray.slice()
        const maxAreaShape: ShapeInterface = sortableShapeArray.sort((a: ShapeInterface, b: ShapeInterface) => b.getArea() - a.getArea())[0]
        return maxAreaShape ? maxAreaShape.toString() : MESSAGES.SHAPE.ERROR.AREA
    }

    public getMinPerimeterShape(): string {
        const sortableShapeArray: ShapeInterface[] = this.shapeArray.slice()
        const minPerimeterShape: ShapeInterface = sortableShapeArray.sort((a: ShapeInterface, b: ShapeInterface) => a.getPerimeter() - b.getPerimeter())[0]
        return minPerimeterShape ? minPerimeterShape.toString() : MESSAGES.SHAPE.ERROR.PERIMETER
    }

    public createImage(): void {
        const canvas: CustomCanvas = new CustomCanvas()
        this.shapeArray.map((shape: ShapeInterface) => shape.draw(canvas))
        canvas.save('./shape.png')
    }
}