type httpMethod = "post" | "get";

type hugeString = string;

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
    return -1;
}

fetchWithAuth("l", "get");

let method = "post";

fetchWithAuth("l", method as "post");

type User = {
    name: string,
    age: number,
    skills: string[],
};

type Role = {
    name: string,
    id: number,
};

type UserWithRole = User & Role;

// type UserWithRole = {
//     user: User,
//     role: Role,
// }

let user: UserWithRole = {
    name: "den",
    age: 22,
    skills: ["1", "2"],
    id: 1,
};