const paragraph = "Hello world! Hello again. I hope the world is a great place.";
const words = paragraph.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
const wordFrequency = words.reduce((map, word) => {
  if (map.has(word)) {
    map.set(word, map.get(word) + 1);
  } else {
    map.set(word, 1);
  }
  return map;
}, new Map());
console.log(Array.from(wordFrequency.entries()));