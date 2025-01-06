// Reverse a Linked List
// Given a linked list, reverse it and return the head of the reversed list.

import { LinkedList, Node } from "./LinkedList.js";

function reverseLinkedList(list) {
    let prev = null;
    let current = list.head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    list.head = prev;
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log("Original List:");
console.log(list.printList());

reverseLinkedList(list);

console.log("Reversed List:");
console.log(list.printList());
