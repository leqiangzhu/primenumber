

var prime = function(num) {
  if (num < 2) return [];
  else {
    var result = [];
    for (var i = num; i>=2; i--) {
      result.push(i);
    }
    for (var prime=2; prime<=num;prime++) {
      result = result.filter(function(number) {
        return (number % prime !== 0 || number === prime);
      });
    }
  return result;
  }
}








$(document).ready(function() {

  $("#prime-method").submit(function(event) {

    var userInput = $("#numInput").val();
    var output = prime(userInput);
    alert(output);
    // alert(output + " /////" + updatedArray);
    event.preventDefault();
  });
});
