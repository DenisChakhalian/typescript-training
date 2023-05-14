enum StatusCode {
    SUCCESS = 1,
    PROCESSED = 3,
    REJECTED = "r",
}

const res = {
    message: "Payment success",
    statusCode: StatusCode.SUCCESS,
};

//1 - success
//2 - processed
//3 - rejected

if (res.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
action(1);
action(3);

// action("r");                     //error

function compute() {
    return 3
}

enum Roles {
    ADMIN = 1,
    USER = ADMIN * 2,
    MODERATOR = compute(),
}

function test(x: { ADMIN: number }) {

}

test(Roles);


const enum Message {
    READ = 1,
    UNREAD = 2,
}

const res2 = Message.READ