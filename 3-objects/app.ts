function getFullName(userEntity: { firstname: string, surname: string }): string {
    return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
    firstname: "Denis",
    surname: "Chakhalian",
    city: "Kharkov",
    age: "22",
    skills: {
        exist: true,
        alive: true,
    },
};

console.log(getFullName(user));

let info: {
    officeId: number;
    isOpened: boolean;
    contacts: {
        phone: string;
        email: string;
        address: {
            city: string;
        }
    }
} = {
    "officeId": 66,
    "isOpened" : false,
    "contacts": {
        "phone": "+380506666666",
        "email": "my.chahalyan@gmail.com",
        "address": {
            "city": "Kharkov"
        }
    }
}
