"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Uni(name) {
    console.log("Init :", name);
    return function () {
        console.log("Call :", name);
    };
}
let MyClass = class MyClass {
    method(_) {
    }
    static method2(_) {
    }
    constructor(_) {
    }
};
__decorate([
    Uni("Property2"),
    __metadata("design:type", Object)
], MyClass.prototype, "props2", void 0);
__decorate([
    Uni("Property"),
    __metadata("design:type", Object)
], MyClass.prototype, "props", void 0);
__decorate([
    Uni("Method"),
    __param(0, Uni("Method's Parameter")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyClass.prototype, "method", null);
__decorate([
    Uni("Static Property"),
    __metadata("design:type", Object)
], MyClass, "props2", void 0);
__decorate([
    Uni("Static Method"),
    __param(0, Uni("Static Method's Parameter")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MyClass, "method2", null);
MyClass = __decorate([
    Uni("Class2"),
    Uni("Class1"),
    __param(0, Uni("Constructor's Parameter")),
    __metadata("design:paramtypes", [Object])
], MyClass);
// Init : Property
// Call : Property
// Init : Method
// Init : Method's Parameter
// Call : Method's Parameter
// Call : Method
// Init : Static Property
// Call : Static Property
// Init : Static Method
// Init : Static Method's Parameter
// Call : Static Method's Parameter
// Call : Static Method
// Init : Class
// Init : Constructor's Parameter
// Call : Constructor's Parameter
// Call : Class
