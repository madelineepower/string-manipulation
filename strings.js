console.log("hey");
var input = document.getElementById("input");
var output = document.getElementById("output");
var button = document.getElementById("button");
var testString = "";


function reversal(string) {
  var reversed = string.split("").reverse().join("");
  output.innerHTML += `<p>Reversed: ${reversed}</p>`;
}

function alphabits(string) {
  var inOrder = string.split("").sort("").join("");
  output.innerHTML += `<p>In alphatical order: ${inOrder}</p>`;
}

function palindrome(string) {
  var reversedString = string.split("").reverse().join("");
  if (reversedString == string) {
    output.innerHTML += `<p>Your string is a palindrome</p>`;
  } else {
    output.innerHTML += `<p>Your string is not a palindrome</p>`;
  }
}


button.addEventListener("click", function(event){
  var testString = input.value;
  reversal(testString);
  alphabits(testString);
  palindrome(testString);
})
