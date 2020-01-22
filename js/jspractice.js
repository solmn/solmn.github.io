/*jshint esversion: 6  */
(function () {
    "use strict";
    function reverseArray(array) {
        let new_result = [];
        for (let i = array.length - 1; i >=0; i--) {
            new_result.push(array[i]);
        }
        return new_result;
    }

    function reverseArrayInPlace(array) {
        let len = array.length;
        let m = Math.floor(len / 2);
        let tmp;
        for (let i = 0; i < m; i++) {
            tmp = array[i];
            array[i] = array[len - 1 - i];
            array[len - 1 - i] = tmp;
        }
    }
    
    function arrayToList(array) {
        let list = {};
        let target = list;
        for (let n of array) {
            if (Object.keys(list).length === 0) {
                list.value = n;
                list.rest = null;
                target = list;
            }
            else {
                target.rest = {
                    value: n,
                    rest: null
                };
                target = target.rest;
            }

        }
        return list;
    }
    
    function  listToArray(list) {
        let r = [];
        let target = list;
        while (target.rest !== null) {
            r.push(target.value);
            target = target.rest;
        }
        r.push(target.value);
        return r;
    }

    function prepend(e, list) {
        let l = {};
        if (list === null) {
            l.value = e;
            l.rest = null;
        }
        else {
            l.value = e;
            l.rest = list;
        }
        return l;
    }
    
    function  nth(j, list) {
        let t = list;
        let i = 0;
        while (t.rest !== null) {
            if (i ===j) {
                return t.value;
            }
            t = t.rest;
            i++;
        }
        if(i === j) {return t.value;}
        return undefined;
    }

    function recursive_nth(n, list) {
        if (list === null || n < 0) {
            return undefined;
        }
        if (n === 0) {
            return list.value;
        }
        else {
           return  recursive_nth(n - 1, list.rest);
        }
    }

    function deepEqual(x, y) {
        if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
        if (typeof x === "object" && typeof  y === "object"){
            let x_keys = Object.keys(x);
            let y_keys = Object.keys(y);
            if (x_keys.length !== y_keys.length) {
                return false;
            }
            for (let i = 0; i < x_keys.length; i++) {
                if (!deepEqual(x[x_keys[i]], y[x_keys[i]])) {
                    return false;
                }
            }
            return true;
        }
        else {
            return x === y;
        }

    }


    describe("Reverse Array", function() {

        context("when [1, 2, 3, 4, 5]", function() {
            it("the the result is [5, 4, 3, 2, 1]", function() {
                assert.equal(JSON.stringify([5, 4, 3, 2, 1]), JSON.stringify(reverseArray([1, 2, 3, 4, 5])));
            });
        });

    });

    describe("Reverse Array in place", function() {

        context("when [1, 2, 3, 4, 5]", function() {
            it("the the result is [5, 4, 3, 2, 1]", function() {
                let v = [1, 2, 3, 4, 5];
                reverseArrayInPlace(v);
                assert.equal(JSON.stringify([5, 4, 3, 2, 1]), JSON.stringify(v));
            });
        });

    });

    describe("List to Array", function() {

        context("when [10, 20]", function() {
            it("the the result is {value: 10, rest: {value: 20, rest: null}}", function() {
                assert.equal(JSON.stringify({value: 10, rest: {value: 20, rest: null}}), JSON.stringify(arrayToList([10, 20])));
            });
        });

    });

    describe("List to Array", function() {

        context("when [10, 20]", function() {
            it("the the result is {value: 10, rest: {value: 20, rest: null}}", function() {
                assert.equal(JSON.stringify({value: 10, rest: {value: 20, rest: null}}), JSON.stringify(arrayToList([10, 20])));
            });
        });

    });

    describe("Array to List", function() {

        context("when {value: 1, rest: {value: 2, rest: {value: 3, rest: null}}", function() {
            it("the the result is [1, 2, 3]", function() {
                assert.equal(JSON.stringify([1, 2, 3]), JSON.stringify(listToArray({value: 1, rest: {value: 2, rest: {value: 3, rest: null}}})));
            });
        });

    });

    describe("Prepend", function() {

        context("when {value: 2, rest: {value: 3, rest: null}} and 0 is entered", function() {
            it("the the result is {value: 1, rest:{value: 2, rest: {value: 3, rest: null}}}}", function() {
                assert.equal(JSON.stringify({value: 1, rest:{value: 2, rest: {value: 3, rest: null}}}), JSON.stringify(prepend(1, {value: 2, rest: {value: 3, rest: null}})));
            });
        });

    });

    describe("Nth", function() {

        context("when {value: 2, rest: {value: 3, rest: null}} and 1 is entered", function() {
            it("the the result is 3", function() {
                assert.equal(3, nth(1, {value: 1, rest: {value: 3, rest: null}}));
            });
        });

    });

    describe("Recursive Nth", function() {

        context("when {value: 2, rest: {value: 3, rest: null}} and 1 is entered", function() {
            it("the the result is 3", function() {
                assert.equal(3, recursive_nth(1, {value: 1, rest: {value: 3, rest: null}}));
            });
        });

    });

    describe("Deep equal", function() {

        context("when {a:5, b:6, c: {e:8}} and {a:5, b:6, c: {e:8}}  is entered", function() {
            it("the the result is true", function() {
                assert.isTrue(deepEqual({a:5, b:6, c: {e:8}}, {a:5, b:6, c: {e:8}}));
            });
        });
        context("when {a:5, b:6, c: {e:8}} and {a:5, b:6}  is entered", function() {
            it("the the result is false", function() {
                assert.isFalse(deepEqual({a:5, b:6, c: {e:8}}, {a:5, b:6}));
            });
        });

    });


}());