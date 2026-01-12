class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        if(this.headNode === null) return this.prepend(value);
        let current = this.headNode;

        while(current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = new Node(value, null);
    }

    prepend(value) {
        const node = new Node(value, this.headNode);
        this.headNode = node;
    }

    size() {
        let count = 0;
        let current = this.headNode;
        while(current !== null) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    head() {
        return this.headNode;
    }

    tail() {
        if(!this.headNode) return null;

        let tail = this.headNode;
        while(tail.nextNode) {
            tail = tail.nextNode;
        }
        return tail;
    }

    at(index) {
        const currentSize = this.size();
        if(this.headNode === null || index >= currentSize) return undefined;
        let current = this.headNode;

        for(let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current.value;
    }

    pop() {
        if(this.headNode === null) return undefined;
        const poppedValue = this.headNode.value;
        this.headNode = this.headNode.nextNode;
        return poppedValue;
    }

    contains(value) {
        let current = this.headNode;
        while(current !== null) {
            if(current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    findIndex(value) {
        let index = 0;
        let current = this.headNode;

        while(current !== null) {
            if(current.value === value) {
                return index;
            } else {
                current = current.nextNode;
                index++;
            }
        }
        return -1;
    }

    toString() {

    }

    insertAt(index, ...values) {
        
    }
}
