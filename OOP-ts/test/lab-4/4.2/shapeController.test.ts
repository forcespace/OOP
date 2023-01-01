import {expect} from 'chai'
import {describe} from 'mocha'
import {ShapeController} from '../../../src/lab-4/4.2/ShapeController'

describe('', () => {
    let shapeController: ShapeController

    beforeEach(() => {
        shapeController = new ShapeController()
    })

    describe('getMaxAreaShape', () => {
        it('max from two different area rectangle', () => {
            shapeController.addShape('rectangle 470.3 395.15 50.7 80.4 251002 964b00')
            shapeController.addShape('rectangle 470.3 395.15 0.7 80.4 251002 964b00')
            expect(shapeController.getMaxAreaShape()).equal('rectangle\n' +
                'left top point: (470.3,395.15)\n' +
                'width: 50.7\n' +
                'height: 80.4\n' +
                'area: 4076.2800000000007\n' +
                'perimeter: 262.20000000000005\n' +
                'outline color: 251002\n' +
                'fill color: 964b00')
        })

        it('max from two different area different shape', () => {
            shapeController.addShape('triangle 500.3 250.15 650.7 400.4 350.15 400.4 013220 006600')
            shapeController.addShape('rectangle 470.3 395.15 0.7 80.4 251002 964b00')
            expect(shapeController.getMaxAreaShape()).equal('triangle\n' +
                'vertex1: (500.3,250.15)\n' +
                'vertex2: (650.7,400.4)\n' +
                'vertex3: (350.15,400.4)\n' +
                'area: 22578.818750000002\n' +
                'perimeter: 725.5565690607691\n' +
                'outline color: 013220\n' +
                'fill color: 006600')
        })
    })
})