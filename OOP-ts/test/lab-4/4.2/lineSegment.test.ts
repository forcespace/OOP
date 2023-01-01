import {expect} from 'chai'
import {describe} from 'mocha'
import {LineSegment} from '../../../src/lab-4/4.2/LineSegment'
import {Point} from '../../../src/lab-4/4.2/Point'

describe('', () => {
    let segment: LineSegment
    let startPoint: Point
    let endPoint: Point
    let outlineColor: string

    describe('perimeter', () => {
        it('startPoint and endPoint', () => {
            startPoint = {
                x: 0,
                y: 0,
            }
            endPoint = {
                x: 10,
                y: 0,
            }
            outlineColor = '000000'
            segment = new LineSegment(startPoint, endPoint, outlineColor)
            expect(segment.getPerimeter()).equal(10)
        })

        it('startPoint and endPoint', () => {
            startPoint = {
                x: 0,
                y: 4,
            }
            endPoint = {
                x: 3,
                y: 0,
            }
            outlineColor = '000000'
            segment = new LineSegment(startPoint, endPoint, outlineColor)
            expect(segment.getPerimeter()).equal(5)
        })

        it('startPoint and endPoint', () => {
            startPoint = {
                x: 1,
                y: 1,
            }
            endPoint = {
                x: 1,
                y: 1,
            }
            outlineColor = '000000'
            segment = new LineSegment(startPoint, endPoint, outlineColor)
            expect(segment.getPerimeter()).equal(0)
        })
    })
})