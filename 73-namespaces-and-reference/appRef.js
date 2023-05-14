"use strict";
var A;
(function (A) {
    A.a = 5;
})(A || (A = {}));
console.log(A.a); //5
/// <reference path="./module/app2.ts" />
console.log(A.a);
