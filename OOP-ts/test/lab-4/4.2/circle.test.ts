import {expect} from 'chai'
import {describe} from 'mocha'
import {Circle} from '../../../src/lab-4/4.2/Circle'
import {Point} from '../../../src/lab-4/4.2/Point'
import {CustomCanvas} from '../../../src/lab-4/4.2/CustomCanvas'

const sinon = require('sinon')

describe('', () => {
    let circle: Circle
    let center: Point
    let radius: number
    let outlineColor: string
    let fillColor: string

    describe('creat', () => {
        it('with default fillColor = 0', () => {
            center = {
                x: 1,
                y: 1
            }
            radius = 10
            outlineColor = '000000'
            circle = new Circle(center, radius, outlineColor)
            expect(circle.getFillColor()).equal('000000')
        })
    })

    describe('perimeter', () => {
        it('should be equal 31.41592653589793', () => {
            center = {
                x: 1,
                y: 1
            }
            radius = 5
            outlineColor = '000000'
            fillColor = '000000'
            circle = new Circle(center, radius, outlineColor)
            expect(circle.getPerimeter()).equal(31.41592653589793)
        })
    })

    describe('area', () => {
        it('should be equal 78.53981633974483', () => {
            center = {
                x: 1,
                y: 1
            }
            radius = 5
            outlineColor = '000000'
            fillColor = '000000'
            circle = new Circle(center, radius, outlineColor)
            expect(circle.getArea()).equal(78.53981633974483)
        })

        it('should be equal 0 with center = (1,1), radius = 0 and height = 0', () => {
            center = {
                x: 1,
                y: 1
            }
            radius = 0
            outlineColor = '000000'
            fillColor = '000000'
            circle = new Circle(center, radius, outlineColor)
            expect(circle.getArea()).equal(0)
        })
    })

    describe('draw', () => {
        it('', () => {
            center = {
                x: 1,
                y: 1,
            }
            radius = 0
            outlineColor = '000000'
            fillColor = '000000'
            circle = new Circle(center, radius, outlineColor)

            const canvas = new CustomCanvas()
            const mockCustomCanvas = sinon.mock(canvas)

            mockCustomCanvas.expects("setStrokeColor").once().withArgs(outlineColor)
            mockCustomCanvas.expects("setFillColor").once().withArgs(fillColor)
            mockCustomCanvas.expects("drawCircle").once().withArgs(center, radius)

            circle.draw(mockCustomCanvas.object)

            mockCustomCanvas.verify()
        })
    })
})