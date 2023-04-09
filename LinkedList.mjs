class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    printAll() {
        let currentNode = this.head;
        let text = "[";

        while (currentNode !== null) {
            text += currentNode.data;
            currentNode = currentNode.next;

            if (currentNode !== null) {
                text += ", ";
            }
        }

        text += "]";
        console.log(text);
    }

    clear() {
        this.head = null;
        this.count = 0;
    }

    insertAt(index, data) {
        if (index > this.count || index < 0) {
            throw new Error('out of range');
        }

        let newNode = new Node(data);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;

            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.count++;
    }

    insertLast(data) {
        this.insertAt(this.count, data);
    }

    deleteAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error('');
        }

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let currentNode = this.head;

            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            const deletedNode = currentNode.next;
            currentNode.next = deletedNode.next;
        }
        this.count--;
    }

    deleteLast() {
        if (this.count !== 0) {
            this.deleteAt(this.count - 1);
            this.count--;
        }
    }

    getNodeAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error('');
        }

        let currentNode = this.head;

        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

export { Node, LinkedList };
