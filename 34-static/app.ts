class UserService {
    static name:string = "sdfgsd" // error: name is reserved
    static db:any;
    private static db2:any;
    static async getUser(id:number) {
        await new Promise(()=>1)     //not error
        return UserService.db.findById(id);
    }

    constructor(id:number) {}

    create(){
        UserService.db;
    }

    static {
        await new Promise(()=>1) // error
        UserService.db2 = "dsfg"
    }
}

UserService.db;
UserService.getUser(1);

const inst = new UserService(1);

inst.create()
inst.db;                //error
inst.getUser(1);                //error