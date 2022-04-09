function reverseString(str) {
  // type your code here. i = arr.length which will get us the index of the last element. have to create a loop
  let newStr = ""
  for (let i = str.length-1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr
}
console.log(reverseString("YDDADNIAH"))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
