interface IMiddleware {
    next(mid: IMiddleware): IMiddleware;

    handle(req: any): any;
}

abstract class AbstractMiddleware implements IMiddleware {
    private nextMiddleware: IMiddleware;

    handle(req: any): any {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(req);
        }
        return;
    }

    next(mid: IMiddleware): IMiddleware {
        this.nextMiddleware = mid;
        return mid;
    }

}

class AuthMiddleware extends AbstractMiddleware {
    override handle(req: any): any {
        console.log("AuthMiddleware");
        if (req.userId === 1) {
            return super.handle(req);
        }
        return {error: "Invalid auth!"};
    }
}

class ValidateMiddleware extends AbstractMiddleware {
    override handle(req: any): any {
        console.log("ValidateMiddleware");
        if (req.body === 1) {
            return super.handle(req);
        }
        return {error: "Body doesn't exist!"};
    }
}


class Controller extends AbstractMiddleware {
    override handle(req: any): any {
        console.log("Controller");
        return {success: req};
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
