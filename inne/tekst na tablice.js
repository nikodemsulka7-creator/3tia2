const str = 'the quick brown fox jumps over the lazy dog.';


// Podział tekstu na słowa
const words = str.split(' ');
console.log(words[3]); // "fox"


// Podział tekstu na pojedyncze znaki
const chars = str.split('');
console.log(chars[8]); // "k"