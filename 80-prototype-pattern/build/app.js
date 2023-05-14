"use strict";
class UserHistory {
    clone() {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
    }
}
let user = new UserHistory("dfgsdf", "sfgsdfg@dfsg.com");
console.log(user);
let user2 = user.clone();
user2.name = "den";
console.log(user2);
console.log(user);
