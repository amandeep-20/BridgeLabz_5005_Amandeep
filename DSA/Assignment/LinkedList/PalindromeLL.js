import { LinkedList } from './LinkedList.js';

function reverseList(head) {
    let prev = null;
    while (head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

function isPalindrome(list) {
    if (!list.head || !list.head.next) return true;

    let slow = list.head;
    let fast = list.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondHalf = reverseList(slow);
    let firstHalf = list.head;

    while (secondHalf) {
        if (secondHalf.data !== firstHalf.data) return false;
        secondHalf = secondHalf.next;
        firstHalf = firstHalf.next;
    }

    return true;
}

const palindromeList = new LinkedList();
palindromeList.append(1);
palindromeList.append(2);
palindromeList.append(2);
palindromeList.append(1);

console.log('Is Palindrome:', isPalindrome(palindromeList));
