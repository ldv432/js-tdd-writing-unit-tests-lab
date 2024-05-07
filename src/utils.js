// Your code here
export function isPalindrome(word) {
    // Convert the word to lowercase and remove non-alphanumeric characters
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the clean word with its reverse
    return cleanWord === cleanWord.split('').reverse().join('');
}