'use strict';

const string = 'Are we not drawn onward, we few, drawn onward to new era?';

function isStrPalindrome(string) {
    const normalizedStr = string.toLowerCase().replace(/[\s\W]/g, '');
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}

isStrPalindrome(string)
    ? console.log(`'${string}': is palindrome`)
    : console.log(`'${string}': is not palindrome`);

// * регулярний вираз (простий) з метасимволами: /[\s\W]/g - видалити пробіли та небуквенні символи
// * регулярний вираз (альтернативний): /[^a-z0-9]/g - видалити всі символи, крім букв та цифр
