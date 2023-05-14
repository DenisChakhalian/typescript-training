"use strict";
class User {
    set login(l) {
        this._login = "user-" + l;
    }
    get login() {
        return "no_login";
    }
}
const user = new User();
user.login = "den";
console.log(user);
console.log(user.login);
