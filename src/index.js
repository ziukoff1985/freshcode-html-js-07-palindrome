'use strict';

const targetStr = 'Some men interpret nine memos';
const separator = '';

function isStrPalindrome(string, separator) {
    const targetStrWithoutSpaces = string
        .toLowerCase()
        .replaceAll(' ', separator);
    const targetStrWithoutSpacesReversed = targetStrWithoutSpaces
        .split(separator)
        .reverse()
        .join(separator);
    return targetStrWithoutSpaces === targetStrWithoutSpacesReversed;
}

console.log(isStrPalindrome(targetStr, separator));
