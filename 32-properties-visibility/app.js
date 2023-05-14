"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Vehicle_price;
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0);
    }
    set model(model) {
        this._model = model;
        __classPrivateFieldSet(this, _Vehicle_price, 100, "f");
    }
    get model() {
        // this.run //exist
        return this._model;
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
_Vehicle_price = new WeakMap();
class EuroTruck extends Vehicle {
    setDamage() {
        // this._model
    }
    setRun(km) {
        // this.#price = 100;         // error
        this.run = km / 0.5;
        // this.damages    // error
    }
}
new Vehicle().make = "sasdf";
// new Vehicle().damages;           //error
// new Vehicle().run;        //error
