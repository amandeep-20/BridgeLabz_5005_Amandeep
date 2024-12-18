class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add node at the end
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    // Add node at the beginning
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Insert at a specific position
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return;
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.size) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);
        let current = this.head;
        let i = 0;

        while (i < index) {
            current = current.next;
            i++;
        }

        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
        this.size++;
    }

    // Remove a node by value
    remove(value) {
        if (!this.head) return;

        let current = this.head;

        while (current) {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) this.head.prev = null;
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    if (this.tail) this.tail.next = null;   
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return;
            }
            current = current.next;
        }
    }

    // Remove a node at a specific position
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
            return;
        }

        let current = this.head;
        let i = 0;

        if (index === 0) {
            this.head = current.next;
            if (this.head) this.head.prev = null;
        } else if (index === this.size - 1) {
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = null;
        } else {
            while (i < index) {
                current = current.next;
                i++;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.size--;
    }

    // Search for a value
    search(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index++;
        }
        return -1; // Not found
    }

    // Print the list forward
    printForward() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + " <-> ";
            current = current.next;
        }
        console.log(result + "null");
    }

    // Print the list backward
    printBackward() {
        let current = this.tail;
        let result = "";
        while (current) {
            result += current.value + " <-> ";
            current = current.prev;
        }
        console.log("null <-> " + result.slice(0, -5));
    }

    // Get the size of the list
    getSize() {
        return this.size;
    }
}

const dll = new DoublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);
dll.prepend(5);
dll.insertAt(15, 2);

dll.printForward(); 
dll.printBackward();

dll.remove(20);
dll.printForward();

dll.removeAt(0);
dll.printForward();


console.log(dll.search(15)); 
console.log(dll.search(50)); 