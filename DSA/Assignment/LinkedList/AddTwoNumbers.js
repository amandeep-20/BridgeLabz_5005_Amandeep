import { LinkedList } from './LinkedList.js';

function addTwoNumbers(list1, list2) {
    const result = new LinkedList();
    let carry = 0;
    let p1 = list1.head;
    let p2 = list2.head;

    while (p1 || p2 || carry > 0) {
        const sum = (p1?.data || 0) + (p2?.data || 0) + carry;
        result.append(sum % 10);
        carry = Math.floor(sum / 10);

        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
    }

    return result;
}

const list1 = new LinkedList();
list1.append(2);
list1.append(4);
list1.append(3);

const list2 = new LinkedList();
list2.append(5);
list2.append(6);
list2.append(4);

const sumList = addTwoNumbers(list1, list2);
console.log('Add Two Numbers:', sumList.printList());
