function validParentheses(s) {
    const stack = [];
    const map = { ')': '(', ']': '[', '}': '{' };
    for (const char of s) {
        if (!map[char]) stack.push(char);
        else if (stack.pop() !== map[char]) return false;
    }
    return stack.length === 0;
}

console.log(validParentheses("{[()]}"));
console.log(validParentheses("{[(])}"));
console.log(validParentheses("{[()][]}"));
