var Shape = require("../src/shape");
console.log(Shape);

var shape;
shape = new Shape(1,"red");
console.log(shape.color);

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

  describe("Area", function() {
    it("should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
  });

 describe("Perimeter", function() {
    it("should be 0 for this abstract shape", function() {
      expect(shape.perimeter()).toEqual(0);
    });
  });

 describe("Draw", function() {
 	xit("should return a shape with sides", function() {
 	  expect(shape.draw()).toEqual()
 	});
 });


  describe("Get RGB", function() {
  	it("should retrieve the RGB color", function() {
  	  expect(shape.getRGB()).toEqual("rgb(255,0,0)");
  	});
  });
  // Write more specs!!
});
