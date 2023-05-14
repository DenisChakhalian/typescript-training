const n: null = null;
const n2: null = undefined; //error
const n3: any = null;
const n4: number = null;    //error
const n5: string = null;    //if "strictNullChecks": false in tsconfig.json - not error, but bad!


interface User {
    name: string;
}

function getUser() {
    if (Math.random() > 0.5) {
        return null;
    } else {
        return {
            name: "den"
        } as User
    }
}

const user = getUser();
// if(user){
    const name2 = user.name;  //not error, if "strictNullChecks": false
// }
