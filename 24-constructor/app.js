"use strict";
class User {
    constructor(nameOrAge, age) {
        if (typeof nameOrAge === "string") {
            this.name = nameOrAge;
        }
        else if (typeof nameOrAge === "number") {
            this.age = nameOrAge;
        }
        if (typeof age === "number") {
            this.age = age;
        }
    }
}
const user = new User("den");
const user2 = new User();
const user3 = new User(22);
const user4 = new User("denays", 22);
