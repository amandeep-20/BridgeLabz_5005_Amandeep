import { LinkedList, Node } from './LinkedList.js';

function getIntersectionNode(list1, list2) {
    let p1 = list1.head;
    let p2 = list2.head;

    let len1 = 0, len2 = 0;
    while (p1) {
        len1++;
        p1 = p1.next;
    }
    while (p2) {
        len2++;
        p2 = p2.next;
    }

    p1 = list1.head;
    p2 = list2.head;
    if (len1 > len2) {
        for (let i = 0; i < len1 - len2; i++) p1 = p1.next;
    } else {
        for (let i = 0; i < len2 - len1; i++) p2 = p2.next;
    }

    while (p1 && p2) {
        if (p1 === p2) return p1;
        p1 = p1.next;
        p2 = p2.next;
    }

    return null;
}

const intersectList1 = new LinkedList();
const intersectList2 = new LinkedList();
const commonNode = new Node(8);

intersectList1.append(3);
intersectList1.append(7);
intersectList1.head.next.next = commonNode;
commonNode.next = new Node(10);

intersectList2.append(99);
intersectList2.append(1);
intersectList2.head.next.next = commonNode;

const intersection = getIntersectionNode(intersectList1, intersectList2);
console.log('Intersection Node:', intersection ? intersection.data : null);
