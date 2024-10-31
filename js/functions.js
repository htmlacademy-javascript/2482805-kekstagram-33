const getLengthCheck = function (textForInspect, value) {
  return (textForInspect.length <= value);
};

getLengthCheck ('Мама', 20);

const getPalindromeCheck = function (word) {
  const palindrome = word.replaceAll(' ', '').toLowerCase();
  const palindromeReverse = palindrome.split('').reverse().join('');
  return (palindrome === palindromeReverse);
};

getPalindromeCheck ('Маам');
