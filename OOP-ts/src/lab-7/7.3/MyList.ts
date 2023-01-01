import {Iterator} from './Iterator'

export type TNode<Type> = {
    element: Type | null,
    prev: TNode<Type> | null,
    next: TNode<Type> | null,
}

export class MyList<Type> {
    private head: TNode<Type> | null
    private end: TNode<Type> | null
    private length: number

    constructor() {
        this.head = null
        this.end = null
        this.length = 0
    }

    public getElement(iterator: Iterator<Type>): Type | null {
        return iterator.position?.element ?? null
    }

    public getHead(): Type | null {
        return this.head?.element ?? null
    }

    public getTail(): Type | null {
        return this.end?.element ?? null
    }

    public getBegin(): Iterator<Type> {
        return new Iterator(this.head)
    }

    public getEnd(): Iterator<Type> {
        return new Iterator(this.end)
    }

    public pop(): void {
        if (this.end && this.end.prev) {
            const prevElement: TNode<Type> = this.end.prev
            prevElement.next = null
            this.end = prevElement

            if (this.length > 0) {
                this.length -= 1
            }
        }
    }

    public push(element: Type): void {
        const addedElement: TNode<Type> = {
            element: element,
            prev: this.end,
            next: null
        }

        if (this.end) {
            this.end.next = addedElement
        }

        if (!this.head) {
            this.head = addedElement
        }

        this.end = addedElement
        this.length += 1
    }

    public shift(): void {
        if (this.head && this.head.next) {
            const nextElement: TNode<Type> = this.head.next
            nextElement.prev = null
            this.head = nextElement
        }

        if (this.length > 0) {
            this.length -= 1
        }
    }

    public unshift(element: Type): void {
        const addedElement: TNode<Type> = {
            element: element,
            prev: null,
            next: this.head
        }

        if (this.head) {
            this.head.prev = addedElement
        }

        if (!this.end) {
            this.end = addedElement
        }

        this.head = addedElement
        this.length += 1
    }

    public getLength(): number {
        return this.length
    }

    public deleteElement(iterator: Iterator<Type>): void {
        if (!iterator.position) {
            return
        }

        const prevElement: TNode<Type> | null = iterator.position.prev
        const nextElement: TNode<Type> | null = iterator.position.next

        if (prevElement) {
            prevElement.next = nextElement
        }

        if (nextElement) {
            nextElement.prev = prevElement
        }

        if (!prevElement && !nextElement) {
            this.head = null
            this.end = null
        }

        iterator.position = nextElement
    }

    public addAfterElement(iterator: Iterator<Type>, element: Type): void {
        if (!iterator.position) {
            return
        }

        const prevElement: TNode<Type> | null = iterator.position
        const nextElement: TNode<Type> | null = iterator.position.next
        const addedListElement: TNode<Type> = {
            element: element,
            prev: prevElement,
            next: nextElement
        }

        if (prevElement) {
            prevElement.next = addedListElement
        }

        if (nextElement) {
            nextElement.prev = addedListElement
        }

        iterator.position = addedListElement
    }
}