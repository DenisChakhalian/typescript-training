"use strict";
class Controller {
    handleWithLogg(req) {
        console.log("start");
        this.handel(req);
        console.log("end");
    }
}
// new Controller() // error
class UserController extends Controller {
    handel(req) {
        console.log(req);
    }
}
const c = new UserController();
c.handleWithLogg("req");
