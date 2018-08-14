var isPalidrome = function(txt) {
  var txtArray = txt.split("");
  var halfCount = (txtArray.length) / 2;
  var firstHalf = txtArray.slice(0,halfCount);
  if (txtArray.length % 2 === 0) { //even
    var lastHalf = txtArray.slice(halfCount);
  } else { //odd
    var lastHalf = txtArray.slice(halfCount + 1);
  }
  var lastHalf = lastHalf.reverse();
  if (firstHalf.toString() === lastHalf.toString()) {
    return true;
  } else {
    return false;
  }
};


$(document).ready(function() {

  $("#palidrome-method").submit(function(event) {

    var phrase = $("input#txtInput").val();
    var phrase = phrase.toLowerCase();
    var output = isPalidrome(phrase);
    alert(output);
    event.preventDefault();
  });
});
