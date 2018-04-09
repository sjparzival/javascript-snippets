//executing callback functions

//to sleep after eat
var eat = function() {
  console.log("Done Eating!");	
}

var sleep = function(eat) {
  eat();
  console.log("I'm gonna sleep now! GoodNight!");
}

sleep(eat);

/* ---- end ------*/


//apply and call example -- these functions are used to call a function with a specified context(this) instead of the function's own context(this)
/* They both are the same except that apply takes an array as argument and call takes as many parameters */

//example1
function bus() {
  console.log(this.color);
}

var car = {
  color: 'red'
};

bus.apply(car); //expects bus to print red

//example2
var object1 = {
  function1: function() {
  	console.log(this.color);
  }
}

var object2 = {
  color: "yellow"
}

object1.function1.apply(object2);

/* ---- end ------*/
