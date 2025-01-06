// Detect a Cycle in a Linked List
// Given a linked list, determine if it has a cycle in it.

import { LinkedList, Node } from "./LinkedList.js";

function hasCycle(list) {
    let slow = list.head;
    let fast = list.head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);

list.head.next.next.next.next = list.head.next;

console.log("Cycle Detected: " + hasCycle(list));
