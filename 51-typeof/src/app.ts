let strOrNumber: string | number = 5;

if (strOrNumber) {    //number

}


if (Math.random() > 0.5) {
    strOrNumber = 5;
} else {
    strOrNumber = "str";
}

strOrNumber      //string or number


if (typeof strOrNumber === "string") {
    console.log(strOrNumber);           //string
} else {
    console.log(strOrNumber);           //number
}

let numberOrStr: typeof strOrNumber;         //string or number

const user = {
    name: "den"
};

// type keyOfUser2 = keyof user;              //error
type keyOfUser = keyof typeof user;              //success; return name;

enum Direction {
    Up,
    Down
}

type d = keyof typeof Direction;               //"Up" | "Down"