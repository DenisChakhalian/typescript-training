let a = 5;
let b: string = a.toString();
let e: string = new String(a); //error
let f: string = new String(a).valueOf(); //not error
let g: boolean = new Boolean(a).valueOf();

let c = "sdfgdsag";
let d: number = parseInt(c);

interface User {
    name: string,
    email: string,
    login: string,
}

const user: User = {
    name: "den",
    email: "den@g.com",
    login: "denays",
};

const user2 = {
    name: "den",
    email: "den@g.com",
    login: "denays",
} as User;

const user3 = <User>{     //bad in React
    name: "den",
    email: "den@g.com",
    login: "denays",
}

interface Admin {
    name: string,
    role: number,
}

const admin: Admin = {  //bad, because admin has unnecessary properties (maybe error)
    ...user,
    role: 1,
}


interface Admin2 {
    name: string,
}

const admin2: Admin2 = user;  //bad

function userToAdmin(user: User): Admin {    //good
    return {
        name: user.login,
        role: 1,
    }
}

