class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class CircularDoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Append a node to the end
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
            this.head.next = this.head.prev = newNode; // Circular link
        } else {
            newNode.prev = this.tail;
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head.prev = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Prepend a node to the start
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
            this.head.next = this.head.prev = newNode; // Circular link
        } else {
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.head.prev = newNode;
            this.tail.next = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Insert a node at a specific index
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

        newNode.next = current;
        newNode.prev = current.prev;
        current.prev.next = newNode;
        current.prev = newNode;
        this.size++;
    }

    // Remove a node by value
    remove(value) {
        if (!this.head) {
            console.log("The list is empty");
            return;
        }

        // If there's only one node
        if (this.head === this.tail && this.head.value === value) {
            this.head = this.tail = null;
            this.size--;
            return;
        }

        // If the value is at the head
        if (this.head.value === value) {
            this.head = this.head.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
            this.size--;
            return;
        }

        let current = this.head.next;

        while (current !== this.head) {
            if (current.value === value) {
                current.prev.next = current.next;
                current.next.prev = current.prev;

                // If the value is at the tail
                if (current === this.tail) {
                    this.tail = current.prev;
                }

                this.size--;
                return;
            }
            current = current.next;
        }

        console.log("Value not found in the list");
    }

    // Remove a node at a specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
            this.size--;
            return;
        }

        let current = this.head;
        let i = 0;

        while (i < index) {
            current = current.next;
            i++;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

        if (current === this.tail) {
            this.tail = current.prev;
        }

        this.size--;
    }

    // Search for a value and return its index
    search(value) {
        if (!this.head) return -1;

        let current = this.head;
        let index = 0;

        do {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        } while (current !== this.head);

        return -1;
    }

    // Print the list
    print() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        let result = "";
        let current = this.head;

        do {
            result += current.value + " <-> ";
            current = current.next;
        } while (current !== this.head);

        console.log(result + "(circular)");
    }

    // Get the size of the list
    getSize() {
        return this.size;
    }
}

const list = new CircularDoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print(); 

list.prepend(5);
list.print(); 

list.insertAt(25, 3);
list.print(); 

list.remove(25);
list.print(); 

list.removeAt(0);
list.print(); 

console.log("Index of 30:", list.search(30)); 
console.log("Size of list:", list.getSize()); 
