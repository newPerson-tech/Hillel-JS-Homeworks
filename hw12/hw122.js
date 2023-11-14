function isPalindrome(word) {
	// Step 1- Put a pointer at each extreme of the word
    // Step 2 - Iterate the string "inwards"
	// Step 3 - At each iteration, check if the pointers represent equal values
	// If this condition isn't accomplished, the word isn't a palindrome
    let left = 0
    let right = word.length-1

    while (left < right) {
        if (word[left] !== word[right]) return false
        left++
        right--
    }
    
    return true
}

let inputStr = prompt('Please, enter any string here to check', ' ');

isPalindrome(inputStr);