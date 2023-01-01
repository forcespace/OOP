import {expect} from 'chai'
import {describe} from 'mocha'
import {CustomCanvas} from '../../../src/lab-4/4.2/CustomCanvas'
import {Rectangle} from '../../../src/lab-4/4.2/Rectangle'
import {Point} from '../../../src/lab-4/4.2/Point'

const sinon = require('sinon')

describe('Rectangle', () => {
    let rectangle: Rectangle
    let leftTop: Point
    let width: number
    let height: number
    let outlineColor: string

    describe('created', () => {
        it('with default fillColor = 0', () => {
            leftTop = {
                x: 1,
                y: 1,
            }
            width = 49
            height=49
            outlineColor = '000000'
            rectangle = new Rectangle(leftTop, width, height, outlineColor)
            expect(rectangle.getFillColor()).equal('000000')
        })
    })

    describe('perimeter', () => {
        it('should be equal 20', () => {
            leftTop = {
                x: 1,
                y: 1,
            }
            width = 4
            height = 6
            outlineColor = '000000'
            rectangle = new Rectangle(leftTop, width, height, outlineColor)
            expect(rectangle.getPerimeter()).equal(20)
        })
    })

    describe('area', () => {
        it('should be equal 25', () => {
            leftTop = {
                x: 1,
                y: 1,
            }
            width = 5
            height = 5
            outlineColor = '000000'
            rectangle = new Rectangle(leftTop, width, height, outlineColor)
            expect(rectangle.getArea()).equal(25)
        })
    })

    describe('draw', () => {
        it('should draw rectangle', () => {
            leftTop = {
                x: 1,
                y: 1,
            }
            width = 10
            height = 10
            outlineColor = '000000'
            rectangle = new Rectangle(leftTop, width, height, outlineColor)

            const canvas = new CustomCanvas()
            const mockCustomCanvas = sinon.mock(canvas)

            mockCustomCanvas.expects('setStrokeColor').once().withArgs(outlineColor)
            mockCustomCanvas.expects('setFillColor').once().withArgs('000000')
            mockCustomCanvas.expects('drawRectangle').once().withArgs(leftTop, width, height)

            rectangle.draw(mockCustomCanvas.object)

            mockCustomCanvas.verify()
        })
    })
})