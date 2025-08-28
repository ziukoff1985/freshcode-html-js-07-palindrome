'use strict';

const string = 'Some men interpret nine memos';
const separator = '';

function isStrPalindrome(string, separator) {
    const stringWithoutSpaces = string.toLowerCase().replaceAll(' ', separator);
    const stringWithoutSpacesReversed = stringWithoutSpaces
        .split(separator)
        .reverse()
        .join(separator);
    return stringWithoutSpaces === stringWithoutSpacesReversed;
}

console.log(isStrPalindrome(string, separator));
