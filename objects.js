function Car() {
  this.color = "blue";
  this.drive = function() {
    console.log("Hey look! I'm moving");
  }
};

var accord = new Car();

accord.drive();