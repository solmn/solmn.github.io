
window.onload = function() {
    function myTestAssert(expected, output) {

      console.assert(expected === output, "TEST FAILD. expected " + expected  + " but found " + output)

      if (expected === output) {
        return "TEST SUCCEEDED";
      }
      else{
        return "TEST FAILD. expected " + expected  + " but found " + output;
      }
    }

    function sum (a) {
      return a.reduce((prev, e) => prev + e);
    }

    function multiply (a) {
      return a.reduce((prev, e) => prev * e)
    }

    function reverse (s) {
      return s.split("").reduce((prev, e) => e + prev, "");
    }

    function filterLongWords (a, i) {
      return a.filter(e => e.length > i);
    }

    console.log("Expected output of sum([1,2,3,4]) is 10 " + myTestAssert(10, sum([1,2,3,4])));
    document.getElementById("sum").innerHTML = "Expected output of sum([1,2,3,4]) is 10 " + myTestAssert(10, sum([1,2,3,4]));
    console.log("Expected output of multiply([1,2,3,4]) is 10 " + myTestAssert(24, multiply([1,2,3,4])));
    console.log("Expected output of reverse('Hello') is olleH " + myTestAssert('olleH', reverse("Hello")));
    document.getElementById("multiply").innerHTML = "Expected output of multiply([1,2,3,4]) is 24 " + myTestAssert(24, multiply([1,2,3,4]));
    document.getElementById("reverse").innerHTML = "Expected output of reverse('Hello') is olleH " + myTestAssert('olleH', reverse("Hello"));
    console.log("Expected output of filterLongWords(['abc', 'abcd', 'abcde'], 3) is  ['abcd', 'abcde'] " + myTestAssert(JSON.stringify(['abcd', 'abcde']), JSON.stringify(filterLongWords(['abc', 'abcd', 'abcde'], 3))));
    document.getElementById("filter").innerHTML = "Expected output of filterLongWords(['abc', 'abcd', 'abcde'], 3) is  ['abcd', 'abcde'] " + myTestAssert(JSON.stringify(['abcd', 'abcde']), JSON.stringify(filterLongWords(['abc', 'abcd', 'abcde'], 3)));



}
