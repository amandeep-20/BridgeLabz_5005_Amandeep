function getLetterFrequency(str) {
    const frequency = {};
    for (let char of str) {
        if (char !== ' ' && /[a-zA-Z]/.test(char)) {
            char = char.toLowerCase();
            frequency[char] = (frequency[char] || 0) + 1;
        }
    }
    const result = [];
    for (let letter in frequency) {
        result.push([letter, frequency[letter]]);
    }

    return result;
}
const str = "Hello World";
console.log(getLetterFrequency(str));