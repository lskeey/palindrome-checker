const userInput = document.getElementById("text-input")
const checkButton = document.getElementById("check-btn")
const resultDiv = document.getElementById("result")

const isPalindrome = str => {
  if (str === "") {
    alert("Please input a value")
    return
  }

  const originalStr = str
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "")

  let left = 0;
  let right = str.length - 1

  while (left < right) {
    if (str[left] !== str[right]) {
      resultDiv.innerHTML = `<strong>${originalStr}</strong> is not a palindrome.`
      return
    }
    left++
    right--
  }
  resultDiv.innerHTML = `<strong>${originalStr}</strong> is a palindrome.`
}

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    isPalindrome(userInput.value)
    userInput.value = ""
  }
})

checkButton.addEventListener("click", () => {
  isPalindrome(userInput.value)
  userInput.value = ""
})