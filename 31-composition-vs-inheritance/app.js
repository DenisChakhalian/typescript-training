"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
        return this.map(u => u.name).join(", ");
    }
}
const users = new Users();
users.push(new User("denn"));
users.push(new User("denays"));
console.log(users.toString()); // [object Object]
