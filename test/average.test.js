const { expect } = require("chai");
const { average } = require("../average");

it("computes average of a list of numbers", () => {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it("reports the average as NaN on an empty list", () => {
  expect(average([])).to.be.NaN;
});

it("ignores NaN in the input", () => {
  expect(average([1, 2, NaN])).to.be.approximately(1.5, 0.01);
});

it("ignores outliers in the input", () => {
  expect(average([10, 15, 20, 20, 8, 17, 10000])).to.be.approximately(15, 0.01);
});
