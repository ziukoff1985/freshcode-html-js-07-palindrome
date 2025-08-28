'use strict';

const string = 'Are we not drawn onward, we few, drawn onward to new era?';

function isStrPalindrome(string) {
    const normalizedStr = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}

isStrPalindrome(string)
    ? console.log(`'${string}': is palindrome`)
    : console.log(`'${string}': is not palindrome`);
