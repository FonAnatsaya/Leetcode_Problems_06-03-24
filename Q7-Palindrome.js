const longestPalindromicSubString = (string) => {
  const palindromic_words = {};
  for (let i = 0; i < string.length; i++) {
    let word = string[i];
    for (let j = i + 1; j < string.length; j++) {
      word += string[j];
      const reverse_word = word.split("").reverse().join("");
      if (word === reverse_word) palindromic_words[word] = word.length;
    }
  }
  const max_palindromic_length = Math.max(...Object.values(palindromic_words));
  const longest_palindromic_words = Object.keys(palindromic_words).filter(
    (word) => palindromic_words[word] === max_palindromic_length
  );

  return longest_palindromic_words[0];
};
