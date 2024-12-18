class Node {
    constructor(data) {
        this.data = data;
        this.next = null; 
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a new node at the end
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {  // If the list is empty
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {  // Traverse to the last node
                current = current.next;
            }
            current.next = newNode; // Link the last node to the new node
        }
        this.size++;
    }

    // Add a new node at the beginning
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Delete a node by value
    delete(data) {
        if (!this.head) return;

        // If the head is the node to delete
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }

    // Print all nodes
    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' -> ';
            current = current.next;
        }
        console.log(result + 'null');
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.printList();
list.delete(10);
list.printList();