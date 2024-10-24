const getLengthCheck = function (textForInspect, value ) {
  return (textForInspect.length <= value) ? true : false
}

const getPalindromeCheck = function (word) {
  const palindrome = word.replaceAll(' ', '').toLowerCase();
  const palindromeReverse = palindrome.split('').reverse().join('');;
  return (palindrome === palindromeReverse) ? true : false
}

