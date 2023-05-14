interface Role {
    name: string;
}

interface Permission {
    date: Date;
}

interface User {
    name: string;
    roles: Role[];
    permission: Permission;
}

const user: User = {
    name: "den",
    roles: [],
    permission: {
        date: new Date(),
    }
}

const nameUser = user["name"];
const roleNames = "roles";


type rolesType = User["roles"];              // Role[]
// type roleType2 = User[roleNames];       //error
type rolesType3 = User[typeof roleNames];       //success, if const


type roleType = User["roles"][number];          // Role
type dateType = User["permission"]["date"];          // Date

const roles = ["admin", "user", "moderator"];               //: string[]
const roles2 = ["admin", "user", "moderator"] as const;       //: readonly ["admin", "user", "moderator"]

type roleTypes = typeof roles2[number];                        //: "admin" | "user" | "moderator"



