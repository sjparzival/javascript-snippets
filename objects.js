//method1
function Car() {
  this.color = "blue";
  this.drive = function() {
    console.log("Hey look! I'm moving");
  }
};

var accord = new Car();
accord.drive();

//method2
var fan = {
  spin: function() {
  	console.log("woo woo! I'm spinning");
  },

  color: 'brown'
}

console.log(fan.color); //brown

fan.spin(); //woo woo! i'm spinning