// Find the Middle Element of a Linked List
// Given a linked list, find the middle element.

import { LinkedList, Node } from "./LinkedList.js";

function findMiddle(list) {
    let slow = list.head;
    let fast = list.head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data;
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Middle Element: " + findMiddle(list));
