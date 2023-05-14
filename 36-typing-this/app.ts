class UserBuilder {
    name: string;

    setName(name: string): this {
        this.name = name;
        return this;
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder;
    }
}

class AdminBuilder extends UserBuilder {
    role: string[];
}

const res = new UserBuilder().setName("den");
const res2 = new AdminBuilder().setName("den");

let user: UserBuilder | AdminBuilder = new UserBuilder();

if(user.isAdmin()) {
    console.log(user)     // user :  AdminBuilder
} else {
    console.log(user)     // user :  UserBuilder
}