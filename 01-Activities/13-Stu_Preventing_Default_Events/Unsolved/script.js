// Save all of the html elements i need into a variable
var $total = document.getElementById("total");
var $tip = document.getElementById("tip");
var $submit = document.getElementById("submit");
var $tipAmount = document.getElementById("tip-amount");
var $newTotal = document.getElementById("new-total");
var $submit2 = document.getElementById("submit2");
// add an event listener to the button
var nums = [1,2,3,4,5];
var calculateTip = function(e) {
  // Since the button is inside of a form tag,
  //  i need to prevent the default behavior from happening
  e.preventDefault();
  // Grab the value from the total input field
  // turn that value into a number
  var totalMeal = parseInt($total.value);
  // Grab the value from the tip input  field
  var tip = parseInt($tip.value);
  //  turn that value intoa number
  // create a variable by turning the tip into a decimal
  var tipTotal = tip * 0.01;
  // create a variable for the actual tip
  var realTipTotal = totalMeal * tipTotal;
  // create a variable with the total + tip
  var realTotal = totalMeal + realTipTotal;
  // change the text content of the tip amount to the actual tip amount
  $tipAmount.textContent = realTipTotal.toFixed(2);
  // change the text for the new total into the actual total
	$newTotal.textContent = JSON.stringify({name: "Manny"});
	var jsoned = JSON.stringify([{name: "Manny", stuff: {pc: "whatever"}}, {name: "Ian"}, {name: "hello"}]);
	var backToObject = JSON.parse(jsoned);
	console.log(backToObject);
};




$submit.addEventListener("click", calculateTip);


var  myCallbackFn = function(someArg, callback) {
	callback(someArg);
};


myCallbackFn("manny", function(element){
	console.log(element + " jucaban");
});
