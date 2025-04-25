// Exercice 1 : Inverser une chaîne de caractères
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"

// Exercice 2 : Trouver le nombre maximum
function findMax(numbers) {
    return Math.max(...numbers);
}
console.log(findMax([1, 5, 3, 9, 2])); // 9

// Exercice 3 : Compter les voyelles dans une chaîne
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
}
console.log(countVowels("Hello World")); // 3

// Exercice 4 : Vérifier si un mot est un palindrome
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// Exercice 5 : Somme des nombres pairs
function sumEven(numbers) {
    return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}
console.log(sumEven([1, 2, 3, 4, 5, 6])); // 12 (2 + 4 + 6 = 12)
console.log(sumEven([7, 8, 9, 10])); // 18 (8 + 10 = 18)
console.log(sumEven([1, 3, 5, 7])); // 0 (pas de nombres pairs)
