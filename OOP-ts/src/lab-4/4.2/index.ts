import {createInterface, Interface} from 'node:readline'
import {stdin as input, stdout as output} from 'process'
import {ShapeController} from './ShapeController'

const MESSAGES = {
    MAX_AREA_SHAPE: 'Max area shape: ',
    MIN_PERIMETER_SHAPE: 'Min perimeter shape: ',
    IMG_PATH: 'Created image: ./shape.png',
    SEPARATOR: '--------------------------------'
}

function printLine(message: string) {
    console.log(message)
}

function main(): void {
    const shapeInterface: ShapeController = new ShapeController()
    const readLineInterface: Interface = createInterface({input, output})
    readLineInterface.on('line', (message: string) => {
        shapeInterface.addShape(message)
    }).on('close', () => {
        const maxAreaShape: string = shapeInterface.getMaxAreaShape()
        printLine(`${MESSAGES.MAX_AREA_SHAPE}${maxAreaShape}`)
        printLine(MESSAGES.SEPARATOR)
        const minPerimeterShape: string = shapeInterface.getMinPerimeterShape()
        printLine(`${MESSAGES.MIN_PERIMETER_SHAPE}${minPerimeterShape}`)
        printLine(MESSAGES.SEPARATOR)
        shapeInterface.createImage()
        printLine(MESSAGES.IMG_PATH)
        readLineInterface.close()
    })
}

main()