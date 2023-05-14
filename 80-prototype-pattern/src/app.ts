interface Prototype<T> {
    clone(): T;
}

class UserHistory implements Prototype<UserHistory> {
    createdAt: Date;

    clone(): UserHistory {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }

    constructor(
        public name: string,
        public email: string
    ) {
        this.createdAt = new Date();
    }

}

let user = new UserHistory("dfgsdf", "sfgsdfg@dfsg.com");
console.log(user);
let user2 = user.clone();
user2.name = "den";
console.log(user2);
console.log(user);