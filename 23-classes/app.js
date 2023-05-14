"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User("den");
console.log(user);
user.name = "denays";
console.log(user);
