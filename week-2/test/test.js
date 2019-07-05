const { map, filter, reduce } = require("../level-3");
const { expect } = require("chai");

xdescribe("higher order functions", () => {
  describe("map", () => {
    it("should return an array of mapped values", () => {
      expect([2, 4, 6]).to.eql(map([1, 2, 3], (e, i, arr) => e * 2));
    });
  });

  describe("filter", () => {
    it("should return a filtered array", () => {
      expect([3]).to.eql(filter([1, 2, 3], (e, i, arr) => i === 2));
    });
  });

  describe("reduce", () => {
    it("should reduce an array", () => {
      expect(6).to.eql(reduce([1, 2, 3], (acc, e, i, arr) => acc + e));
    });
  });
});
