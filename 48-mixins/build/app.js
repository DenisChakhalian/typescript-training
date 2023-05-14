"use strict";
class List {
    constructor(itm) {
        this.itm = itm;
    }
}
class ExtendedListClass extends List {
    first() {
        return this.itm[0];
    }
}
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        first() {
            return this.itm[0];
        }
    };
}
const list = ExtendedList(List);
const res = new list(["111111fidfosfia", "2222222sfdgsdfgs"]);
console.log(res.first());
