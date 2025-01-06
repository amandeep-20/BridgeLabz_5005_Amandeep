// Merge Two Sorted Linked Lists
// Given two sorted linked lists, merge them into a single sorted list.

import { LinkedList, Node } from "./LinkedList.js";

function mergeLists(list1, list2) {
    let dummy = new Node(0);
    let current = dummy;
    let p1 = list1.head;
    let p2 = list2.head;

    while (p1 !== null && p2 !== null) {
        if (p1.data < p2.data) {
            current.next = p1;
            p1 = p1.next;
        } else {
            current.next = p2;
            p2 = p2.next;
        }
        current = current.next;
    }

    if (p1 !== null) {
        current.next = p1;
    }

    if (p2 !== null) {
        current.next = p2;
    }

    let mergedList = new LinkedList();
    mergedList.head = dummy.next;
    return mergedList;
}

const list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);

const list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);

const mergedList = mergeLists(list1, list2);

console.log("Merged List:");
console.log(mergedList.printList());
