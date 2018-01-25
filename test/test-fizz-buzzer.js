// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz-buzz if number is divisible by 15', function() {
    const normalCases = [
      {num: 15, expected: 'fizz-buzz'}
    ];
    normalCases.forEach(function(input) {
      const answerFizzBuzz = fizzBuzzer(input.num);
      expect(answerFizzBuzz).to.equal(input.expected);
    });
  });
  it('should return buzz if number is divisible by 5', function() {
    const normalCases = [
      {num: 5, expected: 'buzz'}
    ];
    normalCases.forEach(function(input) {
      const answerBuzz = fizzBuzzer(input.num);
      expect(answerBuzz).to.equal(input.expected);
    });
  });
  it('should return fizz if number is divisible by 3', function() {
    const normalCases = [
      {num: 3, expected: 'fizz'}
    ];
    normalCases.forEach(function(input) {
      const answerFizz = fizzBuzzer(input.num);
      expect(answerFizz).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      'a',
      '1',
      false
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
