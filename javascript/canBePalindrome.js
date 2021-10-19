// https://replit.com/@alexandraturian/onePermutationPalindrom#index.js

const canBePalindrome = (word) => {
  const mapping = new Set();
  // this will print each letter of a word. A word is NOT a palindrome if it has more than 1 element which hasn't a pair.
  for (let letter of word) {
    if (mapping.has(letter)) {
      mapping.delete(letter);
    } else {
      mapping.add(letter);
    }
  }

  if (mapping.size > 1) {
    console.log("This canNOT be a palindrome!");
  } else {
    console.log("This can be a palindorme!");
  }
};
