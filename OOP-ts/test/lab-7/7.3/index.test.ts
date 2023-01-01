import {expect} from 'chai'
import {describe} from 'mocha'
import {MyList} from '../../../src/lab-7/7.3/MyList'

describe('', () => {
    let cMyList: MyList<string>

    it('el add to head list', () => {
        cMyList = new MyList<string>()
        cMyList.push('any el')
        expect(cMyList.getHead()).equal('any el')
    })

    it('el add to end list', () => {
        cMyList = new MyList<string>()
        cMyList.push('any-el')
        cMyList.push('any-el-2')
        expect(cMyList.getTail()).equal('any el 2')
    })

    it('el add to end list', () => {
        cMyList = new MyList<string>()
        cMyList.unshift('any-el-3')
        expect(cMyList.getHead()).equal('any-el-3')
    })

    it('get length', () => {
        cMyList = new MyList<string>()

        expect(cMyList.getLength()).equal(0)
    })

    it('get length', () => {
        cMyList = new MyList<string>()
        cMyList.push('any-el-1')
        cMyList.push('any-el-2')
        cMyList.push('any-el-3')

        expect(cMyList.getLength()).equal(3)
    })

    it('delete', () => {
        cMyList = new MyList<string>()
        cMyList.push('any-el-1')
        cMyList.push('any-el-2')
        cMyList.push('any-el-3')

        const iterator = cMyList.getBegin()
        while (iterator.valid()) {
            if (cMyList.getElement(iterator) === 'any-el-1') {
                cMyList.deleteElement(iterator)
                expect(cMyList.getTail()).equal('any-el-1')
            }
            iterator.next()
        }
    })

    it('shift', () => {
        cMyList = new MyList<string>()

        cMyList.shift()

        expect(cMyList.getLength()).equal(0)
        expect(cMyList.getHead()).equal(null)
    })

    it('shift', () => {
        cMyList = new MyList<string>()
        cMyList.push('any-el-1')
        cMyList.push('any-el-2')
        cMyList.push('any-el-3')

        cMyList.shift()

        expect(cMyList.getLength()).equal(2)
        expect(cMyList.getHead()).equal('any-el-2')
    })

    it('pop', () => {
        cMyList = new MyList<string>()
        cMyList.push('any-el-1')
        cMyList.push('any-el-2')
        cMyList.push('any-el-3')

        cMyList.pop()

        expect(cMyList.getLength()).equal(2)
        expect(cMyList.getTail()).equal('any-el-2')
    })

    it('shift', () => {
        cMyList = new MyList<string>()

        cMyList.shift()

        expect(cMyList.getLength()).equal(0)
        expect(cMyList.getTail()).equal(null)
    })

    it('element reverse', () => {
        cMyList = new MyList<string>()
        cMyList.push('any-el-1')
        cMyList.push('any-el-2')
        cMyList.push('any-el-3')
        const iterator = cMyList.getBegin()
        let i = 0
        while (iterator.valid()) {
            expect(cMyList.getElement(iterator)).equal(`any-el-${i++}`)
            iterator.prev()
        }
    })

    it('element one by one by reverse', () => {
        cMyList = new MyList<string>()
        cMyList.push('any-el-1')
        cMyList.push('any-el-2')
        cMyList.push('any-el-3')
        const iterator = cMyList.getEnd()
        let i = 2
        while (iterator.valid()) {
            expect(cMyList.getElement(iterator)).equal(`any-el-${i--}`)
            iterator.next()
        }
    })
})