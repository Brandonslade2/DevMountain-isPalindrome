// Write your code below

/* I did not see the second part of the directions, but the below code is not considering that.


const isPalindrome = word => {
    let backwardsword = ''
    let lowercaseword = word.toLowerCase()
    for (i = lowercaseword.length - 1; i >= 0; i--) {
      backwardsword += lowercaseword[i]
    }
    if (backwardsword == lowercaseword) {
        return true
    } else if (backwardsword !== lowercaseword) {
        return false
    }
}
  
  
  console.log(isPalindrome("Racecar"))

  */


  const isPalindrome = word => {
    let backwardsword = ''
    for (i = word.length - 1; i >= 0; i--) {
      backwardsword += word[i]
    }
    if (backwardsword == word) {
        return true
    } else if (backwardsword !== word) {
        return false
    }
}

console.log(isPalindrome("racecar"))