let input: any;
let input2: unknown;

input2 = 4;
input2 = ["sdf", "asdf"];

let res: string = input;
let res2: string = input2;  //error

let res3: any = input2;

function run(i: unknown) {
    if (typeof i === "number") {
        i++;
    } else {
        i          // unknown
    }
}

run(input2);


async function getData() {
    try {
        await fetch("");
    } catch (error) {  //error - unknown
        if (error instanceof Error) {
            console.log(error.message);
        }
        // console.log(error.message);   //error "Object is of type unknown"
    }
}


async function getDataForce() {
    try {
        await fetch("");
    } catch (error) {
        const e = error as Error;           //bad
        console.log(e);
    }
}


type U1 = unknown | number;    //anyway U1 - unknown

type I1 = unknown & string;     //I1 - string
