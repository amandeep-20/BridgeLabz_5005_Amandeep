import { LinkedList, Node } from './LinkedList.js';

function rearrangeLinkedList(list) {
    if (!list.head || !list.head.next) return list;

    let slow = list.head;
    let fast = list.head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let firstHalf = list.head;
    let secondHalf = slow.next;
    slow.next = null;

    let prev = null;
    let current = secondHalf;
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    secondHalf = prev;

    let dummy = new Node(0);
    current = dummy;

    while (firstHalf || secondHalf) {
        if (firstHalf) {
            current.next = firstHalf;
            current = current.next;
            firstHalf = firstHalf.next;
        }
        if (secondHalf) {
            current.next = secondHalf;
            current = current.next;
            secondHalf = secondHalf.next;
        }
    }

    list.head = dummy.next;
    return list;
}

const rearrangeList = new LinkedList();
rearrangeList.append(1);
rearrangeList.append(2);
rearrangeList.append(3);
rearrangeList.append(4);
rearrangeList.append(5);

rearrangeLinkedList(rearrangeList);
console.log('Rearranged List:', rearrangeList.printList());
