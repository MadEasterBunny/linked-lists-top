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
        
    }

    tail() {

    }

    at(index) {

    }

    pop() {

    }

    contains(value) {

    }

    findIndex(value) {

    }

    toString() {

    }

    insertAt(index, ...values) {
        
    }
}
