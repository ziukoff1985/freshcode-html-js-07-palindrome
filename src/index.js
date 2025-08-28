'use strict';

const string = 'Cigar? Toss it in a can. It is so tragic.';

function isStrPalindrome(string) {
    const normalizedStr = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(normalizedStr);
    const reversedStr = normalizedStr.split('').reverse().join('');
    console.log(reversedStr);
    return normalizedStr === reversedStr;
}

console.log(isStrPalindrome(string));
