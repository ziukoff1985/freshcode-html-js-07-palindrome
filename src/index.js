'use strict';

const string = 'A man, a plan, a canal: Panama';

function isStrPalindrome(string) {
    const separator = '';
    const normalizedStr = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(normalizedStr);
    const reversedStr = normalizedStr
        .split(separator)
        .reverse()
        .join(separator);
    console.log(reversedStr);
    return normalizedStr === reversedStr;
}

console.log(isStrPalindrome(string));
