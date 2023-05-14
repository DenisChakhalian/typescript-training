"use strict";
class AbstractMiddleware {
    handle(req) {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(req);
        }
        return;
    }
    next(mid) {
        this.nextMiddleware = mid;
        return mid;
    }
}
class AuthMiddleware extends AbstractMiddleware {
    handle(req) {
        console.log("AuthMiddleware");
        if (req.userId === 1) {
            return super.handle(req);
        }
        return { error: "Invalid auth!" };
    }
}
class ValidateMiddleware extends AbstractMiddleware {
    handle(req) {
        console.log("ValidateMiddleware");
        if (req.body === 1) {
            return super.handle(req);
        }
        return { error: "Body doesn't exist!" };
    }
}
class Controller extends AbstractMiddleware {
    handle(req) {
        console.log("Controller");
        return { success: req };
    }
}
const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();
auth.next(validate).next(controller);
console.log(auth.handle({
    userId: 3
}));
console.log(auth.handle({
    userId: 1
}));
console.log(auth.handle({
    userId: 1,
    body: 1
}));
