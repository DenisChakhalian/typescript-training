"use strict";
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        return this.users;
    }
}
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log("Users:", obj.users);
    return obj;
}
console.log(new UserService().getUsersInDatabase()); // 1000
console.log(nullUser(new UserService()).getUsersInDatabase()); //0
console.log(logUsers(nullUser(new UserService())).getUsersInDatabase()); //Users: 0   |   0
console.log(nullUser(logUsers(new UserService())).getUsersInDatabase()); //Users: 0   |   0
