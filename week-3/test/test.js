const {
  convertTime,
  isPalindrome,
  longestWord,
  reverseString
} = require("../");
const { expect } = require("chai");

describe("challenge problems", () => {
  describe("reverseString", () => {
    it("racecar", () => {
      expect(reverseString("racecar")).to.equal("racecar");
    });

    it("javascript", () => {
      expect(reverseString("javascript")).to.equal("tpircsavaj");
    });
  });

  describe("longestWord", () => {
    it("how are you?", () => {
      expect(longestWord("how are you?")).to.equal("you?");
    });

    it("i love javascript", () => {
      expect(longestWord("i love javascript")).to.equal("javascript");
    });
  });

  describe("convertTime", () => {
    it("how are you?", () => {
      expect(convertTime(126)).to.equal("2:6");
    });

    it("i love javascript", () => {
      expect(convertTime(63)).to.equal("1:3");
    });
  });

  describe("isPalindrome", () => {
    it("racecar", () => {
      expect(isPalindrome("racecar")).to.be.true;
    });

    it("javascript", () => {
      expect(isPalindrome("javascript")).to.be.false;
    });
  });
});
