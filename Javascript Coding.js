/**
 * JavaScript Coding: Write a multiplication function in javascript to use like this.
 */

function mul(a) {
    return function(b) {
        return function (c) {
            return a * b * c;
        }
    }
}

console.log(mul(2)(4)(5));
