abstract class Controller {
    abstract handel(req:any):void;

    handleWithLogg (req:any) {
        console.log("start");
        this.handel(req);
        console.log("end");
    }
}

// new Controller() // error

class UserController extends  Controller {
    handel(req: any):void {
        console.log(req);
    }
}

const c = new UserController();
c.handleWithLogg("req")