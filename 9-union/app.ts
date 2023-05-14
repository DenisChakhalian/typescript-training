function logId(id: string | number | boolean) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else if (typeof id === "number") {
        console.log(id.toFixed());
    } else {
        console.log(id);
    }
}

logId(1);
logId("23fdf3232fsd");
logId(true);


function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        err.forEach(e => {
            console.log(e);
        })
    } else {
        console.log(err)
    }
}

function logObject(obj: { a: number } | { b: number }) {
    if ("a" in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

function logMultipleIds(a: string | number, b: string | boolean) {
    if (a === b) {
        a.toUpperCase();
        b.toLowerCase();
    } else {
        console.log(a)
        console.log(b)
    }
}

let a: 1 = 1;
//a = 2; // error