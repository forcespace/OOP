import {TNode} from './MyList'

export class Iterator<Type> {
    position: TNode<Type> | null

    constructor(position: TNode<Type> | null) {
        this.position = position
    }

    public next(): TNode<Type> | null {
        this.position = this.position?.next ?? null
        return this.position
    }

    public prev(): TNode<Type> | null {
        this.position = this.position?.prev ?? null
        return this.position
    }

    public valid(): boolean {
        return Boolean(this.position?.next)
    }
}