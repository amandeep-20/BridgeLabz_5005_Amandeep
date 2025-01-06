// Remove N-th Node from End of List
// Given a linked list and an integer n, remove the n-th node from the end of the list.

import { LinkedList, Node } from "./LinkedList.js";

function removeNthFromEnd(list, n) {
    let dummy = new Node(0);
    dummy.next = list.head;
    let fast = dummy;
    let slow = dummy;

    for (let i = 1; i <= n + 1; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    list.head = dummy.next;
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

removeNthFromEnd(list, 2);

console.log(list.printList());
