class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const user = new User("den");

console.log(user);
user.name = "denays";
console.log(user);

class Admin {
    role: number;          //"strictPropertyInitialization": false -- no error or !
}

const admin = new Admin();
admin.role = 1;