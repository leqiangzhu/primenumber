var primeArray = [2];

var isPrime = function(inputNumber) {
  var numArray = [];
  //make first array of all potential prime numbers
  for (i=2;i<inputNumber;i++) {
    numArray.push(i);
  }
  var updatedArray = [];
  var loop = numArray.length;
  //remove multiples of the first prime number
  for(x=0;updatedArray.length <= 1;x++) {

    for (i=0;i<=loop;i++) {
      if (numArray[i] % primeArray[x] !== 0) {
        updatedArray.push(numArray[i]);
      }
    };
    // alert("e" + even + " o " + odd);
    // alert(numArray + " . " + updatedArray);
    loop = updatedArray.length;
    return updatedArray;
    primeArray.push(updatedArray[0]);
  };
};

// updatedArray.splice(0);




$(document).ready(function() {

  $("#prime-method").submit(function(event) {

    var userInput = $("#numInput").val();
    var output = isPrime(userInput);
    alert(output);
    event.preventDefault();
  });
});
