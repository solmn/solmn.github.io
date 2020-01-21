(function() {
    "use strict";
      /*
         API: MY OWN MAP AND FILTER FUNCTIONS
      */
      function map (array, func) {
        const new_array = [];
        for (let i = 0; i < array.length; i++) {
          const result = func(array[i], i, array);
          new_array.push(result);
        }
        return new_array;
      }

      function filter (array, func) {
        const new_array = [];
        for (let i = 0; i < array.length; i++) {
          const result = func(array[i], i, array);
          if (result) {
            new_array.push(array[i]);
          }
        }
        return new_array;
      }

 /* auxilary functions for testing */

 function addTen (a) {
    return map(a, (e) =>  e + 10);
 }

 function getFullNames(names) {
   return map(names, (n) => n.first + " " + n.last);
 }


function getGreaterNumbers (numbers, i) {
  return filter(numbers, (n) => n > i);
}

function  getNameStartWith(names, c) {
  return filter(names, (n) => n.startsWith(c));
}
 /*    TEST */

 describe("MAP: Add 10 to each number", function() {

     context("when [1, 2, 3,4] is entered", function() {
         it("the the result is [11, 12, 13,  14]", function() {
             assert.equal(JSON.stringify(addTen([1, 2, 3, 4])), JSON.stringify([11, 12, 13,  14]));
         });
     });

 });
 describe("MAP: get full name", function() {

     context('when is [{"first": "Solomon", "last": "Mehari"}, {"first": "Thomas", "last": "Edson"}]  entered', function() {
         it('the the result ["Solomon Mehari", "Thomas Edson"]', function() {
             assert.equal(JSON.stringify(getFullNames([{"first": "Solomon", "last": "Mehari"}, {"first": "Thomas", "last": "Edson"}])), JSON.stringify(["Solomon Mehari", "Thomas Edson"]));
         });
     });

 });



 describe("Filter: Numbers greater than given number", function() {

     context("when [1, 2, 3, 4, 5, 6 ,7 ,8] and 5  is entered", function() {
         it("the the result is [6, 7 ,8]", function() {
             assert.equal(JSON.stringify([6, 7, 8]), JSON.stringify(getGreaterNumbers([1, 2, 3, 4, 5, 6 ,7 ,8], 5)));
         });
     });

 });

 describe("Filter: get names that starts with given character", function() {

     context('when is ["Solomon Mehari", "Thomas Edson"]  and "T" entered', function() {
         it('the the result ["Thomas Edson"]', function() {
             assert.equal(JSON.stringify(getNameStartWith(["Solomon Mehari", "Thomas Edson"], 'T')), JSON.stringify(["Thomas Edson"]));
         });
     });

 });



}());
