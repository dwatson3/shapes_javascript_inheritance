var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.

function Rectangle(length, width) { // TODO: THIS IS JUST A PLACE HOLDER, PLEASE CHANGE.
 this.length = length;
 this.width = width;
}

// creating inheritance from the Parent class "Shape"
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;
// ended creating inheritance from the Parent class "Shape"


Rectangle.prototype.area = function() {
  return (this.length * this.width)
}

Rectangle.prototype.perimeter = function() {
	return (this.length * 2) + (this.width * 2)
}



// Rectangle.prototype. = Object.create()

module.exports = Rectangle;
