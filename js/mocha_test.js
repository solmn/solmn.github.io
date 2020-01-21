/*jshint esversion: 6  */

(function() {
    "use strict";

  let maximum = {
      max (x, y) {
           return x > y ? x : y;
      },
      maxOfThree (x, y, z) {
            if ( x >= y && x >= z) {
              return x;
            }
            else if (y >= x && y >= z) {
              return y;
            }
            else {
              return z;
            }
        }
  };

  function isVowel(x) {
      let c = x.toLowerCase();
      return c == "a" || c == "i" || c == "e" || c == "u";
  }

  function sum (arr) {
         return arr.reduce((prev, e, array) => prev + e)
  }

  function multiply (arr) {
    return arr.reduce((prev, e, array) => prev * e)
  }

  function reverse (s) {
    let rev = "";
    for (let i = s.length; i >= 0; i--) {
      rev+=s.charAt(i);
    }
    return rev;
  }

  function findLongestWord (a) {
    return a.map(s => s.length)
            .reduce((max, e) => e > max ? e : max);
  }

  function filterLongWords (a, i) {
    return a.filter(e => e.length > i);
  }


  function multiplyByTen (a) {
       return a.map(e =>  e * 10);
  }

  function filterEqualToNumber (a,n) {
      return a.filter(e => e == n);
  }

  function productOfAll (a) {
    return a.reduce((p, e) => p * e);
  }




    describe("Maximum", function() {

        context("when 3 and 6 entered", function() {
            it("6 is the maximum number", function() {
                assert.equal(maximum.max(3, 6), 6);
            });
        });
        context("when 4, 7 and 6 entered", function() {
            it("7 is the maximum number", function() {
                assert.equal(maximum.maxOfThree(4,7, 6), 7);
            });
        });

    });

    describe("Vowel", function() {

        context("When character 'e' is entered", function() {
            it("'e' is a vowel", function() {
                assert.equal(isVowel('e'), true);
            });
        });
        context("When character 's' is entered", function() {
            it("'s' is not a vowel", function() {
                assert.equal(isVowel('s'), false);
            });
        });

    });

    describe("sum", function() {

        context("when [1, 2, 3,4] is entered", function() {
            it("the sum is 10", function() {
                assert.equal(sum([1, 2, 3, 4]), 10);
            });
        });
        context("when [-10, 4, 6] is entered", function() {
            it("the sum is 0", function() {
                assert.equal(sum([-10, 4, 6]), 0);
            });
        });

    });

    describe("Multiply", function() {

        context("when [1, 2, 3,4] is entered", function() {
            it("the the result is 24", function() {
                assert.equal(multiply([1, 2, 3, 4]), 24);
            });
        });
        context("when [-10, 4, 6] is entered", function() {
            it("the result is -240", function() {
                assert.equal(multiply([-10, 4, 6]), -240);
            });
        });

    });

    describe("Reverse", function() {

        context("when 'hello' is entered", function() {
            it("the the result is 'olleh'", function() {
                assert.equal(reverse('hello'), 'olleh');
            });
        });
    });

    describe("Longest word length", function() {

        context("when ['abc', 'abcd', 'abcde'] is entered", function() {
            it("the longest word length is is  5", function() {
                assert.equal(findLongestWord(['abc', 'abcd', 'abcde']), 5);
            });
        });
    });
    describe("Long word", function() {

        context("when ['abc', 'abcd', 'abcde'] and length 4 is entered", function() {
            it("the word its length greater than 4 is ['abcde']", function() {
                assert.equal(JSON.stringify(filterLongWords(['abc', 'abcd', 'abcde'], 4)), JSON.stringify(['abcde']));
            });
        });
    });

    describe("Multiply by 10", function() {

        context("when [1, 2, 3,4] is entered", function() {
            it("the the result is [10, 20, 30,  40]", function() {
                assert.equal(JSON.stringify(multiplyByTen([1, 2, 3, 4])), JSON.stringify([10, 20, 30,  40]));
            });
        });

    });

    describe("Numbers equal to given number", function() {

        context("when [5, 2, 5, 4, 5] and 5  is entered", function() {
            it("the the result is [5, 5, 5]", function() {
                assert.equal(JSON.stringify([5, 5, 5]), JSON.stringify(filterEqualToNumber([5, 2, 5, 4, 5], 5)));
            });
        });

    });

    describe("Product", function() {

        context("when [1, 2, 3, 4]  is entered", function() {
            it("the the result is 24", function() {
                assert.equal(productOfAll([1, 2, 3, 4]), 24);
            });
        });

    });


}());
