function balancedParentheses(s) {
    const stack = [];
    for (const char of s) {
        if (char === '(') stack.push(')');
        else if (stack.length === 0 || stack.pop() !== char) return false;
    }
    return stack.length === 0;
}

console.log(balancedParentheses("()()"));
console.log(balancedParentheses("(())"));
console.log(balancedParentheses("(()"));
