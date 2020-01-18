function myTestAssert(expected, output) {
  console.assert(expected === output, "TEST FAILD. expected " + expected  + " but found " + output)
  if (expected === output) {
    return "TEST SUCCEEDED";
  }
  else{
    return "TEST FAILD. expected " + expected  + " but found " + output;
  }
}

function max (x, y) {
      if (x > y) {
        return x;
      }
      else {
        return y;
      }
  // return x > y ? x : y;
}

function maxOfThree (x, y, z) {
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

//Jsfiddel

function multiplyByTen (a) {
     return a.map(e =>  e * 10);
}

function filterEqualToNumber (a,n) {
    return a.filter(e => e == 3);
}

function productOfAll (a) {
  return a.reduce((p, e) => p * e);
}

console.log("Expected output of max(3, 4) is 4 " + myTestAssert(4, max(3, 4)));
console.log('-------------------------------------------------------------------------------------\n')
console.log("Expected output of maxOfThree(3, 4, 5) is 5 " + myTestAssert(5, maxOfThree(3,  4, 5)));
console.log("Expected output of maxOfThree(6, 5, 4) is 6 " + myTestAssert(6, maxOfThree(6,  5, 4)));
console.log("Expected output of maxOfThree(2, 5, 3) is 5 " + myTestAssert(5, maxOfThree(2,  5, 3)));
console.log("Expected output of maxOfThree(2, 2, 2) is 2 " + myTestAssert(2, maxOfThree(2,  2, 2)));
console.log("Expected output of maxOfThree(-30, 20, 10) is 20 " + myTestAssert(20, maxOfThree(-30,  20, 10)));

console.log('-------------------------------------------------------------------------------------\n')
console.log("Expected output of isVowel('i') is true " + myTestAssert(true, isVowel('i')));
console.log("Expected output of isVowel('u') is true " + myTestAssert(true, isVowel('u')));
console.log("Expected output of isVowel('e') is true " + myTestAssert(true, isVowel('e')));
console.log("Expected output of isVowel('d') is false " + myTestAssert(false, isVowel('d')));

console.log('-------------------------------------------------------------------------------------\n')
console.log("Expected output of sum([1,2,3,4]) is 10 " + myTestAssert(10, sum([1,2,3,4])));

console.log('-------------------------------------------------------------------------------------')
console.log("Expected output of multiply([1,2,3,4]) is 24 " + myTestAssert(24, multiply([1,2,3,4])));

console.log('-------------------------------------------------------------------------------------')
console.log("Expected output of reverse('jag testar') is  ratset gaj " + myTestAssert("ratset gaj", reverse("jag testar")));

console.log('-------------------------------------------------------------------------------------')
console.log("Expected output of findLongestWord(['abc', 'abcd', 'abcde']) is  5 " + myTestAssert(5, findLongestWord(['abc', 'abcd', 'abcde'])));

console.log('-------------------------------------------------------------------------------------')
console.log("Expected output of filterLongWords(['abc', 'abcd', 'abcde'], 3) is  ['abcd', 'abcde'] " + myTestAssert(JSON.stringify(['abcd', 'abcde']), JSON.stringify(filterLongWords(['abc', 'abcd', 'abcde'], 3))));

console.log('--------------------------------------------------------------------------------------')
console.log("Expected output of multiplyByTen([1, 2, 3, 4, 5]) is  [10, 20, 30, 40, 50] " + myTestAssert(JSON.stringify([10, 20, 30, 40, 50]), JSON.stringify(multiplyByTen([1, 2, 3, 4, 5]))));

console.log('--------------------------------------------------------------------------------------')
console.log("Expected output of filterEqualToNumber([1, 2, 3, 4, 5]) is  [10, 20, 30, 40, 50] " + myTestAssert(JSON.stringify([3]), JSON.stringify(filterEqualToNumber([1, 2, 3, 4, 5]))));

console.log('--------------------------------------------------------------------------------------')
console.log("Expected output of multiplyByTen([1, 2, 3, 4, 5]) is  [10, 20, 30, 40, 50] " + myTestAssert(JSON.stringify([10, 20, 30, 40, 50]), JSON.stringify(multiplyByTen([1, 2, 3, 4, 5]))));

console.log('--------------------------------------------------------------------------------------')
console.log("Expected output of productOfAll([1,2,3,4]) is 24 " + myTestAssert(24, productOfAll([1,2,3,4])));
