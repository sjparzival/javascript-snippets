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